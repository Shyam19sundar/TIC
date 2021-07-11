import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from '../axios'
import { useHistory } from "react-router-dom";
import $ from "jquery"
import Cookies from 'js-cookie';
import { refresh, hasAccess } from './Access.js'

function ChangePassword(show) {

    const history = useHistory();
    const [currentPassword, setcurrentPassword] = useState()
    const [newPassword, setnewPassword] = useState()
    const [newPasswordAgain, setnewPasswordAgain] = useState()

    const changePassword = async (access, refreshToken) => {
        return new Promise((resolve, reject) => {
            axios
                .post(
                    "/change-password",
                    {
                        currentPassword: currentPassword,
                        newPassword: newPassword
                    },
                    {
                        headers: {
                            authorization: `Bearer ${access}`,
                        },
                    }
                )
                .then(
                    (response) => {
                        // setResponse(response.data);
                        if (response.status === 200) {
                            $('.modal').hide()
                        } else if (response.status === 500) {
                            alert("External Server Error")
                        } else {
                            console.log("err")
                        }
                        resolve(true);
                    },
                    async (error) => {
                        if (error.response.status === 401)
                            console.log("You are not authorized!");
                        else if (error.response.status === 498) {
                            const access = await refresh(refreshToken);
                            return await changePassword(access, refreshToken);
                        }
                        resolve(false);
                    }
                );
        });
    };

    const hasAccessForChangePassword = async () => {
        let accessToken = Cookies.get("access");
        let refreshToken = Cookies.get("refresh");
        const access = await hasAccess(accessToken, refreshToken);
        if (!access) {
            console.log("You are not authorized");
        } else {
            await changePassword(access, refreshToken);
        }
    };

    const checkValidity = () => {
        if (newPassword === newPasswordAgain) {
            console.log("Valid");
            hasAccessForChangePassword()
        } else {
            console.log("Incorrect");
            console.log(newPassword)
            console.log(newPasswordAgain)
        }
    }

    return (
        <div className="change-password">
            {/* {
                console.log(changePassShow)
            } */}
            <Modal
                {...show}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Change Password
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="password-inputsHolder">
                        <input type='password' placeholder="Current Password" onChange={e => setcurrentPassword(e.target.value)} />
                        <input type='password' className="new-password" placeholder="New Password" onChange={e => setnewPassword(e.target.value)} />
                        <input type='password' className="retype-password" placeholder="Retype New Password" onChange={e => setnewPasswordAgain(e.target.value)} />
                        <button onClick={() => checkValidity()}>Change</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ChangePassword