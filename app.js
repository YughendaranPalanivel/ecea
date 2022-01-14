//core modules
const path = require('path');

//other-modules
const express = require('express');
const morgan = require('morgan');
const auth = require('./Routes/auth.js');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'Views'));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(express.static(path.join(__dirname, 'Public')));
app.use(morgan('dev'));

app.use('/auth',auth);

module.exports = app;
