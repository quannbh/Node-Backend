//import express from 'express';
require('dotenv').config();
const express = require('express');//common js
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();// app express
const port = process.env.PORT || 8888;// port
const host_name = process.env.HOST_NAME; // host name

//configure template engine
configViewEngine(app);

//Khai báo routes
app.use('/', webRoutes);

//Kiểm tra server chạy
app.listen(port, host_name, () => {
  console.log(`Example app listening on host name ${host_name} and port http://localhost:${port}`);
});
