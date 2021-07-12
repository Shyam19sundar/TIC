import React, { useEffect, useState, useRef } from 'react'
import "../css/Home.css"
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
import WarningIcon from '@material-ui/icons/Warning';
import { useWindowScroll } from 'react-use'
import Header from './Header';
import $ from "jquery";
import Tooltip from '@material-ui/core/Tooltip';
import { Typography } from '@material-ui/core';
import Particles from "react-particles-js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import axios from "../axios";
import InfoIcon from '@material-ui/icons/Info';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Home() {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    let sections = gsap.utils.toArray(".panel");

    const { x, y } = useWindowScroll();
    const [scrolled, setscrolled] = useState(0);

    const [subscribeDetails, setsubscribeDetails] = useState('')
    const [yes, setyes] = useState(false);
    const [no, setno] = useState(false);

    const [nextHolder, setnextHolder] = useState();
    const [finished, setfinished] = useState()

    const addSubscriber = () => {
        axios.post('/subscribe', {
            subscribe: subscribeDetails
        }).then(res => console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setscrolled((y / height) * 100)

        if (scrolled > 20) {
            $(".headerFull").css("display", "block");
            $(".headerFull").css("position", "fixed");
            $(".headerFull").css("top", "0");
        } else {
            $(".headerFull").css("display", "none")
        }
    }, [y])

    // console.log(scrolled)

    // useEffect(() => {
    //     axios.post("/signup")
    //         .then(res => console.log("Data"))
    // }, [])

    //For GSAAAAPPP
    useEffect(() => {
        axios.get('/home-events').then(res => {
            if (res.status == 204) {
                setnextHolder(null)
            } else {
                if (res.data.arr.length !== 0) {
                    if (res.data.arr.length === 1) {
                        setnextHolder(res.data.arr)
                    } else {
                        setnextHolder(res.data.arr.reverse().slice(0, 2))
                    }
                } else {
                    setnextHolder(null)
                }
            }
        })

        axios.get("/finished-events").then(res => {
            if (res.status == 204) {
                setfinished(null)
            } else {
                if (res.data.length !== 0) {
                    if (res.data.length === 1) {
                        setfinished(res.data)
                    } else {
                        // setfinished(res.data.slice(0, 2))
                        let next = [...res.data].reverse()
                        setfinished(next.slice(0, 2))
                    }
                } else {
                    setfinished(null)
                }
            }
        })

        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".second-who"),
            {
                opacity: 0,
                // y: -20,
            },
            {
                opacity: 1,
                // y: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".second-who"),
                    start: "top bottom",
                    end: "bottom center",
                    scrub: true,
                }
            }
        )
    }, [])

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".second-whoContent"),
            {
                opacity: 0,
                // y: -20,
            },
            {
                opacity: 1,
                // y: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".second-whoContent"),
                    start: "top 60%",
                    end: "bottom center",
                    scrub: 0.3,
                }
            }
        )
    }, [])

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".placeholder-forImage"),
            {
                opacity: 0,
                // y: -20,
            },
            {
                opacity: 1,
                // y: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".earth-svg"),
                    start: "bottom 10%",
                    end: "top top",
                    scrub: 0.3,
                    // duration: 10,
                }
            }
        )

        gsap.fromTo(
            element.querySelector(".banner-1"),
            {
                opacity: 0,
                x: -150,
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".earth-svg"),
                    start: "bottom 20%",
                    // end: "top 20%",
                    scrub: true,
                    // duration: 10,
                }
            }
        )

        gsap.fromTo(
            element.querySelector(".banner-2"),
            {
                opacity: 0,
                x: 150,
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".earth-svg"),
                    start: "bottom 20%",
                    // end: "top top",
                    scrub: true,
                    // duration: 10,
                }
            }
        )
    }, [])

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".card-container"),
            {
                opacity: 0,
                // y: -20,
            },
            {
                opacity: 1,
                // y: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".placeholder-forImage"),
                    start: "bottom center",
                    scrub: true,
                    // duration: 10,
                }
            }
        )
    }, [])

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".home-landing"),
            {
                opacity: 1,
                // y: -20,
            },
            {
                opacity: 0,
                // y: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".second-landing"),
                    start: "top bottom",
                    scrub: true,
                    // duration: 10,
                }
            }
        )
    }, [])

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".nearly-slideshow"),
            {
                opacity: 0,
                // y: -20,
            },
            {
                opacity: 1,
                // y: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".marquee-scroll"),
                    start: "top 10%",
                    scrub: true,
                    // duration: 10,
                }
            }
        )
    }, [])

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".contact-modal"),
            {
                opacity: 0,
                y: -100,
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".nearly-slideshow"),
                    start: "bottom 125%",
                    scrub: true,
                    // duration: 10,
                }
            }
        )
    }, [])

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".watch-iot"),
            {
                x: -300,
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".home-footer"),
                    end: "top top",
                    scrub: true,
                    delay: 10,
                }
            }
        )
    }, [])

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".right-footer"),
            {
                opacity: 0
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: element.querySelector(".home-footer"),
                    end: "top top",
                    scrub: false,
                }
            }
        )
    }, [])

    //Horizontal Scroll
    // useEffect(() => {
    //     gsap.to(sections, {
    //         xPercent: -100 * (sections.length - 1),
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".container",
    //             pin: true,
    //             scrub: 1,
    //             snap: 1 / (sections.length - 1),
    //             // base vertical scrolling on how wide the container is so it feels more natural.
    //             end: () => "+=" + document.querySelector(".container").offsetWidth
    //         }
    //     });
    // }, [])

    // const handleYes = () => {
    //     $(".contact-modal").html("Good then,")
    // }

    return (
        <div className="fullHome" ref={ref}>
            {/* <Header /> */}
            <div className="home-landing">
                <div className="landing-left">
                    <div className="contact-badge">
                        <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/techinclub/'>
                            <img src="instagram.svg" width="25px" height="30px" />
                        </a>
                        <p>----</p>
                        <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/techinclub'>
                            <img src="twitter.svg" width="25px" height="30px" />
                        </a>
                        <p>----</p>
                        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/techinclub'>
                            <img src="linkedin.svg" width="25px" height="30px" />
                        </a>

                        {/* <label>Instagram</label> */}
                        {/* <label>Twitter</label> */}
                        {/* <label>Twitter</label> */}
                    </div>
                    {/* <div className="landing-nextEvent">
                        {
                            nextHolder ? (
                                <div>
                                    <p>Next Event: <label>{nextHolder[0].event_name}</label></p>
                                    <InfoIcon className="landing-info" />
                                </div>
                            ) : ""
                        }
                    </div> */}
                    <div className="particle-back">
                        {/* <Particles
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 50,
                                        "density": {
                                            "enable": false,
                                            "value_area": 800
                                        }
                                    },
                                    "line_linked": {
                                        "enable": true
                                    },
                                    "move": {
                                        "speed": 1,
                                        "out_mode": "out"
                                    },
                                    "color": {
                                        "value": "#000"
                                    },

                                },
                                interactivity: {
                                    events: {
                                        onHover: {
                                            enable: true,
                                            mode: "repulse"
                                        }
                                    }
                                },
                                "retina_detect": false
                            }} /> */}
                    </div>
                    <div className="title-andContent">
                        <p className="iot-title"><label>Tech</label> Innovation&nbsp;Club</p>
                        <p className="iot-desc">“Everything that can be automated will be automated."</p>
                    </div>
                    <div className="navbar-icons">
                        <Link to='/clusters'>
                            <PeopleIcon className="navbar-group" />
                        </Link>
                        <Link to='/home'>
                            <HomeIcon className="navbar-home" />
                        </Link>
                        <Link to='/events'>
                            <EventIcon className="navbar-group" />
                        </Link>
                    </div>
                    {/* <div className="hover-indicator">
                        <div>
                            <img src="arrow_12.svg" width="300px" height="250px" />
                        </div>
                        <div>
                            <img src="arrow_12.svg" width="300px" height="250px" />
                        </div>
                    </div> */}
                    <div className="scroll-indicator">
                        <img src="image.png" width="75px" height="75px" className="scrolldown-indicator" />
                    </div>
                    <img src="circle-1.svg" width="100%" height="75%" className="earth-svg" />
                    <img src="circle-3.svg" width="100%" height="20%" className="ic-svg" />
                </div>
            </div>
            <div className="home-nextLanding" >
                <div className="second-landing">
                    <div className="second-startingContent">
                        <p className="second-who">Who&nbsp;we&nbsp;are???</p>
                        <p className="second-whoContent">Tech Innovation club(TIC), is a privileged club of SASTRA TBI, managed by students and coordinate the concerned faculty, helps in the development of student growth to enable them to generate new ideas and become more innovative by leveraging the latest technology.</p>
                    </div>
                    <div className="banner">
                        <div className="banner-1">
                            <p>25+ <br /> Workshops</p>
                            <p>5+ <br /> Hackathon</p>
                        </div>
                        <div className="placeholder-forImage">
                            <img src="lines4.jpg" width="50%" height="100%" />
                            <div className="press-buttonOutline">
                                {/* <div className="press-button"> */}
                                <WarningIcon />
                                {/* </div> */}
                            </div>

                        </div>
                        <div className="banner-2">
                            <p>40+ <br /> Startups</p>
                            <p>15+ <br /> Webinars</p>
                        </div>
                    </div>
                    {/* <div className="press-buttonOutline">
                        <div class="button">
                            <WarningIcon />
                        </div>
                    </div> */}
                </div>
                <div className="third-landing">
                    <div className="card-container">
                        <div className="home-card">
                            {
                                finished ? (
                                    <div>
                                        <div className="card-topFlex">
                                            <div>
                                                <h6 className="card-title">Past Event</h6>
                                                <h3>{finished[0].event_name}</h3>
                                            </div>
                                            <div className="card-arrow">
                                                <Link to={`/events/${finished[0]._id}`} ><ArrowForwardIcon /></Link>
                                            </div>
                                        </div>
                                        {/* <div>
                                            <p>{finished[0].event_desc}</p>
                                        </div> */}
                                        <div className="card-flex">
                                            <div className="card-singleContent">
                                                <small>Date:</small>
                                                <p>{finished[0].event_date}</p>
                                                {/* <small>Dates:</small>
                                                <p>{finished[0].event_date}</p> */}
                                                <small>Organized By:</small>
                                                <p>{finished[0].event_cluster}</p>
                                                {/* <p>{finished[0].form}</p> */}
                                                <div className="card-detailsRegister">
                                                    <Link to={`/events/${finished[0]._id}`}>More Details</Link>
                                                    {/* <label>More Details --&gt;</label> */}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex-image">
                                                    <img src={finished[0].event_images[0]} alt="Poster" width="100%" height="100%" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : console.log("p")
                            }
                        </div>
                        <div className="home-card">
                            {
                                nextHolder ? (
                                    <div>
                                        <h6 className="card-title">Next Event</h6>
                                        <h3>{nextHolder[0].event_name}</h3>
                                        <div className="card-desc">
                                            <p>{nextHolder[0].event_desc.substr(0, 150)}... <Link to={`/register/${nextHolder[0]._id}`}>READ&nbsp;MORE</Link></p>
                                        </div>
                                        <div className="card-flex">
                                            <div>
                                                {/* <div className="card-singleContent">
                                                    <small>Sponsors:</small>
                                                    <p>{nextHolder[0].event_sponsors}</p>
                                                </div> */}
                                                <div className="card-singleContent">
                                                    <small>Dates:</small>
                                                    <p>{nextHolder[0].event_date}</p>
                                                </div>
                                                <div className="card-singleContent">
                                                    <small>Timings:</small>
                                                    <p>{nextHolder[0].event_time}</p>
                                                </div>
                                                <a href={nextHolder[0].form} target="_blank" rel="noopener noreferrer">Register</a>
                                            </div>
                                            <div>
                                                <div className="flex-image">
                                                    <img src={nextHolder[0].poster} alt="Poster" width="100%" height="100%" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                    :
                                    (
                                        <h3>No Upcoming Events</h3>
                                    )
                            }
                        </div>
                        <div className="home-card">
                            {
                                nextHolder?.length === 2 ? (
                                    <div>
                                        <div className="card-topFlex">
                                            <div>
                                                <h6 className="card-title">Upcoming Event</h6>
                                                <h3>{nextHolder[1].event_name}</h3>
                                            </div>
                                            <div className="card-arrow">
                                                <Link to={`/events/${nextHolder[1]._id}`}>
                                                    <ArrowForwardIcon />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* <div>
                                            <p>{nextHolder[1].event_desc}</p>
                                        </div> */}
                                        <div className="card-flex">
                                            <div className="card-singleContent">
                                                <small>Date:</small>
                                                <p>{nextHolder[1].event_date}</p>
                                                <small>Timings:</small>
                                                <p>{nextHolder[1].event_time}</p>
                                                {/* <small>Timings:</small>
                                                <p>{nextHolder[1].event_time}</p> */}
                                                {/* <p>{nextHolder[1].form}</p> */}
                                                <div className="card-detailsRegister">
                                                    <a href={nextHolder[1].form} target="_blank" rel="noopener noreferrer">Register</a>
                                                    {/* <label>More Details --&gt;</label> */}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex-image">
                                                    <img src={nextHolder[1].poster} alt="Poster" width="100%" height="100%" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    finished ? (
                                        <div>
                                            <div className="card-topFlex">
                                                <div>
                                                    <h6 className="card-title">Past Event</h6>
                                                    <h3>{finished[1]?.event_name}</h3>
                                                </div>
                                                <div className="card-arrow">
                                                    <Link to={`/events/${finished[1]._id}`}><ArrowForwardIcon /></Link>
                                                </div>
                                            </div>

                                            {/* <div>
                                                <p>{finished[1].event_desc}</p>
                                            </div> */}
                                            <div className="card-flex">
                                                <div className="card-singleContent">
                                                    <small>Date:</small>
                                                    <p>{finished[1].event_date}</p>
                                                    {/* <small>Dates:</small>
                                                <p>{finished[0].event_date}</p> */}
                                                    <small>Organized By:</small>
                                                    <p>{finished[1].event_cluster}</p>
                                                    {/* <p>{finished[0].form}</p> */}
                                                    <div className="card-detailsRegister">
                                                        <Link to={`/events/${finished[1]._id}`}>More Details</Link>
                                                        {/* <label>More Details --&gt;</label> */}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex-image">
                                                        <img src={finished[1].event_images[0]} alt="Poster" width="100%" height="100%" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                        : ""
                                )
                            }
                        </div>
                    </div>
                    <div className="marquee-scroll">
                        <div className="marquee-place">
                            <div className="marquee-100">
                                <div className="marquee-mela">
                                    <div className="trivia-relative">
                                        <Tooltip title="Arduino" aria-label="arduino">
                                            <Typography>
                                                <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                                <img className="marquee-icons" src="arduino-icon.svg" width="150px" height="75px" />
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                    <div className="trivia-relative">
                                        <Tooltip title="Raspberry Pi" aria-label="raspberry-pi">
                                            <Typography>
                                                <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                                <img className="marquee-icons" src="raspberrypi-icon.svg" width="150px" height="75px" />
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                    <div className="trivia-relative">
                                        <Tooltip title="NodeMCU" aria-label="nodemcu">
                                            <Typography>
                                                <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                                <img className="marquee-icons" src="nodemcu.png" width="75px" height="75px" />
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="marquee-keela">
                                    <div className="trivia-relative">
                                        <Tooltip title="Libelium" aria-label="arduino">
                                            <Typography>
                                                <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                                <img className="marquee-icons" src="libelium.png" width="100px" height="75px" />
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                    <div className="trivia-relative">
                                        <Tooltip title="Technido" aria-label="technido">
                                            <Typography>
                                                <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                                <img className="marquee-icons" src="technido.png" width="100px" height="75px" />
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                    <div className="trivia-relative">
                                        <Tooltip title="Intel Edison" aria-label="intel">
                                            <Typography>
                                                <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                                <img className="marquee-icons" src="intel-icon.svg" width="100px" height="75px" />
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            <div className="marquee-200">
                                <div className="marquee-mela">
                                    <div className="trivia-relative">
                                        <Tooltip title="Eigen Technologies" aria-label="eigen">
                                            <Typography>
                                                <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                                <img className="marquee-icons" src="eigen.png" width="75px" height="75px" />
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                    <div className="trivia-relative">
                                        <Tooltip title="DJI Mavic 3" aria-label="mavic">
                                            <Typography>
                                                <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                                <img className="marquee-icons" src="mavic.png" width="120px" height="75px" />
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                    <div className="trivia-relative">
                                        <Tooltip title="SASTRA TBI" aria-label="tbi">
                                            <Typography>
                                                <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                                <img className="marquee-icons" src="tbi.png" width="120px" height="50px" />
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="marquee-keela">
                                    <div className="trivia-relative">
                                        <Tooltip title="DJI Phantom Pro" aria-label="phantom">
                                            <Typography>
                                                <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                                <img className="marquee-icons" src="dji.png" width="75px" height="75px" />
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                    <div className="trivia-relative">
                                        <Tooltip title="ExpressIf" aria-label="esp32">
                                            <Typography>
                                                <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                                <img className="marquee-icons" src="express.png" width="100px" height="60px" />
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                    <div className="trivia-relative">
                                        {/* <img className="trivia-back" src="trivia-circle.svg" width="200px" height="200px" />
                                        <p>Arduino Nano</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <img src="trivia-circle.svg" width="300px" height="300px" /> */}
                    </div>
                </div>
                <div className="nearly-slideshow">
                    <div className="left-lines">
                        <img src="side-line-1.svg" width="100%" height="100%" />
                    </div>
                    <div className="right-lines">
                        <img src="side-line-1.svg" width="100%" height="100%" />
                    </div>
                    {/* <div className="vertical-rectangle">
                        <img src="placeholder-circle.svg" width="15%" height="15%" />
                        <img src="placeholder-circle.svg" width="25%" height="15%" />
                        <img src="placeholder-circle.svg" width="25%" height="15%" />
                    </div> */}
                    {/* <img src="rectangle-1.svg" width="200px" height="50px" className="hori-rectangle" /> */}
                    <div className="what-weDo">
                        <h1>What&nbsp;We&nbsp;DO???</h1>
                        <p>The objective of this club serves as a place of community for students to motivate the young Entrepreneurs. This club is intended to Skill Development, Student Innovation, Startup support, MVP and Product Building, and conduct training programs by faculty and core teams of Tech Innovation club. Through the club, where the students to learn more about the Internet of Things, Artificial Intelligence, App development, Robotics and more.</p>
                    </div>
                    <div className="gallery">
                        <img className="gallery-image image-1" src="iot-1.jpg" width="100%" height="100%" />
                        <img className="gallery-image image-2" src="iot-2.jpg" width="100%" height="100%" />
                        <img className="gallery-image image-3" src="iot-3.png" width="100%" height="100%" />
                    </div>
                </div>
                <div className="contact-modal">
                    <div className="contact-question">
                        Does IoT interest you ???
                    </div>
                    <hr />
                    {
                        (yes == false && no == false) ? (
                            <div className="contact-buttons">
                                <div onClick={() => {
                                    setyes(true)
                                }}>Yes</div>
                                <div onClick={() => {
                                    setno(true)
                                }}>No</div>
                            </div>
                        ) : (
                            yes == true && no == false ? (
                                <div className="contact-answer">
                                    Good then, &nbsp;
                                    <Link to="/contact">
                                        Contact Us
                                    </Link>
                                    &nbsp;  in case you'd like to join the club
                                </div>
                            ) : (
                                <div className="contact-answer">
                                    Ooohhh...Well we think that our &nbsp;
                                    <Link to="/resources">
                                        Resources Section
                                    </Link>
                                    &nbsp; may help you
                                    elevate your interests...
                                </div>
                            )
                        )
                    }
                </div>
                <div className="home-footer">
                    <div className="left-footer">
                        {/* <img src="sun.svg" width="100px" height="100px" /> */}
                        {/* <p>Interested in IoT??.. then Contact Us...</p> */}
                        <img className="watch-iot" src="Iot-watch.png" width="80%" height="85%" />
                    </div>
                    <div className="right-footer">
                        <p>Get in Touch</p>
                        <div className="footer-signup">
                            {/* <p>Signup to our NewsLetter</p> */}
                            <input type="text" placeholder="Signup to our NewsLetter" onChange={e => setsubscribeDetails(e.target.value)} />
                            <button onClick={addSubscriber}>Subscribe</button>
                        </div>
                        <div className="footer-icons">
                            <p>Social</p>
                            <label>---------------------</label>
                            <div>
                                <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/techinclub/'>Insta</a>
                                <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/techinclub'>Twitter</a>
                                <a target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/channel/UCaLrLjv2IQxB61csVqsO35w'>YouTube</a>
                                <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/techinclub'>LinkedIn</a>
                            </div>
                            {/* <img src="instagram.svg" width="50px" height="50px" /> */}
                            {/* <img src="twitter.svg" width="50px" height="50px" /> */}
                            {/* <img src="facebook.svg" width="50px" height="50px" /> */}
                        </div>
                        {/* <div className="footer-icons2">
                            <p>Address</p>
                            <div>SASTRA University,<br />Thanjavur</div>
                        </div> */}
                        <div className="design-develop">
                            <p>Designed and Developed by <label>Hocus Pocus</label></p>
                        </div>
                        <div className="copyrights">
                            <p>© 2021 <label>TIC Club of SASTRA</label></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home