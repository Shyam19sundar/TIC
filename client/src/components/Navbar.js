import React, { useState, useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import $ from 'jquery'
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import ScrollIndicator from './ScrollIndicator';

function Navbar() {

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
        $('.menu-items').toggle('.show-menu')
        $('#navbar-burger').hide()
        $('#navbar-cancel').show()
    }
    const handleCancel = () => {
        $('.menu-items').toggle('.show-menu')
        $('#navbar-burger').show()
        $('#navbar-cancel').hide()
    }
    const handleClick = () => {
        if (window.screen.width < 770) {
            $('.menu-items').toggle('.show-menu')
            $('#navbar-burger').show()
            $('#navbar-cancel').hide()
        }

    }
    return (
        <div className='headerFull'>
            <MenuIcon id='navbar-burger' onClick={() => handleMenu()} />
            <ClearIcon id='navbar-cancel' onClick={() => handleCancel()} />
            <div className='menu-items'>
                <Link to='/' className="inside-nav" onClick={handleClick}>Home</Link>
                <Link to='/events' className="inside-nav" onClick={handleClick}>Events</Link>
                <Link to='/clusters' className="inside-nav" onClick={handleClick}>Clusters</Link>
                <Link to='/resources' className="inside-nav" onClick={handleClick}>Resources</Link>
                <Link to='/contact' className="inside-nav" onClick={handleClick}>Contact</Link>
            </div>
            {path == "/home" ? <ScrollIndicator /> : ""}
        </div>
    )
}

export default Navbar