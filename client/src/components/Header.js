import React, { useState, useEffect } from 'react'
import "../css/Header.css"
import { Navbar, Nav, Button } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import ScrollIndicator from './ScrollIndicator';
import $ from "jquery"
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

function Header() {
    const [path, setpath] = useState("");
    useEffect(() => {
        setpath(window.location.pathname)

        if (path != "/home") {
            $(".headerFull").css("borderBottom", "2px solid white")
        }
        else {
            $(".headerFull").css("borderBottom", "none")
        }
    }, [window.location.pathname])

    const handleMenu = () => {
        console.log("Opened");
        $('.navbar-collapse').toggle('.show-menu')
        $('#navbar-burger').hide()
        $('#navbar-cancel').show()
    }
    const handleCancel = () => {
        console.log("Cancel");
        $('.navbar-collapse').toggle('.show-menu')
        $('#navbar-burger').show()
        $('#navbar-cancel').hide()
    }
    const handleClick = () => {
        if (window.screen.width < 770) {
            $('.navbar-collapse').toggle('.show-menu')
            $('#navbar-burger').show()
            $('#navbar-cancel').hide()
        }
    }

    return (
        <div className="headerFull">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');
            </style>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
            </style>
            <MenuIcon id='navbar-burger' onClick={() => handleMenu()} />
            <ClearIcon id='navbar-cancel' onClick={() => handleCancel()} />
            <Navbar collapseOnSelect expand="lg" >
                {/* <Navbar.Toggle className="navbar-toggler-css" aria-controls="responsive-navbar-nav" /> */}
                {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                <Nav className="mr-auto">
                    <Nav.Link className="other-headerLink" onClick={handleClick}>
                        <NavLink to="/home" className="inside-nav" activeStyle={{
                            // backgroundColor: "gray",
                            // color: "black",
                            // padding: "5px 10px 5px 10px",
                            // borderRadius: "5px",
                            // fontSize: "large"
                            borderBottom: "2px solid white"
                        }}>
                            Home
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link className="other-headerLink" onClick={handleClick}>
                        <NavLink to="/events" className="inside-nav" activeStyle={{
                            // backgroundColor: "gray",
                            // color: "black",
                            // padding: "5px 10px 5px 10px",
                            // borderRadius: "5px",
                            // fontSize: "large"
                            borderBottom: "2px solid white"
                        }}>
                            Events
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link className="other-headerLink" onClick={handleClick}>
                        <NavLink to="/clusters" className="inside-nav" activeStyle={{
                            // backgroundColor: "gray",
                            // color: "black",
                            // padding: "5px 10px 5px 10px",
                            // borderRadius: "5px",
                            // fontSize: "large"
                            borderBottom: "2px solid white"
                        }}>
                            Clusters
                        </NavLink> </Nav.Link>
                    <Nav.Link className="other-headerLink" onClick={handleClick}>
                        <NavLink to="/resources" className="inside-nav" activeStyle={{
                            // backgroundColor: "gray",
                            // color: "black",
                            // padding: "5px 10px 5px 10px",
                            // borderRadius: "5px",
                            // fontSize: "large"
                            borderBottom: "2px solid white"
                        }}>
                            Resources
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link className="other-headerLink" onClick={handleClick}>
                        <NavLink to="/contact" className="inside-nav" activeStyle={{
                            // backgroundColor: "gray",
                            // color: "black",
                            // padding: "5px 10px 5px 10px",
                            // borderRadius: "5px",
                            // fontSize: "large"
                            borderBottom: "2px solid white"
                        }}>
                            Contact
                        </NavLink>
                    </Nav.Link>
                </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
            {path == "/home" ? <ScrollIndicator /> : ""}
        </div>
    )
}

export default Header
