import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import axios from "../axios"
import "../css/clustermember.css"

function NewCluster() {
    const [name, setname] = useState("")
    const handlerSubmit = (e) => {
        e.preventDefault()
        axios.post("/new-cluster", { cluster_name: name })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    // const getRoom = async (access, refreshToken) => {
    //     return new Promise((resolve, reject) => {
    //         axios
    //             .post(
    //                 "/roomMessage",
    //                 {
    //                     room: room.roomName,
    //                     message: message,
    //                     name: user?.name
    //                 },
    //                 {
    //                     headers: {
    //                         authorization: `Bearer ${access}`,
    //                     },
    //                 }
    //             )
    //             .then(
    //                 (response) => {
    //                     // setResponse(response.data);
    //                     resolve(true);
    //                 },
    //                 async (error) => {
    //                     if (error.response.status === 401)
    //                         console.log("You are not authorized!");
    //                     else if (error.response.status === 498) {
    //                         const access = await refresh(refreshToken);
    //                         return await getRoom(access, refreshToken);
    //                     }
    //                     resolve(false);
    //                 }
    //             );
    //     });
    // };

    // const accessRoom = async () => {
    //     let accessToken = Cookies.get("access");
    //     let refreshToken = Cookies.get("refresh");
    //     const access = await hasAccess(accessToken, refreshToken);
    //     if (!access) {
    //         console.log("You are not authorized");
    //     } else {
    //         await getRoom(access, refreshToken);
    //     }
    // };

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