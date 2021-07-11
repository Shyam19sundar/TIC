import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from '../axios'
import '../css/Dashboard.css'
import { useHistory, Link } from "react-router-dom";
import DeleteEvents from './DeleteEvents'
import ChangePassword from './ChangePassword'
import Cookies from 'js-cookie';
import { refresh, hasAccess } from './Access.js'

function Dashboard() {
    const [upcomingEvents, setupcomingEvents] = useState()
    const [remainder, setremainder] = useState()
    const [show, setshow] = useState(false)
    const [changePassShow, setchangePassShow] = useState(false)
    const [noOfSubscribers, setnoOfSubscribers] = useState(0)
    const [subject, setsubject] = useState('')
    const [content, setcontent] = useState('')
    const history = useHistory();

    const sendEmail = async (access, refreshToken) => {
        return new Promise((resolve, reject) => {
            axios
                .post(
                    "/sendmailToSubscribers",
                    {
                        subject: subject,
                        content: content
                    },
                    {
                        headers: {
                            authorization: `Bearer ${access}`,
                        },
                    }
                )
                .then(
                    (response) => {
                        resolve(true);
                    },
                    async (error) => {
                        if (error.response.status === 401)
                            console.log("You are not authorized!");
                        else if (error.response.status === 498) {
                            const access = await refresh(refreshToken);
                            return await sendEmail(access, refreshToken);
                        }
                        resolve(false);
                    }
                );
        });
    };

    const hasAccessForSendEmail = async () => {
        let accessToken = Cookies.get("access");
        let refreshToken = Cookies.get("refresh");
        const access = await hasAccess(accessToken, refreshToken);
        if (!access) {
            console.log("You are not authorized");
        } else {
            await sendEmail(access, refreshToken);
        }
    };

    const finishedRegisterEvents = async (access, refreshToken, singleRemainder) => {
        return new Promise((resolve, reject) => {
            axios
                .post(
                    "/finished-register-events",
                    {
                        id: singleRemainder._id
                    },
                    {
                        headers: {
                            authorization: `Bearer ${access}`,
                        },
                    }
                )
                .then(
                    (response) => {
                        history.push("/admin?add-events");
                        resolve(true);
                    },
                    async (error) => {
                        if (error.response.status === 401)
                            console.log("You are not authorized!");
                        else if (error.response.status === 498) {
                            const access = await refresh(refreshToken);
                            return await finishedRegisterEvents(access, refreshToken, singleRemainder);
                        }
                        resolve(false);
                    }
                );
        });
    };

    const hasAccessForFinishedEvents = async (singleRemainder) => {
        let accessToken = Cookies.get("access");
        let refreshToken = Cookies.get("refresh");
        const access = await hasAccess(accessToken, refreshToken);
        if (!access) {
            console.log("You are not authorized");
        } else {
            await finishedRegisterEvents(access, refreshToken, singleRemainder);
        }
    };

    useEffect(() => {
        axios.get('/noOfSubscribers').then(res => setnoOfSubscribers(res.data))
        axios.get('/home-events').then(res => {
            if (res.status == 204) {
                setupcomingEvents(null)
                setremainder(null)
            } else {
                if (res.data.arr.length === 0) {
                    setupcomingEvents(null)
                } else {
                    setupcomingEvents(res.data.arr)
                }
                if (res.data.arrFinishedEvents.length === 0) {
                    setremainder(null)
                } else {
                    setremainder(res.data.arrFinishedEvents.slice(0, 2))
                }
            }
        })
    }, [])

    const handleSendEmail = () => {
        hasAccessForSendEmail()
    }

    const handleClick = (singleRemainder) => {
        hasAccessForFinishedEvents(singleRemainder)
    }

    return (
        <div className="dashboard-full">
            <div className="dashboard-navbar">
                <Link to="/admin">
                    <div>Events</div>
                </Link>
                <Link to={{
                    pathname: "/admin",
                    search: "?members"
                }
                }>
                    <div>Members</div>
                </Link>
                {/* <div className="admin-indicator">Admin Page</div> */}
            </div>
            <div className="dashboard-left">
                <div className="remainders-container">
                    {
                        remainder ? (
                            remainder?.map(singleRemainder => (
                                <div className="dashboard-remainder">
                                    <div className="remainder-left">
                                        <small>Remainder</small>
                                        <br />Details not updated for the event&nbsp;<label>{singleRemainder.event_name}</label>
                                        &nbsp;conducted on&nbsp;
                                        <label>{`${singleRemainder.event_date} at ${singleRemainder.event_time}`}</label>
                                    </div>
                                    <div className="remainder-right">
                                        <div onClick={() => handleClick(singleRemainder)}>Manage</div>
                                    </div>
                                </div>
                            )))
                            : (
                                <h5 className="dashboard-remainder no-rem">No Remainders</h5>
                            )
                    }
                </div>
                <div className="dashboard-leftBottom">
                    <div className="dashboard-newsLetter">
                        <small>NewsLetter</small>
                        <h5>Notify Subscribers</h5>
                        <div className="dash-newsContent">
                            <input className="newsContent-input" type="text" placeholder="Subject" onChange={e => setsubject(e.target.value)} />
                            <textarea className="newsContent-input" rows={4} placeholder="Mail Content" onChange={e => setcontent(e.target.value)} />
                        </div>
                        <div className="news-inputSend" onClick={handleSendEmail}>
                            Send
                        </div>
                    </div>
                    <div className="dashboard-subNumber">
                        <p>{noOfSubscribers}</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-right">
                <div className="dashboard-indicator">
                    <h3>Admin Dashboard</h3>
                    <p>IoT Club of SASTRA</p>
                </div>
                <div className="upcoming-events-list">
                    <small>Upcoming Event</small>
                    <Carousel interval={null}>
                        {
                            upcomingEvents ? (
                                upcomingEvents.map(singleEvent => (
                                    <Carousel.Item>
                                        <h5>{singleEvent.event_name}</h5>
                                        <div className="dashboard-upcomingDetails">
                                            <div>
                                                <p>{singleEvent.event_sponsors}</p>
                                                <p>{singleEvent.event_time}</p>
                                                <p>{singleEvent.event_date}</p>
                                                <a className="dashboard-eventForm" target="_blank" href={singleEvent.form}>Form</a>
                                            </div>
                                            <div>
                                                <img src={singleEvent.poster} />
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))) : (
                                <h2>No Upcoming Events</h2>
                            )
                        }
                    </Carousel>
                    {/* <Carousel interval={null}>
                        {
                            upcomingEvents ? (
                                upcomingEvents.map(singleEvent => (
                                    <Carousel.Item>
                                        <h5>{singleEvent.event_name}</h5>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ flex: '50%' }}>
                                                <p>{singleEvent.event_sponsors}</p>
                                                <p>{singleEvent.event_time}</p>
                                                <p>{singleEvent.event_date}</p>
                                                <a className="dashboard-eventForm" target="_blank" href={singleEvent.form}>Form</a>
                                            </div>
                                            <div style={{ flex: '50%' }}>
                                                <img src={singleEvent.poster} />
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))
                            )
                                :
                                (
                                    <h2>No Upcoming Events</h2>
                                )
                        }
                    </Carousel> */}
                </div>
                <div className="change-deleteHolder">
                    <div className="delete-eventsButton" onClick={() => setshow(true)}>
                        Delete<br /> Finished Events
                    </div>
                    <div className="delete-eventsButton" onClick={() => setchangePassShow(true)}>
                        Change<br /> Password
                    </div>
                </div>
                <div className="hocus-color">
                    <p>Designed and Developed by Hocus Pocus</p>
                </div>
            </div>
            <DeleteEvents show={show} onHide={() => setshow(false)} />
            <ChangePassword show={changePassShow} onHide={() => setchangePassShow(false)} />
        </div >
    )
}

export default Dashboard