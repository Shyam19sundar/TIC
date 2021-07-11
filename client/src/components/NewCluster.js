import React, { useState } from 'react'
import axios from "../axios"
import "../css/clustermember.css"
import { useHistory } from "react-router-dom"
import Cookies from 'js-cookie';
import { refresh, hasAccess } from './Access.js'

function NewCluster() {
    const history = useHistory();

    const [name, setname] = useState("")
    const handlerSubmit = (e) => {
        e.preventDefault()
        hasAccessforNewCluster();
    }

    const newCluster = async (access, refreshToken) => {
        return new Promise((resolve, reject) => {
            axios
                .post(
                    "/new-cluster",
                    {
                        cluster_name: name
                    },
                    {
                        headers: {
                            authorization: `Bearer ${access}`,
                        },
                    }
                )
                .then(
                    (response) => {
                        // setResponse(response.data);
                        if (response.status == 200) {
                            history.push("/admin")
                        }
                        resolve(true);
                    },
                    async (error) => {
                        if (error.response.status === 401)
                            console.log("You are not authorized!");
                        else if (error.response.status === 498) {
                            const access = await refresh(refreshToken);
                            return await newCluster(access, refreshToken);
                        }
                        resolve(false);
                    }
                );
        });
    };

    const hasAccessforNewCluster = async () => {
        let accessToken = Cookies.get("access");
        let refreshToken = Cookies.get("refresh");
        const access = await hasAccess(accessToken, refreshToken);
        if (!access) {
            console.log("You are not authorized");
        } else {
            await newCluster(access, refreshToken);
        }
    };

    return (
        <div className="new-clusterFull">
            <form className="new__cluster" onSubmit={handlerSubmit}>
                <div>Cluster Name</div>
                <input onChange={(e) => setname(e.target.value)} required type="text" placeholder="Cluster Name" />
                <button type="submit">ADD&nbsp;CLUSTER</button>
            </form>
        </div>
    )
}

export default NewCluster