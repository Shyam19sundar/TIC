const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");
const express = require('express')
const router = express.Router();

const FinishedEvents = require('../models/finishedEvents')
const RegisterEvents = require('../models/registerEvents')
const FormatCluster = require('../models/formatClusters')
const Admin = require('../models/admin')
const Subscribe = require('../models/subscriber')
const Verify = require('../models/verify')

var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
    tls: {
        ciphers: "SSLv3",
    },
});

router.get("/", (req, res) => {
    try {
        res.send("Got it");
    } catch (e) {
        console.log("Error in /");
    }
});

router.post("/subscribe", (req, res) => {

    try {
        console.log(req.body)
        Subscribe.findOne({ subscribe_email: req.body.subscribe }, (err, foundsubscribe) => {
            if (!err) {
                if (foundsubscribe) {
                    res.status(409).json("Already subscribed")
                }
                else {
                    Subscribe.create({ subscribe_email: req.body.subscribe })
                    res.status(200).json("Subscribed successfully")
                    var mailOptions = {
                        from: process.env.SMTP_USER,
                        to: req.body.subscribe,
                        subject: "Welcome to IOT Club of SASTRA",
                        html:
                            "<div> You are Succesfully Suscribed to SASTRA IOTClub" + "</div>",
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log("Email sent: " + info.response);
                        }
                    });

                }
            }
        });
    } catch (e) {
        console.log("Errror in /subscribe");
    }
});

router.post("/sendmailToSubscribers", (req, res) => {
    try {
        Subscribe.find({}, (err, found) => {
            if (!err && found) {
                const subscribers = found.map(single => single.subscribe_email)
                var mailOptions = {
                    from: process.env.SMTP_USER,
                    to: subscribers,
                    subject: req.body.subject,
                    html:
                        `<div> ${req.body.content} </div>`
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        res.send("Email sent: " + info.response);
                    }
                });
            }
            else {
                res.status(404).json("Message not send")
            }
        })

    } catch (e) {
        console.log("Errror in /sendevent");
    }
})

router.post("/new-event", (req, res) => {
    FinishedEvents.create({
        event_name: req.body.name,
        event_sponsors: req.body.sponsors,
        event_desc: req.body.desc,
        event_date: req.body.date,
        event_winners: req.body.winners,
        no_of_participants: req.body.noofparticipants,
        event_cluster: req.body.cluster,
        event_images: req.body.images
    })
    res.send("Saved")
})

router.get('/cluster-details', (req, res) => {
    FormatCluster.find({}, (err, found) => {
        if (!err && found.length !== 0)
            res.send(found)
        else
            res.status(204).send('No details')
    })
})

router.post("/register-event", (req, res) => {
    RegisterEvents.create({
        event_name: req.body.name,
        event_desc: req.body.desc,
        event_sponsors: req.body.sponsors,
        event_time: req.body.time,
        event_date: req.body.date,
        form: req.body.form,
        poster: req.body.poster,
    })
    res.send("Saved")
})

const firebaseConfig = {
    apiKey: "AIzaSyC9s8jt4EBZHzaSPbHTIAWLo65kqiv5QRU",
    authDomain: "iot-web-app-b9725.firebaseapp.com",
    projectId: "iot-web-app-b9725",
    storageBucket: "iot-web-app-b9725.appspot.com",
    messagingSenderId: "1008140158884",
    appId: "1:1008140158884:web:525ce07f97f671d7a22331"
};

router.get("/getFirebaseInfo", (req, res) => {
    res.json(firebaseConfig)
})

router.post("/new-cluster", (req, res) => {
    Cluster.create({
        cluster_name: req.body.cluster_name
    })
    res.send("Created")
})

router.get("/clusters", (req, res) => {
    const arr = [];
    Cluster.find({}, (err, found) => {
        if (!err && found)
            found.map(cluster => arr.push(cluster.cluster_name))
        res.send(arr)
    });
})

router.get('/noOfSubscribers', (req, res) => {
    Subscribe.find({}, (err, found) => {
        res.send(`No of Subscribers ${found.length}`)
    })
})

