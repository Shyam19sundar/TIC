import React, { useEffect, useState } from 'react'
import Team from './Team'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import '../css/Clusters.css'
import $ from 'jquery'
import axios from "../axios"
import Header from './Header';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';



function Clusters() {

    const [batches, setbatches] = useState(null)

    useEffect(() => {
        axios.get("/cluster-details")
            .then(res => {
                if (res.status === 200) {
                    setbatches(res.data.reverse())
                }
            })
        $(".headerFull").css("display", "block");
        $(".headerFull").css("position", "fixed");
        $(".headerFull").css("top", "0");
    }, [])

    const [indexSelected, setIndexSelected] = useState(0)

    useEffect(() => {
        if (indexSelected === 0) {
            $('#next-icon').css({ opacity: 0.5 })
        }
        else
            $('#next-icon').css({ opacity: 1 })
        if (indexSelected === batches?.length - 1) {
            $('#before-icon').css({ opacity: 0.5 })
        }
        else
            $('#before-icon').css({ opacity: 1 })
    }, [indexSelected])

    const Next = () => {
        if (indexSelected !== 0)
            setIndexSelected(indexSelected - 1)
    }

    const Previous = () => {
        if (indexSelected !== batches.length - 1)
            setIndexSelected(indexSelected + 1)
    }
    return (
        <div className="clusters-full">
            {/* <Header /> */}
            <div className="clusters-content">
                <div className="clusters-contentTop">
                    <h1>Our Team</h1>
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
                    <div className="cluster-domains">
                        <div><p>Web Development</p></div>
                        <div><p>App Development</p></div>
                        <div><p>Internet of Things</p></div>
                        <div><p>Robotics</p></div>
                        <div><p>Machine Learning</p></div>
                    </div>
                    {/* <img src="cluster.png" width="50%" height="90%" /> */}
                    {
                        batches ? (
                            <div className='clusters-time'>
                                <NavigateBeforeIcon id='before-icon' onClick={() => Previous()} />
                                <span>{batches[indexSelected]?.year}</span>
                                <NavigateNextIcon id='next-icon' onClick={() => Next()} />
                            </div>
                        ) : (
                            <div className="no-clusters">
                                <p>No data Available</p>
                            </div>
                        )
                    }
                </div>
                <div className="cluster-leftLines">
                    <img src="side-line-1.svg" width="100%" height="100%" />
                </div>
                <div className="cluster-rightLines">
                    <img src="side-line-1.svg" width="100%" height="100%" />
                </div>

                <div className="clusters-batches">
                    {batches?.map((batch, index) =>
                        <div>
                            {indexSelected === index ?
                                <div>
                                    {/* <span>{batch.year}</span> */}
                                    {batch?.teams.map(team =>
                                        <Team name={team.name} members={team.members} />
                                        // console.log(team)

                                    )}
                                </div>
                                : null}
                        </div>
                    )}
                </div>
                {/* <div className="copyrights">
                    <p>© 2021 <label>TIC Club of SASTRA</label></p>
                </div> */}
            </div>
        </div>
    )
}

export default Clusters
