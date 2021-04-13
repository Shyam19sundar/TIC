const mongoose = require('mongoose');

const registerEvents = new mongoose.Schema({
    event_name: String,
    event_sponsors: String,
    event_desc: String,
    event_date: String,
    event_time: String,
    form: String,
    poster: String
});
const RegisterEvents = mongoose.model("RegisterEvents", registerEvents);

module.exports = RegisterEvents