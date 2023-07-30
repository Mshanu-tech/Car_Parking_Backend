const ownerschema = require("../model/owner/owner")
const plotform = require("../model/owner/plot")
const bcrypt = require('bcrypt')

module.exports = {

    signup: async (req, res) => {
        try {
            const { email, name, phone, password } = req.body;
            const owner = new ownerschema({
                name: name,
                email: email,
                phone: phone,
                password: password
            })
            await owner.save().then(owner => {
                console.log(owner);
            })
        } catch (error) {
            console.log("error", error);
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const owner = await ownerschema.findOne({ email: email })
            if (owner) {
                console.log(owner.password, password);
                const data = await bcrypt.compare(password, owner.password)

                if (data) {
                    console.log("login success");
                } else {
                    console.log("password wrong");
                }
            } else {
                console.log("email not get");
            }
        } catch (error) {
            console.log(error);
        }
    },
    users: async (req, res) => {
        const owner = await ownerschema.find()
        console.log(owner);
    },
    plots: async(req,res)=>{
        const {placename, hour, day, month, location, plotdetails}=req.body
        try {
            const plot = new plotform({
                placename:placename,
                hour:hour,
                day:day,
                month:month,
                location:location,
                plotdetails:plotdetails
            })
          await plot.save().then((form)=>{
            console.log(form);
          })
        } catch (error) {
            console.log(error);
        }
    }
}