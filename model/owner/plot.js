const mongoose = require('mongoose')
const plotschema = new mongoose.Schema({
    placename:{
        type:String
    },
    hour:{
        type:Number
    },
    day:{
        type:Number
    },
    month:{
        type:Number
    },
    location:{
        type:String
    },
    plotdetails:{
        type:String
    }
})

module.exports = mongoose.model("plot",plotschema)