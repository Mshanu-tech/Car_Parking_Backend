// app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const ownerRouter = require('./router/owner');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
const dbUrl = "mongodb+srv://new_user:TglSy1HfHYsUMMBO@cluster0.ixsdevh.mongodb.net/Car_Parking?retryWrites=true&w=majority";
const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(dbUrl, connectionParams)
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

// Use the owner router
app.use('/owner', ownerRouter);

const Port = 5000;
app.listen(Port, () => {
  console.log(`Server started on port ${Port}`);
});

