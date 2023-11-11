const express = require('express');
require("dotenv").config();
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
// const connection = require("./db")
const cookieParser = require('cookie-parser')
const session = require("express-session")
// const morgan = require('morgan')
const crypto = require("crypto")

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Configure and use Express session
app.use(
  session({
    key: 'user_sid',
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie:{
      expires:60000 
    }
  }));

// Connect to MongoDB

// connection()

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

