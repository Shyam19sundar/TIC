import React, { useEffect, useState } from 'react'
import axios from '../axios.js'
import '../css/SingleEvent.css'
import '../css/Carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import $ from 'jquery'

function SingleEvent() {
    const path = window.location.pathname
    const _id = path.split('/events/')[1]
    const [singleEvent, setSingleEvent] = useState(Object)
    useEffect(() => {
        axios.get('/single-event', {
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

    $(document).bind("contextmenu", function (e) {
        return false;
    });

    return (
        <div className='single-event'>
            <h1>{singleEvent.event_name}</h1>
            <Carousel id='carousel'>
                {
                    singleEvent.event_images?.map(image =>
                        <Carousel.Item id='carousel-item' interval={2000}>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt="First slide"
                            />
                        </Carousel.Item>)
                }
            </Carousel>
            <h3>Description</h3>
            <p>{singleEvent.event_desc}</p>
        </div>
    )
}

export default SingleEvent
