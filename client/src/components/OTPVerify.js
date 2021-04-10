import React, { useState } from 'react'
import axios from '../axios';
import { useHistory } from "react-router-dom";

function OTPVerify() {
    const [OTP, setOTP] = useState("")
    const [verify, setverify] = useState(false)
    const history = useHistory();
    const handleOTP = (e) => {
        e.preventDefault();
        // axios.post("/verify", {
        //     otp: $(".otp_input").val(),
        // }).then((res) =>
        //     res.status == 200 ? history.push("/login?password-check") : console.log("")
        // );
        history.push("/login?password-check")
    }
    return (
        <form className="box" onSubmit={handleOTP}>
            <h1>Verification</h1>
            <p className="text-muted"> Please check your email and enter the OTP</p>
            <input required type="text" onChange={(e) => setOTP(e.target.value)} placeholder="Enter OTP" />
            <input type="submit" name="" value="Verify" href="#" onClick={e => handleOTP(e)} />
        </form>
    )
}

export default OTPVerify
