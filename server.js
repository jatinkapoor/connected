const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const homeRoute = require('./routes/home'); 
const userRoute = require('./routes/user');
const messageRoute = require('./routes/message');
const groupRoute = require('./routes/group');
const postsRoute = require('./routes/posts');

const PORT = process.env.PORT || 3001;
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/connectedDB');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.resolve(__dirname, './client/build/')));

app.use('/', homeRoute);
app.use('/user', userRoute);
app.use('/message', messageRoute);
app.use('/group', groupRoute);
app.use('/posts', postsRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});



