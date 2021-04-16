import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from '../axios'
import { useHistory } from "react-router-dom";

function DeleteEvents(show) {

    const [events, setevents] = useState()
    const history = useHistory();

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

    const handleDeleteEvent = (singleEvent) => {
        axios.delete('/deleted-finished-events', {
            params: {
                id: singleEvent._id
            }
        })
            .then(res => {
                console.log(res.data)
                history.push("/admin");
            })
            .catch(err => console.log(err))
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
