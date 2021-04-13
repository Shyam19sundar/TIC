const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    membername: String,
    photo: String,
    linkedIn: String,
    github: String,
    dept: String,
    year: String,
    batch: String,
    cluster: String
})

const formatClusterSchema = new mongoose.Schema({
    year: String,
    teams: [{
        name: String,
        members: [memberSchema]
    }]
})
const FormatCluster = mongoose.model("FormatCluster", formatClusterSchema)

module.exports = FormatCluster