const express = require('express');
require("dotenv").config();
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./db")
const path = require('path')
const jwt = require('jsonwebtoken')


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
connection()

// Use the owner router

const ownerRouter = require('./router/owner');
const userRouter = require('./router/user')

app.use('/', userRouter)
app.use('/owner', ownerRouter);

const Port = 5500;
app.listen(Port, () => {
  console.log(`Server started on port ${Port}`);
})

