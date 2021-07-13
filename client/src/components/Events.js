import React, { useEffect, useState } from 'react'
import '../css/Events.css'
import Bounce from 'react-reveal/Bounce';
import axios from '../axios.js'
import { Link } from 'react-router-dom';
import $ from "jquery"

function Events() {
    const [events, setEvents] = useState([])
    const [upcoming, setUpcoming] = useState(null)
    const [length, setLength] = useState(Number)

    useEffect(() => {
        $(".headerFull").css("display", "block");
        $(".headerFull").css("position", "fixed");
        $(".headerFull").css("top", "0");
    }, [])

    useEffect(() => {
        axios.get('home-events')
            .then(res => {
                if (res.status !== 204) {
                    setUpcoming(res.data.arr)
                }
                else if (res.data.arr.length === 0) {
                    setUpcoming(null)
                    console.log('No events found')
                }
            })
            .catch(err =>
                console.log('Something went wrong during fetching events'))

        axios.get('/finished-events')
            .then(res => {
                if (res.status !== 204) {
                    console.log(res.data)
                    setEvents(res.data)
                    setLength(res.data.length * 220)
                }
                else if (res.status === 204) {
                    console.log('No events found')
                }
            })
            .catch(err =>
                console.log('Something went wrong during fetching events'))
    }, [])

    function toDateString(no) {
        var temp = no.split('-')
        var reversed = temp.reverse()
        var date = new Date(`${reversed[1]}/${reversed[0]}/${reversed[2]}`);
        var dateArr = date.toDateString().split(' ')
        return dateArr
    }
    function returnMonth(no) {
        var arr = toDateString(no)
        return `${arr[1]} ${arr[3]}`
    }
    function returnDate(no) {
        var arr = toDateString(no)
        return `${arr[2]}`
    }
    function returnTime(no) {
        console.log(no)
        // var arr = toDateString(no)
        var arr = no.split(' ')
        return `${arr[2]} ${arr[1]} ${arr[3]}`
    }

    var propLeft = true
    var propRight;
    var width = window.screen.availWidth
    if (width < 1008) {
        propRight = true
        propLeft = false
    }

    console.log(upcoming)

    return (
        <div className='events'>
            {/* <Header /> */}
            <h1>Forthcoming Events</h1>
            {
                upcoming ? (
                    upcoming.map(single => (
                        <div className='events-upcoming'>
                            <div className='upcoming-time'>
                                <span id="date">{returnDate(single.event_date)}</span><br />
                                <span>{returnMonth(single.event_date)}</span>
                            </div>
                            <div className='upcoming-desc'>
                                <div>
                                    <h4>{single.event_name}</h4>
                                    <Link to={`/register/${single._id}`}>
                                        <a>know more &gt;&gt;&gt;</a>
                                    </Link>
                                </div>
                                <p>{single.event_desc}</p>
                            </div>
                            <Link to={`/register/${single._id}`}>
                                <a>know more &gt;&gt;&gt;</a>
                            </Link>
                            <a target='blank' href={single.form} id='reg-button'><button>Register Now!</button></a>
                        </div>
                    )))
                    : (
                        <h4>No Forthcoming Events . Stay tuned :))</h4>
                    )
            }
            <h1>Wrapped Up Events</h1>
            <div className='events_container' style={{ '--height': `${length}px` }} >
                {
                    events?.map((singleEvent, index) => (
                        <div className='event_single'>
                            <div class="timeline_tag"></div>
                            <Bounce left={(index % 2 === 0) ? propLeft : null} right>
                                <div className='timeline_item'>
                                    <img src={!singleEvent.event_images[0] ? '../images/events-sample.jpg' : singleEvent.event_images[0]} />
                                    <span>{returnDate(singleEvent.event_date) + ' ' + returnMonth(singleEvent.event_date)}</span>
                                    <div>
                                        <h3>{singleEvent.event_name}</h3>
                                        <p>{singleEvent.event_desc}</p>
                                        <Link to={`/events/${singleEvent._id}`}>
                                            <div id='linkTag'>View more <small>&gt;&gt;&gt;</small></div>
                                        </Link>
                                    </div>
                                </div>
                            </Bounce>
                        </div>
                    ))
                }
            </div>
            <div className="left-eventsLines">
                <img src="side-line-1.svg" width="100%" height="100%" />
            </div>
            <div className="right-eventsLines">
                <img src="side-line-1.svg" width="100%" height="100%" />
            </div>
            {/* <div className="events-copyrights">
                <p>© 2021 <label>TIC Club of SASTRA</label></p>
            </div> */}
        </div >
    )
}

export default Events
