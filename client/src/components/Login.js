import axios from '../axios'
import React, { useState, useEffect } from 'react'
import { refresh } from './Access'
import "../css/Login.css"
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom'
import OTPVerify from "./OTPVerify.js"
import PasswordCheck from "./PasswordCheck.js"
function Login() {


    const history = useHistory();
    const [categoryLogin, setcategoryLogin] = useState(null)
    const [email, setemail] = useState("")
    const [OTP, setOTP] = useState("")
    const [password, setpassword] = useState("")
    const ForgotPassword = (e) => {
        axios.get("/forgot-password").then((res) => {
            console.log(res.data)
        })
    }
    useEffect(() => {
        if (window.location.hash)
            setcategoryLogin(window.location.hash.slice(window.location.hash.lastIndexOf('?') + 1))
        else
            setcategoryLogin(null)
    }, [window.location.search])
    const handleOTP = (e) => {
        console.log(OTP)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email && password !== '')
            axios.post("/login", {
                email: email,
                password: password
            }).then(res => {
                var d = new Date();
                d.setTime(d.getTime() + (5 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = `access=${res.data.access}; expires=${expires}; SameSite=Strict`;
                d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = `refresh=${res.data.refresh}; expires=${expires}; SameSite=Strict`;
                history.push("/admin")
            })
                .catch(err => console.log(err.message))
    }
    // const signUp = () => {
    //     axios.post('/signup')
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    // }

    // const OTPVerify = () => {
    //     return (
    //         <form className="box" onSubmit={handleOTP}>
    //             <h1>Verification</h1>
    //             <p className="text-muted"> Please check your email and enter the OTP</p>
    //             <input required type="email" onChange={(e) => { console.log(e.target.value); setOTP(e.target.value); }} placeholder="Enter OTP" />
    //             <input type="submit" name="" value="Verify" href="#" onClick={e => handleOTP(e)} />
    //         </form>
    //     );
    // }

    // const PasswordCheck = () => {
    //     return (
    //         <div>Password</div>
    //     );
    // }


    return (
        <div className="login__body">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {categoryLogin === "otp-verify" ? <OTPVerify /> : categoryLogin === "password-check" ? <PasswordCheck /> :
                            <form className="box" onSubmit={handleSubmit}>
                                <h1>Login</h1>
                                <p className="text-muted"> Please enter your login and password!</p>
                                <input required type="email" onChange={(e) => setemail(e.target.value)} placeholder="Email" />
                                <input required type="password" onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                                <Link to={{
                                    pathname: "/login",
                                    search: "?otp-verify"
                                }}>
                                    <p className="forgot text-muted" href="#" onClick={(e) => ForgotPassword(e)}>Forgot password?</p>
                                </Link>
                                <input type="submit" name="" value="Login" href="#" onClick={e => handleSubmit(e)} />
                            </form>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
