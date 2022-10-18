require('dotenv').config();
const express = require('express');
const app = express();
let port = process.env.PORT;
let connection = require('./config/connection');
let router = require('./routes/route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(port, () =>{
    console.log('Server started at 3000');
    connection();
})