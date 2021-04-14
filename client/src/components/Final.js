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
            <div className="contact_us">Contact Us</div>
            <img className="dots-forContact" src="contact-dots.svg" width="50px" height="50px" />
            <div className="contact_first">
                <div className="contact_right">
                    <div id="contact_icon">
                        {/* <span><b>Social</b></span> */}
                        {/* <span className="vr"></span> */}
                        <a href="https://www.instagram.com/techinclub/"><img className="iconimage" src="contact-insta.png" alt="icon"></img></a>
                        <a href=" https://twitter.com/techinclub"><img className="iconimage" src="contact-twitter.svg" alt="icon"  ></img></a>
                        <a href="https://www.youtube.com/channel/UCaLrLjv2IQxB61csVqsO35w"> <img className="iconimage" src="contact-you.png" alt="icon" ></img></a>
                        <a href="https://www.linkedin.com/in/techinclub"><img className="iconimage" src="contact-in.png" alt="icon" ></img></a>
                    </div>
                    <div className="contact_svg">
                        <img src="contactus.svg"></img>
                    </div>
                </div>
                <div className="contact_left">

                    <div className="contact_newsletter">
                        <div className="contact_input">
                            <h3 >Getting in touch is easy</h3>
                            <input type="Email" id="email" placeholder="Sign Up to our NewsLetter" onChange={handleChange} ></input><br />
                            <button onClick={handleSubmit}>Subscribe</button><br />
                            <p>When you subscribe to the IoT Club NewsLetter you will be notified with occasional emails regarding the events and activities of the Tech Innovation Club.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_middle">
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

            </div>
            <div className="contact_last">
                <div className="contact_details">
                    <div className="details-left">
                        <div className="contact_profile1">
                            <img src="staff1.jpeg" alt="Avatar" width="150px" height="150px" />
                            <div>R.Anantharaman</div>
                            <p>CEO | TBI</p>
                            <div className="icon">
                                <a href="https://www.linkedin.com/in/r-anantharaman-7b827130"><LinkedInIcon style={{ color: "white" }} /></a>
                                <a href="https://www.twitter.com/anantha02814741 "> <TwitterIcon style={{ color: "white" }} /></a>
                            </div>
                        </div>
                        <div className="contact_profile2">
                            <img src="staff2.jpeg" alt="Avatar" width="150px" height="150px" />
                            <div>K.Fathima</div>
                            <p>Technical Assistant-TBI</p>
                            <div className="icon">
                                <a href="https://www.linkedin.com/in/fathimabasha"><LinkedInIcon style={{ color: "white" }} /></a>
                                <a href="https://www.twitter.com/fathikamal27"> <TwitterIcon style={{ color: "white" }} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="details-right">

                    </div>
                </div>
            </div>
            <div className="contact_footer">

                <p>© 2021 TIC Club of Sastra</p>
            </div>

        </div>


    )
}

export default Final;

