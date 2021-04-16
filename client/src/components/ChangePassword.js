import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from '../axios'
import { useHistory } from "react-router-dom";
import $ from "jquery"

function ChangePassword(show) {

    const history = useHistory();
    const [currentPassword, setcurrentPassword] = useState()
    const [newPassword, setnewPassword] = useState()
    const [newPasswordAgain, setnewPasswordAgain] = useState()

    // const getRoom = async (access, refreshToken) => {
    //     return new Promise((resolve, reject) => {
    //         axios
    //             .post(
    //                 "/roomMessage",
    //                 {
    //                     room: room.roomName,
    //                     message: message,
    //                     name: user?.name
    //                 },
    //                 {
    //                     headers: {
    //                         authorization: `Bearer ${access}`,
    //                     },
    //                 }
    //             )
    //             .then(
    //                 (response) => {
    //                     // setResponse(response.data);
    //                     resolve(true);
    //                 },
    //                 async (error) => {
    //                     if (error.response.status === 401)
    //                         console.log("You are not authorized!");
    //                     else if (error.response.status === 498) {
    //                         const access = await refresh(refreshToken);
    //                         return await getRoom(access, refreshToken);
    //                     }
    //                     resolve(false);
    //                 }
    //             );
    //     });
    // };

    // const accessRoom = async () => {
    //     let accessToken = Cookies.get("access");
    //     let refreshToken = Cookies.get("refresh");
    //     const access = await hasAccess(accessToken, refreshToken);
    //     if (!access) {
    //         console.log("You are not authorized");
    //     } else {
    //         await getRoom(access, refreshToken);
    //     }
    // };

    const checkValidity = () => {
        if (newPassword === newPasswordAgain) {
            console.log("Valid");
            axios.post('/change-password', {
                currentPassword: currentPassword,
                newPassword: newPassword
            }).then(res => {
                if (res.status === 200) {
                    $('.modal').hide()
                } else if (res.status === 500) {
                    alert("External Server Error")
                } else {
                    console.log("err")
                }
            })
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