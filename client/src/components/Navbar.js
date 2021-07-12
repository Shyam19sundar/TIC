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
    }, [])



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
        setpath(window.location.hash)
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
                    <Link to="/" className={path.includes("home") ? `inside-nav inside-nav-home active` : `inside-nav inside-nav-home passive`} onClick={() => handleClick()}>
                        Home
                    </Link>
                </div>
                <div>
                    <Link to="/events" className={path.includes("events") ? `inside-nav inside-nav-event active` : `inside-nav inside-nav-event passive`} onClick={() => handleClick()}>
                        Events
                    </Link>
                </div>
                <div>
                    <Link to="/clusters" className={path.includes("clusters") ? `inside-nav inside-nav-cluster active` : `inside-nav inside-nav-clusters passive`} onClick={() => handleClick()}>
                        Clusters
                    </Link>
                </div>
                <div>
                    <Link to="/resources" className={path.includes("resources") ? `inside-nav inside-nav-res active` : `inside-nav inside-nav-res passive`} onClick={() => handleClick()}>
                        Resources
                    </Link>
                </div>
                <div>
                    <Link to="/contact" className={path.includes("contact") ? `inside-nav inside-nav-contact active` : `inside-nav inside-nav-contact passive`} onClick={() => handleClick()}>
                        Contact
                    </Link>
                </div>
            </div>
            {/* {(path.includes("home")) ? <ScrollIndicator /> : ""} */}
        </div>
    );
}

export default Navbar;