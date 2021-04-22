import React, { useEffect, useState } from 'react'
import axios from '../axios.js'
import '../css/RegisterEvent.css'

function RegisterEvent() {
    const path = window.location.hash
    const _id = path.slice(11)
    const [singleEvent, setSingleEvent] = useState(Object)
    useEffect(() => {
        axios.get('/register-event', {
            params: {
                _id: _id
            }
        })
            .then(res => {
                if (res.status !== 204) {
                    console.log(res.data)
                    setSingleEvent(res.data)
                }
                else if (res.status === 204) {
                    console.log('No events found')
                }
            })
            .catch(err =>
                console.log('Something went wrong during fetching event'))
    }, [])

    return (
        <div className='register-event'>
            <h1>{singleEvent.event_name}</h1>
            <a target='blank' href={singleEvent.poster}><img src={singleEvent.poster} alt='Event Poster'></img></a>
            <h3>Description</h3>
            <span>{singleEvent.event_desc}</span>
            {
                singleEvent.event_time ?
                    <div>
                        <h4>Time : </h4>
                        <span>{singleEvent.event_time}</span>
                    </div> : null
            }
            {
                singleEvent.event_sponsors ?
                    <div>
                        <h4>Sponsors : </h4>
                        <span>{singleEvent.event_sponsors}</span>
                    </div> : null
            }

            <a target='blank' href={singleEvent.form}><button>Register</button></a>
        </div>
    )
}

export default RegisterEvent
