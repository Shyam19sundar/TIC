const mongoose = require('mongoose')

const subscribeSchema = new mongoose.Schema({
    subscribe_email: String
})
const Subscribe = new mongoose.model("Subscribe", subscribeSchema)

module.exports = Subscribe