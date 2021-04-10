import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from '../axios'
import { useHistory } from "react-router-dom";

function DeleteEvents(show) {

    const [events, setevents] = useState()
    const history = useHistory();

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
