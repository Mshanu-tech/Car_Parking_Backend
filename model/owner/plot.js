const mongoose = require('mongoose');

const plotschema = new mongoose.Schema({
  placename: {
    type: String,
    // required: true,
  },
  hour: {
    type: Number,
    // required: true,
  },
  day: {
    type: Number,
    // required: true,
  },
  month: {
    type: Number,
    // required: true,
  },
  location: {
    type: String,
    // required: true,
  },
  plotdetails: {
    type: String,
    // required: true,
  },
  images: 
    {
      type: String, // Assuming you are storing the image file path as a string
    //   required: true,
    },
});

module.exports = mongoose.model('plot', plotschema);
