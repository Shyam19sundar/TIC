import React, { useState } from 'react'
import { storage } from "../firebase"
import axios from '../axios'
import "../css/RegisterEvents.css"
import ReactLoading from 'react-loading';
import $ from 'jquery'
import { useHistory } from 'react-router-dom';

function RegisterEvents() {
    const [image, setImage] = useState('')
    const [name, setname] = useState('')
    const [sponsors, setsponsors] = useState('')
    const [desc, setdesc] = useState('')
    const [time, settime] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [form, setform] = useState('')
    const history = useHistory()
    const handleChange = e => {
        if (e.target.files[0]) {
            var temp = e.target.files[0]
            console.log(e.target.files[0])
            setImage(temp)
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(image + 'image')
        $('.register__events').css({ opacity: '0.3' })
        $('#loadingUpload').show()
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
                        axios.post("/register-event", {
                            name: name,
                            sponsors: sponsors,
                            desc: desc,
                            date: eventDate,
                            form: form,
                            time: time,
                            poster: url
                        }).then(res => {
                            $('.register__events').css({ opacity: '1' })
                            $('#loadingUpload').hide()
                            history.push('/admin')
                        })
                            .catch(err => console.log(err))
                    });
            }
        )

    }

    return (
        <div className="register__events">
            <ReactLoading id='loadingUpload' color='#000000' type='spinningBubbles' />
            <form onSubmit={handleSubmit} >
                <h3>Registration Details</h3>
                <div className="events-registerCont">
                    <div className="events-registerLeft">
                        <div>
                            <div>Event Name</div>
                            <input required type="text" onChange={(e) => setname(e.target.value)} placeholder="Event Name" />
                        </div>
                        <div>
                            <div>Event Date</div>
                            <input required type="date" onChange={(e) => setEventDate(e.target.value)} placeholder="Event Date" />
                        </div>
                        <div>
                            <div>Timings of the Event</div>
                            <input required onChange={e => settime(e.target.value)} type="text" placeholder="Time Duration" />
                        </div>
                        <div>
                            <div>Event Sponsors</div>
                            <input required type="text" onChange={(e) => setsponsors(e.target.value)} placeholder="Event Sponsors" />
                        </div>
                        <div>
                            <div>Google Forms Link</div>
                            <input required type="text" onChange={(e) => setform(e.target.value)} placeholder="Google Forms Link" />
                        </div>
                    </div>
                    <div className="events-registerRight">
                        <div>
                            <div>Event Description</div>
                            <textarea required rows={3} onChange={(e) => setdesc(e.target.value)} />
                        </div>
                        <div onChange={handleChange}>
                            <div>Poster</div>
                            <input required type="file" />
                        </div>
                        <div className="events-registerPreview">
                            {image ? <img alt="Preview" width="75%" height="100%" className='previewImage' src={window.URL.createObjectURL(image)} /> : <img src="placeholder-image.png" alt="placeholder" width="75%" height="100%" />}
                        </div>
                        <div>
                            <button type="submit">Update Event Details</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterEvents
