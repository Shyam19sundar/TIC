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