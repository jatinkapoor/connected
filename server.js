const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/connectedDB');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false  
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


const routes = require('./routes/index'); 
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});