router.get('/home-events', (req, res) => {
    var d = new Date()
    d.toLocaleString('en', { timeZone: 'Asia/Kolkata' })
    var arr = []
    var arrFinishedEvents = []
    RegisterEvents.find({}, (err, found) => {
        if (!err && found) {
            if (found.length !== 0) {
                found.map(single => {
                    if (new Date(single.event_date).getTime() > new Date(d).getTime()) {
                        arr.push(single)
                    } else {
                        arrFinishedEvents.push(single)
                    }
                })
                res.send({ arr: arr, arrFinishedEvents: arrFinishedEvents })
            } else {
                res.status(204).send('No Events')
            }
        }
    })
})
router.get('/register-event', (req, res) => {
    RegisterEvents.findOne({ _id: req.query._id }, (err, found) => {
        if (!err) {
            if (found) {
                res.send(found)
            } else {
                res.status(204).send('No Events')
            }
        }
        else {
            res.status(404).send('Something went wrong!')
        }
    })
})
router.delete('/finished-register-events', (req, res) => {
    RegisterEvents.deleteOne({ _id: req.query.id })
        .then(() => res.send("Data Deleted"))
        .catch(err => console.log(err))
})

router.delete('/deleted-finished-events', (req, res) => {
    FinishedEvents.deleteOne({ _id: req.query.id })
        .then(() => res.send("Data Deleted"))
        .catch(err => console.log(err))
})

router.get('/finished-events', (req, res) => {
    FinishedEvents.find({}, (err, found) => {
        if (!err) {
            if (found.length !== 0) {
                res.send(found)
            } else {
                res.status(204).send('No Events')
            }
        }
    })
})
router.get('/single-event', (req, res) => {
    FinishedEvents.findOne({ _id: req.query._id }, (err, found) => {
        if (!err) {
            if (found) {
                res.send(found)
            } else {
                res.status(204).send('No Events')
            }
        }
    })
})

router.get('/current-batch-members', (req, res) => {
    var d = new Date()
    month = d.getMonth()
    year = d.getFullYear()
    FormatCluster.find({}, (err, found) => {
        if (!err) {
            if (found.length !== 0) {
                found.map(singleBatch => {
                    let startingYear = singleBatch.year.substring(0, 4)
                    let endingYear = singleBatch.year.substring(7, 11)
                    if (month > 5) {
                        if (year == startingYear) {
                            res.send(singleBatch)
                        } else {
                            res.status(204).send('No Members in Current Batch')
                        }
                    } else {
                        if (year == endingYear) {
                            res.send(singleBatch)
                        } else {
                            res.status(204).send('No Members in Current Batch')
                        }
                    }
                })
            } else {
                res.status(204).send('No Members')
            }
        }
    })
})

router.post("/new-member", (req, res) => {
    var count = 0;
    var teamExistance = true;
    FormatCluster.find({}, (err, found) => {
        const member = {
            membername: req.body.name,
            photo: req.body.photo,
            linkedIn: req.body.linkedIn,
            github: req.body.github,
            dept: req.body.dept,
            year: req.body.year,
        }
        if (!err) {
            if (found.length === 0) {
                FormatCluster.create({
                    year: `${req.body.startyear} - ${req.body.endyear}`
                }, (err, created) => {
                    const newteam = {
                        name: req.body.cluster,
                        members: member
                    }
                    created.teams.push(newteam)
                    created.save()
                    res.send("Created")
                })
            }
            else {
                found.map(singleyear => {
                    if (singleyear.year == `${req.body.startyear} - ${req.body.endyear}`) {
                        count++
                    }
                })
                if (count === 0) {
                    FormatCluster.create({
                        year: `${req.body.startyear} - ${req.body.endyear}`
                    }, (err, created) => {
                        const newteam = {
                            name: req.body.cluster,
                            members: member
                        }
                        created.teams.push(newteam)
                        created.save()
                        res.send("Created")
                    })
                } else {
                    FormatCluster.findOne({ year: `${req.body.startyear} - ${req.body.endyear}` }, (err, foundYear) => {
                        foundYear.teams.map(singleTeam => {
                            if (singleTeam.name === req.body.cluster) {
                                singleTeam.members.push(member)
                                teamExistance = false;
                                foundYear.save()
                                res.send("Created")
                            }
                        })
                        if (teamExistance) {
                            const newteam = {
                                name: req.body.cluster,
                                members: member
                            }
                            foundYear.teams.push(newteam)
                            foundYear.save()
                            res.send("Created")
                        }
                    })
                }
            }
        }
    })
})

