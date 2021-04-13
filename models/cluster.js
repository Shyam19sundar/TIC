const mongoose = require('mongoose')

const clusterSchema = new mongoose.Schema({
    cluster_name: String,
});
const Cluster = mongoose.model("Cluster", clusterSchema);

module.exports = Cluster