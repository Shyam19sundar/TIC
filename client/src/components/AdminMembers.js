import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "../axios"
import Carousel from 'react-elastic-carousel'
import Item from "./Item";
import { Modal, Button } from "@material-ui/core";

function AdminMembers() {

    const [batch, setbatch] = useState()
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]


    useEffect(() => {
        axios.get('/current-batch-members')
            .then(res => {
                if (res.status === 204) {
                    setbatch(null)
                } else {
                    setbatch(res.data)
                }
            })
            .catch(err => console.log(err))
    }, [])

    console.log(batch)

    return (
        <div className="admin-membersFull">
            <div className="dashboard-navbar">
                <Link to="/admin">
                    <div>Events</div>
                </Link>
                <Link to={{
                    pathname: "/admin",
                    search: "?members"
                }
                }>
                    <div>Members</div>
                </Link>
                {/* <div className="admin-indicator">Admin Page</div> */}
            </div>
            {batch ? (
                <Carousel className="clusters-carousel" breakPoints={breakPoints}>
                    {batch.teams.map(singleTeam => (
                        <Item>
                            <div className="single-carouselCard">
                                <div className='cluster-singleTeam'>
                                    <p> {singleTeam.name}</p>
                                </div>
                                <div className="cluster1-members">
                                    {singleTeam?.members?.map(member => (
                                        <div className='cluster-singleMember'>
                                            <img src={member.photo} width="50px" height="50px" />
                                            <p>{member.membername}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Item>
                    ))}
                </Carousel>
            )
                :
                (
                    console.log("NO batch")
                )}
        </div>
    )
}

export default AdminMembers
