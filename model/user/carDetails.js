const mongoose = require('mongoose')

const carschema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    car_no: {
        type: String
    },
    car_photo: {
        type: String
    },
    startingTime: {
        type: String
    },
    startingDate: {
        type: String
    },    
    endingTime: {
        type: String
    },   
    endingDate: {
        type: String
    },
    time: {
        type:Object
    },
    price: {
        type:String
    }
});

module.exports = mongoose.model("carDetails", carschema);