import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Admin.css"
import AddEvents from './AddEvents'
import AddProjects from './AddProjects'
import Dashboard from './Dashboard'
import RegisterEvents from './RegisterEvents'
import axios from "../axios"
import { slide as Menu } from 'react-burger-menu'
import NewCluster from './NewCluster'
import NewMember from './NewMember'
import AdminMembers from './AdminMembers'

function Admin() {
    useEffect(() => {
        getFirebaseInfo()
        axios.get("/getFirebaseInfo").then(res => {
            if (res.data)
                sessionStorage.setItem("firebaseConfig", JSON.stringify(res.data));
        })

        if (window.location.search)
            setcategory(window.location.search)
        else
            setcategory(null)
    }, [window.location.search])
    const [category, setcategory] = useState(null)

    const getFirebaseInfo = () => {
        let cookie = document.cookie;
        var getCookie = cookie.split(/[=;]+/)
        if (getCookie[1]) {
            if (getCookie[3]) {
                console.log(getCookie[3])
            }
            else
                console.log('no')
        }
        else
            console.log('You are not authorized')

    }


    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }
    return (
        <div className="admin-full">
            <div id="mySidenav" className="sidenav">
                <div className="admin-logo">
                    <img src="adminLogo.png" width="100px" height="75px" />
                </div>
                <div>
                    <Link to='/admin'>
                        Dashboard
                </Link>
                    <Link to={{
                        pathname: "/admin",
                        search: "?add-events"
                    }}>
                        Add Events
                </Link>
                    <Link to={{
                        pathname: "/admin",
                        search: "?register-events"
                    }}>
                        Register Events
                </Link>
                    <Link to={{
                        pathname: "/admin",
                        search: "?add-cluster"
                    }}>
                        Add Cluster
                </Link>
                    <Link to={{
                        pathname: "/admin",
                        search: "?add-member"
                    }}>
                        Add Member
                </Link>
                </div>
            </div>
            <Menu className="phone__sidenav" styles={styles}>
                <div className="admin-logo">
                    <img src="adminLogo.png" width="100px" height="75px" />
                </div>
                <Link to='/admin'>
                    Dashboard
                </Link>
                <Link to={{
                    pathname: "/admin",
                    search: "?add-events"
                }}>
                    Add Events
                </Link>
                <Link to={{
                    pathname: "/admin",
                    search: "?register-events"
                }}>
                    Register Events
                </Link>
                <Link to={{
                    pathname: "/admin",
                    search: "?add-cluster"
                }}>
                    Add Cluster
                </Link>
                <Link to={{
                    pathname: "/admin",
                    search: "?add-member"
                }}>
                    Add Member
                </Link>
            </Menu>
            <div className="content">
                {category ? "" : <Dashboard />}
                {category === "?add-events" ? <AddEvents /> : ""}
                {category === "?register-events" ? <RegisterEvents /> : ""}
                {category === "?add-projects" ? <AddProjects /> : ""}
                {category === "?add-cluster" ? <NewCluster /> : ""}
                {category === "?add-member" ? <NewMember /> : ""}
                {category === "?members" ? <AdminMembers /> : ""}
            </div>
        </div>
    )
}

export default Admin
