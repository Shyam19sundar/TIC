const mongoose = require('mongoose')

const verifySchema = new mongoose.Schema({
    email: String,
    otp: String
})
const Verify = mongoose.model("Verify", verifySchema)

module.exports = Verify