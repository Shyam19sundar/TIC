import React, { useState, useEffect } from 'react'
import axios from "../axios"
import { storage } from "../firebase"
import $ from "jquery"
import { useHistory } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ReactLoading from 'react-loading';
import Cookies from 'js-cookie';
import { refresh, hasAccess } from './Access.js'

function AddEvents() {
    const [name, setname] = useState("")
    const [sponsors, setsponsors] = useState("")
    const [desc, setdesc] = useState("")
    const [winners, setwinners] = useState("")
    const [noofparticipants, setnoofparticipants] = useState("")
    const [cluster, setcluster] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [listofClusterss, setlistofClusterss] = useState([])
    const [images, setImages] = useState([])
    const [isCondnTrue, setisCondnTrue] = useState(false)
    const [urlImagestate, seturlImage] = useState([])
    var urlImage = []
    const history = useHistory()
    var time = setInterval(function () {
        if ((urlImage.length === images.length) && urlImage.length !== 0) {
            console.log("!!!!!")
            $('#loadingUpload').hide()
            $('.postContainer').css({ opacity: '1' })
            clearInterval(time)
            history.push('/admin?add-events')
        }
    }, 1000);

    const addEvents = async (access, refreshToken) => {
        return new Promise((resolve, reject) => {
            axios
                .post(
                    "/new-event",
                    {
                        name: name,
                        sponsors: sponsors,
                        date: eventDate,
                        desc: desc,
                        winners: winners,
                        noofparticipants: noofparticipants,
                        cluster: cluster,
                        images: urlImagestate
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
                        resolve(true);
                    },
                    async (error) => {
                        if (error.response.status === 401)
                            console.log("You are not authorized!");
                        else if (error.response.status === 498) {
                            const access = await refresh(refreshToken);
                            return await addEvents(access, refreshToken);
                        }
                        resolve(false);
                    }
                );
        });
    };

    const hasAccessForAddEvents = async () => {
        let accessToken = Cookies.get("access");
        let refreshToken = Cookies.get("refresh");
        const access = await hasAccess(accessToken, refreshToken);
        if (!access) {
            console.log("You are not authorized");
        } else {
            await addEvents(access, refreshToken);
        }
    };

    useEffect(() => {
        axios.get("/clusters").then(res => setlistofClusterss(res.data))
        if (isCondnTrue) {
            console.log("object")
            hasAccessForAddEvents()
        }
    }, [isCondnTrue])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (images.length !== 0) {
            $('.postContainer').css({ opacity: '0.3' })
            $('#loadingUpload').show()
            for (let i = 0; i < images.length; i++) {
                let date = Date.now()
                const uploadTask = storage.ref(`images/${images[i]?.name}_${date}`).put(images[i]);
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
                            .child(`${images[i]?.name}_${date}`)
                            .getDownloadURL()
                            .then(urlTemp => {
                                urlImage.push(urlTemp)
                                seturlImage(urlImage)
                                if (urlImage.length == images.length) {
                                    setisCondnTrue(true)
                                }
                            });
                    }
                )
            }
        }
        else {
            alert("Images should be Uploaded");
        }
    }

    const handleChange = e => {
        if (e.target.files[0]) {
            var temp = e.target.files[0]
            $('#uploadButton').css({ cursor: 'pointer' })
            setImages([...images, temp])
        }
    }

    return (
        <div className="add__events">
            <ReactLoading id='loadingUpload' color='#000000' type='spinningBubbles' />
            <div className="new__event postContainer">
                <form onSubmit={handleSubmit}>
                    <div className="form__single__row">
                        <div>
                            <div className="input__label" >Event Name</div>
                            <input required onChange={(e) => setname(e.target.value)} type="text" placeholder="Event Name" />
                        </div>
                        <div>
                            <div className="input__label" >Event Sponsors</div>
                            <input required onChange={(e) => setsponsors(e.target.value)} type="text" placeholder="Sponsors" />
                        </div>
                        <div>
                            <div className="input__label" >Event Date</div>
                            <input required type="date" onChange={(e) => setEventDate(e.target.value)} placeholder="Date" />
                        </div>
                    </div>
                    <div className="form__single__row">
                        <div>
                            <div className="input__label" >Event Description</div>
                            <textarea required rows={5} onChange={(e) => setdesc(e.target.value)} placeholder="Description" />
                        </div>
                        <div className="filecont form__single__row">
                            <div className="fileUpload" onChange={handleChange}>
                                <CloudUploadIcon id='cloudIcon' />
                                <input required id="upload" type="file" hidden multiple />
                                <label htmlFor="upload" className="bg-success uploadbut">   Choose files to Upload  </label>
                                <div className="uploadContainer">
                                    {images?.map(item => (
                                        <div className="uploadContainerShyam">
                                            <p id='uploadStat'>{item.name}</p>
                                            <img className='previewImage' src={window.URL.createObjectURL(item)} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form__single__row">
                        <div>
                            <div className="input__label">Winners(If Any)</div>
                            <input onChange={(e) => setwinners(e.target.value)} type="text" placeholder="Winners" />
                        </div>
                        <div>
                            <div className="input__label">No of Participants</div>
                            <input onChange={(e) => setnoofparticipants(e.target.value)} type="text" placeholder="No of Participants" />
                        </div>
                        <div>
                            <div className="input__label">Cluster</div>
                            <select onClick={(e) => setcluster(e.target.value)} as="select" defaultValue="Choose...">
                                <option disabled selected hidden>Choose...</option>
                                {listofClusterss?.map(clustername =>
                                    <option>{clustername}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <button type="submit">
                        Add Event
                    </button>
                </form>
            </div>
            {/* <div className="add__events__img">
                <img src="newevent.png" />
            </div> */}
        </div >
    )
}

export default AddEvents