router.post('/refresh', (req, res) => {
    let refresh = req.body.refresh
    jwt.verify(refresh, 'TokenIssued', function (err, decoded) {
        if (!err) {
            const access = jwt.sign(
                { email: 'iotclubsastra@gmail.com' },
                "AccessGiven",
                { expiresIn: "300s" }
            );
            res.status(201).json({
                access: access
            })
        }
        else {
            res.status(401).json({
                message: 'You are not authorized'
            })
        }
    });
})

router.post("/login", (req, res) => {
    Admin.findOne({ email: req.body.email }, (err, found) => {
        if (!err && found) {
            bcrypt.compare(req.body.password, found.password, function (err, result) {
                if (!err && result) {
                    const access = jwt.sign(
                        { email: found.email },
                        "AccessGiven",
                        { expiresIn: "300s" }
                    );
                    const refresh = jwt.sign(
                        { email: found.email },
                        "TokenIssued",
                        { expiresIn: "7d" }
                    );
                    return res.status(201).json({
                        access: access,
                        refresh: refresh,
                    });
                } else {
                    return res.status(401).json({
                        message: "You are unauthorized ",
                    });
                }
            });
        }
        else {
            return res.status(401).json({
                message: "You are unauthorized ",
            });
        }
    })
})

router.post('/change-password', (req, res) => {
    Admin.findOne({ email: 'iotclubsastra@gmail.com' }, (err, found) => {
        if (!err && found) {
            bcrypt.compare(req.body.currentPassword, found.password, (err, result) => {
                console.log(result)
                console.log(req.body.currentPassword)
                if (!err && result) {
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(req.body.newPassword, salt, function (err, hash) {
                            if (!err) {
                                found.password = hash
                                found.save()
                                res.status(200).send("Created")
                            } else res.status(500).send("error in hash gen");
                        });
                    });
                } else res.status(204).send('Wrong Password')
            })
        }
    })
})

function randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i)
        result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

router.get('/forgot-password', (req, res) => {
    Admin.findOne({ email: 'iotclubsastra@gmail.com' }, (err, found) => {
        if (!err && found) {
            var random = randomString(
                6,
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            );
            var mailOptions = {
                from: process.env.SMTP_USER,
                to: "iotclubsastra@gmail.com",
                subject: "Verify your email address",
                text:
                    "To finish setting up your account, we just need to make sure this email address is yours.",
                html:
                    "<div>To verify your email address use this security code: '" +
                    random +
                    "'</div>"
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent: " + info.response);
                    Verify.deleteMany({ email: 'iotclubsastra@gmail.com' }, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("deleted");
                        }
                    });
                    const verify = new Verify({
                        email: req.body.email,
                        otp: random,
                    });
                    verify.save();
                    res.send('OTP Sent')
                }
            });

        }
    })
})

router.post('/verify', (req, res) => {
    Verify.findOne({ email: 'iotclubsastra@gmail.com' }, (err, found) => {
        if (!err) {
            if (found.otp == req.body.otp) {
                res.status(200).send("Correct");
            } else {
                res.status(403).send("OTP incorrect");
            }
        } else {
            res.send("Email not found");
        }
    })
})

router.post('/verify-and-change-password', (req, res) => {
    console.log(req.body.newPassword)
    Admin.findOne({ email: 'iotclubsastra@gmail.com' }, (err, found) => {
        if (!err && found) {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(req.body.newPassword, salt, function (err, hash) {
                    if (!err) {
                        found.password = hash
                        found.save()
                        console.log("pwd changed")
                        res.status(200).send("Created")
                    } else res.status(500).send("error in hash gen");
                });
            })
        }
    })
})

router.post("/signup", (req, res) => {
    // const email = req.body.email;
    // const pass = req.body.password;
    const email = 'iotclubsastra@gmail.com'
    const pass = 'iot@Sastra21'
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(pass, salt, function (err, hash) {
            if (!err) {
                Admin.create({
                    email: email,
                    password: hash
                })
                res.send("Created")
            } else res.send("error in hash gen");
        });
    });
})

// Catch any bad requests
router.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

module.exports = router;