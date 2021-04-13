const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');
const morgan = require('morgan')

const routes = require('./routes/routes')

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://admin-SastraIOT:iot&&tbi@cluster0.ce0t2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/public/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(process.env.PORT || 3001, console.log(`Server Started`));
