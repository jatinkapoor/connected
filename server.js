const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const homeRoute = require('./routes/home'); 
const userRoute = require('./routes/user');

const PORT = process.env.PORT || 3000;
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/connectedDB');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use('/', homeRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});





