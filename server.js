const express = require('express');
require("dotenv").config();
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./db")
const path = require('path')
const jwt = require('jsonwebtoken')
const session = require("express-session")


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(session({
  secret: process.env.session_secret,
  saveUninitialized:true,
  cookie: { maxAge: 60000 },
  resave: false 
}));
// console.log(process.env.session_secret);

// Connect to MongoDB
connection()

// Use the owner router

const ownerRouter = require('./router/owner');
const userRouter = require('./router/user');
const adminRouter = require('./router/admin')

app.use('/', userRouter)
app.use('/owner', ownerRouter);
app.use('/admin', adminRouter)

const Port = 5500;
app.listen(Port, () => {
  console.log(`Server started on port ${Port}`);
})

