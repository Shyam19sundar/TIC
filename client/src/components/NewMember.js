import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { storage } from "../firebase"
import { useHistory } from "react-router-dom"
import axios from '../axios'
import YearPicker from "react-year-picker";
import Modal from 'react-bootstrap/Modal'
import '../css/NewMember.css'

function NewMember() {

    const history = useHistory();

    const [image, setImage] = useState("")
    const [listofClusterss, setlistofClusterss] = useState([])
    const [cluster, setcluster] = useState("")
    const [name, setname] = useState("")
    const [startyear, setstartyear] = useState("")
    const [endyear, setendyear] = useState("")
    const [dept, setdept] = useState('')
    const [year, setyear] = useState('')
    const [linkedIn, setlinkedIn] = useState('')
    const [github, setgithub] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleChange = e => {
        if (e.target.files[0]) {
            var temp = e.target.files[0]
            setImage(temp)
        }
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

    const handleSubmit = e => {
        e.preventDefault()
        if (endyear - startyear === 1) {
            const date = Date.now()
            const uploadTask = storage.ref(`images/${image.name}_${date}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progressCurrent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(`${image.name}_${date}`)
                        .getDownloadURL()
                        .then(url => {
                            axios.post("/new-member", {
                                name: name,
                                startyear: startyear,
                                endyear: endyear,
                                cluster: cluster,
                                year: year,
                                dept: dept,
                                linkedIn: linkedIn,
                                github: github,
                                photo: url
                            }).then(res => {
                                if (res.status == 200) {
                                    history.push("/admin")
                                }
                            }
                            )
                                .catch(err => console.log(err))
                        });
                }
            )
        } else {
            setShow(true)
        }

    }
    useEffect(() => {
        axios.get("/clusters").then(res => setlistofClusterss(res.data))
    }, [])
    return (
        <div className='new__member'>
            <p>Add Member</p>
            <form>
                <div>
                    <div>
                        <div>Name</div>
                        <input required onChange={(e) => setname(e.target.value)} type="text" placeholder="Name" />
                    </div>
                    <div>
                        <div>Batch Year</div>
                        <YearPicker required onChange={(date) => setstartyear(date)} />
                        <p>to</p>
                        <YearPicker onChange={(date) => setendyear(date)} />
                    </div>
                    <div>
                        <div>Department Year:</div>
                        <input type="text" onChange={(e) => setyear(e.target.value)} placeholder="Example: IIInd Year" />
                    </div>
                    <div>
                        <div>Department:</div>
                        <input type="text" onChange={(e) => setdept(e.target.value)} placeholder="Example: ECE" />
                    </div>
                    <div>
                        <div>LinkedIn</div>
                        <input type="text" onChange={(e) => setlinkedIn(e.target.value)} placeholder="LinkedIn Profile Link" />
                    </div>
                    <div>
                        <div>Github:</div>
                        <input type="text" onChange={(e) => setgithub(e.target.value)} placeholder="GitHub Profile Link" />
                    </div>
                </div>
                <div>
                    <div onChange={handleChange}>
                        <div>Image</div>
                        <input type="file" />
                    </div>
                    <div className="memberBox">
                        {image ? <img alt="Preview" className='previewImage' src={window.URL.createObjectURL(image)} /> : <img src="placeholder-image.png" alt="placeholder" />}
                    </div>
                    <div className="cluster-choice">
                        <select onClick={(e) => setcluster(e.target.value)} as="select" defaultValue="Choose...">
                            <option disabled selected hidden>Choose...</option>
                            {listofClusterss?.map(clustername =>
                                <option>{clustername}</option>
                            )}
                        </select>
                    </div>
                </div>

            </form>
            <button onClick={handleSubmit}>Add Member</button>
            <Modal
                className="modal"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Year Validation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please enter Valid Year
        </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>
                        Close
          </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewMember
