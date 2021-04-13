const mongoose = require('mongoose');

const finishedEventSchema = new mongoose.Schema({
    event_name: String,
    event_sponsors: String,
    event_desc: String,
    event_winners: String,
    event_date: String,
    no_of_participants: String,
    event_cluster: String,
    event_images: []
});
const FinishedEvents = mongoose.model("FinishedEvents", finishedEventSchema);

module.exports = FinishedEvents