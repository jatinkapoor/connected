const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// this is to present static assets 
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// leverage routes 
app.use(routes);

// connection to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/connected");

// this starts the API server
app.listen(PORT, function() {
    console.log(`Your API server is now running on PORT ${PORT}!`)
});