import React, { useEffect, useState } from 'react'
import "../css/Final.css"
import axios from "../axios"
import $ from "jquery"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';

function Final() {
    const [subscribeDetails, setsubscribeDetails] = useState("")
    const handleChange = () => {
        setsubscribeDetails(
            $("#email").val()
        )
    }
    console.log($("#email").val())
    const handleSubmit = () => {
        axios.post('/subscribe', {
            subscribe: subscribeDetails
        }).then(res => console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        $(".headerFull").css("display", "block");
        $(".headerFull").css("position", "fixed");
        $(".headerFull").css("top", "0");
    }, [])

    return (
        <div className="main">
            {/* <Header /> */}
            {/* <div className="contact_navbar">
                navbar
                </div> */}
            <div className="contact_first">
                {/* <img className="dots-forContact" src="contact-dots.svg" width="50px" height="50px" /> */}
                <div className="contact_left">
                    <img className="contact-phone" src="contact-call.png" width="300px" height="300px" />
                    <div className="contact_us">Get in Touch</div>
                    <small className="contact-info">The Tech Innovation Club of SASTRA formerly known as IoT Club of SASTRA, is an
                        intracollegiate club powered by the Technology and Business Incubator of SASTRA University
                        (SASTRA TBI).
                    </small>
                    <div className="contact_email">
                        <EmailIcon className="contact-email" />
                        <small>For any queries mail to</small>
                        <div className="mail-query">
                            <a href="mailto:iotclubsastra@gmail.com">iotclubsastra@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="contact_right">
                    <img src="satellite.png" width="100px" height="100px" className="contact-satellite" />
                    <div id="contact_icon">
                        {/* <span><b>Social</b></span> */}
                        {/* <span className="vr"></span> */}
                        <a href="https://www.instagram.com/techinclub/"><img className="iconimage" src="instagram.png" alt="icon"></img></a>
                        <a href=" https://twitter.com/techinclub"><img className="iconimage" src="contact-twitter.svg" alt="icon"  ></img></a>
                        <a href="https://www.youtube.com/channel/UCaLrLjv2IQxB61csVqsO35w"> <img className="iconimage" src="contact-you.png" alt="icon" ></img></a>
                        <a href="https://www.linkedin.com/in/techinclub"><img className="iconimage" src="contact-in.png" alt="icon" ></img></a>
                    </div>
                    <div className="contact_newsletter">
                        <div className="contact_input">
                            <h4>Subscribe to our newsletter</h4>
                            <input type="Email" id="email" placeholder="Email Address" onChange={handleChange} ></input><br />
                            <button onClick={handleSubmit}>Subscribe</button><br />
                            {/* <p>When you subscribe to the IoT Club NewsLetter you will be notified with occasional emails regarding the events and activities of the Tech Innovation Club.</p> */}
                        </div>
                        {/* </div> */}
                    </div>
                    {/* <div className="contact_svg"> */}
                    {/* <img src="contactus.svg"></img> */}

                    {/* <div className="mail-query">For any queries mail to <a href="mailto:iotclubsastra@gmail.com">iotclubsastra@gmail.com</a>
                    </div> */}

                </div>
            </div>
            {/* <div className="contact_middle">
                <div className="contact_address">
                    <div className="contact_email">
                        <EmailIcon className="contact-email" />
                        <p>iotclubsastra@gmail.com </p>
                    </div>
                    <div className="contact_main">
                        <LocationOnIcon className="contact-location" />
                        <p>Sastra University,
                            Thanjavur-613301.</p>
                    </div>
                </div>

            </div> */}
            {/* <div className="contact_last">
                <div className="contact_details">

                    <div className="details-right">

                    </div>
                </div>
            </div> */}
            {/* <div className="contact_footer">

                <p>© 2021 TIC Club of Sastra</p>
            </div> */}

        </div>


    )
}

export default Final;

