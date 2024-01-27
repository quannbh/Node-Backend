//import express from 'express';
const express = require('express');//common js
const path = require('path');
require('dotenv').config();

const app = express();// app express
const port = process.env.PORT || 8888;// port
const host_name = process.env.HOST_NAME; // host name

//configure template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//configure static files
app.use(express.static(path.join(__dirname, 'public')));

//khai báo routes
app.get('/', (req, res) => {
  res.send('Hello, world! This is website of quannbh and NLPDEV');
});

app.get('/homepage', (req, res) => {
  res.render('sample.ejs');
});

app.listen(port, host_name, () => {
  console.log(`Example app listening on host name ${host_name} and port ${port}`);
});
