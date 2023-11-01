const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const ownerschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    },
    image:{
        type:String
    }
});

ownerschema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(this.password, salt)
        this.password = hashedpassword
        next()
    } catch (error) {
        next(error)
    }
})

module.exports = mongoose.model("owner",ownerschema);