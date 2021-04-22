import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import $ from "jquery";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import ScrollIndicator from "./ScrollIndicator";

function Navbar() {
    const [path, setpath] = useState("");
    useEffect(() => {
        setpath(window.location.hash);
        console.log(path)
        if (path.includes('home')) {
            $(".headerFull").css("borderBottom", "none");
            $(".inside-nav-home").css("borderBottom", "1px solid white");
        } else if (path.includes('events')) {
            $(".headerFull").css("borderBottom", "2px solid white");
            $("inside-nav-event").css("borderBottom", "1px solid white");
        } else if (path.includes('clusters')) {
            $(".headerFull").css("borderBottom", "2px solid white");
            $("inside-nav-cluster").css("borderBottom", "1px solid white");
        } else if (path.includes('resources')) {
            $(".headerFull").css("borderBottom", "2px solid white");
            $("inside-nav-res").css("borderBottom", "1px solid white");
        } else if (path.includes('contact')) {
            $(".headerFull").css("borderBottom", "2px solid white");
            $("inside-nav-contact").css("borderBottom", "1px solid white");
        }
    }, [window.location.hash]);


    const handleMenu = () => {
        $(".menu-items").toggle(".show-menu");
        $("#navbar-burger").hide();
        $("#navbar-cancel").show();
    };
    const handleCancel = () => {
        $(".menu-items").toggle(".show-menu");
        $("#navbar-burger").show();
        $("#navbar-cancel").hide();
    };
    const handleClick = () => {
        if (window.screen.width < 770) {
            $(".menu-items").toggle(".show-menu");
            $("#navbar-burger").show();
            $("#navbar-cancel").hide();
        }
    };
    return (
        <div className="headerFull">
            <MenuIcon id="navbar-burger" onClick={() => handleMenu()} />
            <ClearIcon id="navbar-cancel" onClick={() => handleCancel()} />
            <div className="menu-items">
                <div>
                    <Link to="/" className="inside-nav inside-nav-home" onClick={handleClick}>
                        Home
          </Link>
                </div>
                <div>
                    <Link to="/events" className="inside-nav inside-nav-event" onClick={handleClick}>
                        Events
          </Link>
                </div>
                <div>
                    <Link to="/clusters" className="inside-nav inside-nav-cluster" onClick={handleClick}>
                        Clusters
          </Link>
                </div>
                <div>
                    <Link to="/resources" className="inside-nav inside-nav-res" onClick={handleClick}>
                        Resources
          </Link>
                </div>
                <div>
                    <Link to="/contact" className="inside-nav inside-nav-contact" onClick={handleClick}>
                        Contact
          </Link>
                </div>
            </div>
            {(path.includes("home")) ? <ScrollIndicator /> : ""}
        </div>
    );
}

export default Navbar;