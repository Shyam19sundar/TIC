import React, { useState } from 'react'
import axios from '../axios';
import { useHistory } from "react-router-dom";

function PasswordCheck() {
    const [Newpassword, setNewpassword] = useState("");
    const [NewpasswordAgain, setNewpasswordAgain] = useState("");
    const history = useHistory();
    const handleNewPassword = (e) => {
        e.preventDefault()
        if (Newpassword == NewpasswordAgain) {
            axios.post("/verify-and-change-password", {
                newPassword: Newpassword
            })
                .then((res) => history.push("/login"))
        }
        else {
            alert("Password Doesn't Match")
        }
    }
    return (
        <form className="box" onSubmit={handleNewPassword}>
            <h1>New Password</h1>
            <p className="text-muted"> Please enter your new password!</p>
            <input required type="password" onChange={(e) => setNewpassword(e.target.value)} placeholder="Enter Password" />
            <input required type="password" onChange={(e) => setNewpasswordAgain(e.target.value)} placeholder="Retype Password" />

            {/* <Link to={{
                pathname: "/login",
                search: "?otp-verify"
            }}>
                <p className="forgot text-muted" href="#" onClick={(e) => ForgotPassword(e)}>Forgot password?</p>
            </Link> */}
            <input type="submit" name="" value="Login" href="#" onClick={e => handleNewPassword(e)} />
        </form>
    )
}

export default PasswordCheck
