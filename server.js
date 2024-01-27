//import express from 'express';
const express = require('express');//common js
const app = express();// app express
const port = 8081;// port


//khai báo routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/homepage', (req, res) => {
  res.send('check Homepage');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
