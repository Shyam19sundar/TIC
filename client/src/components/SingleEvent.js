import React, { useEffect, useState } from 'react'
import axios from '../axios.js'
import '../css/SingleEvent.css'
import '../css/Carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import $ from 'jquery'

function SingleEvent() {
    const path = window.location.hash
    const _id = path.slice(9)
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
            <div className="event-leftDiv">
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
            </div>
            <div className="event-rightDiv">
                <p>{singleEvent.event_desc}</p>
                <div className="right-downStats">
                    <div>
                        <small>Organized By:</small> <br />
                        <span>{singleEvent.event_cluster}</span>
                    </div>
                    <div>
                        <small>Date:</small> <br />
                        <span>{singleEvent.event_date}</span>
                    </div>
                    {
                        singleEvent.no_of_participants != 0 ? (
                            <div>
                                <small>No.of Participants:</small> <br />
                                <span>{singleEvent.no_of_participants}</span>
                            </div>

                        ) : ""
                    }
                    {
                        singleEvent.events_sponsors != null ? (
                            <div>
                                <small>Sponsors:</small> <br />
                                <span>{singleEvent.events_sponsors}</span>
                            </div>

                        ) : ""
                    }
                    {
                        singleEvent.events_winners != null ? (
                            <div>
                                <small>Winners:</small> <br />
                                <span>{singleEvent.events_winners}</span>
                            </div>

                        ) : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleEvent