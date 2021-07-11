import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from '../axios'
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import { refresh, hasAccess } from './Access.js'

function DeleteEvents(show) {

    const [events, setevents] = useState()
    const history = useHistory();

    const DeleteEvent = async (access, refreshToken, singleEvent) => {
        return new Promise((resolve, reject) => {
            axios
                .post(
                    "/deleted-finished-events",
                    {
                        id: singleEvent._id
                    },
                    {
                        headers: {
                            authorization: `Bearer ${access}`,
                        },
                    }
                )
                .then(
                    (response) => {
                        history.push("/admin");
                        resolve(true);
                    },
                    async (error) => {
                        if (error.response.status === 401)
                            console.log("You are not authorized!");
                        else if (error.response.status === 498) {
                            const access = await refresh(refreshToken);
                            return await DeleteEvent(access, refreshToken);
                        }
                        resolve(false);
                    }
                );
        });
    };

    const hasAccessForDeleteEvent = async (singleEvent) => {
        let accessToken = Cookies.get("access");
        let refreshToken = Cookies.get("refresh");
        const access = await hasAccess(accessToken, refreshToken);
        if (!access) {
            console.log("You are not authorized");
        } else {
            await DeleteEvent(access, refreshToken, singleEvent);
        }
    };

    const handleDeleteEvent = (singleEvent) => {
        hasAccessForDeleteEvent(singleEvent)
        // axios.delete('/deleted-finished-events', {
        //     params: {
        //         id: singleEvent._id
        //     }
        // })
        //     .then(res => {
        //         console.log(res.data)
        //         history.push("/admin");
        //     })
        //     .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('/finished-events').then(res => setevents(res.data))
    }, [])
    console.log(events)
    return (
        <div>
            {
                console.log(show)
            }
            <Modal
                {...show}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Finished Events
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {
                            events ? (
                                events?.map(singleEvent => (
                                    <div>
                                        <p>{singleEvent.event_name}</p>
                                        <button onClick={() => handleDeleteEvent(singleEvent)}>Delete</button>
                                    </div>
                                ))
                            ) : <p>No records found</p>
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default DeleteEvents
