const express = require('express');
const app = express()
// var  testAPIRouter = require('./testApi')
var cors = require("cors")
const mongoose = require('mongoose')
const connectDB = require('./connectDB') 
var bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
// require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(express.json())
app.use(fileUpload());


connectDB();
const formRouter = require('./Routes/formDb');
app.use('/Addform', formRouter);


const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`Server started on port ${port}`));





