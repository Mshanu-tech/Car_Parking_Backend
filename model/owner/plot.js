const mongoose = require('mongoose');

const plotschema = new mongoose.Schema({
  center: {
    type:String
  },
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
    type:String
  },
  plotdetails: {
    type: String,
    // required: true,
  },
  carspot: {
    type: Number
  },
  notWorkingspot:{
    type:String
  },
  images: 
    {
      type: String
    },
});

module.exports = mongoose.model('plot', plotschema);
