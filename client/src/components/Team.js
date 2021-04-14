import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../css/Team.css'
import Carousel from 'react-elastic-carousel'
import Item from "./Item";

function Team({ name, members }) {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 6 },
        { width: 1750, itemsToShow: 6 },
    ]

    return (
        <div className="full-teams">
            <h3>{name}</h3>
            <div className="team-members">
                <Carousel breakPoints={breakPoints}>
                    {members.map((member, index) => (
                        <Item>
                            <div className="single-memberFull">
                                <img src={member.photo} alt='Member' height="100px" width="100px" />
                                <p>{member.membername}</p>
                                <div>
                                    <div>
                                        <span>{member.year}</span>
                                        <br />
                                        <span>{member.dept}</span>
                                    </div>
                                    <div className="cluster-icons">
                                        <a target='_blank' href={member.linkedIn} rel="noopener noreferrer">
                                            <LinkedInIcon style={{ color: '#0072b1' }} />
                                        </a>
                                        <a target='_blank' href={member.github} rel="noopener noreferrer">
                                            <GitHubIcon style={{ color: '#3a243b ' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Item>

                    ))}
                </Carousel>

            </div>
        </div>
    )
}

export default Team