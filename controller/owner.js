const ownerschema = require("../model/owner/owner")
const plotSchema = require("../model/owner/plot")
const bcrypt = require('bcrypt')

module.exports = {

    signup: async (req, res) => {
        try {
            console.log("asdaygsdagsdi",req);
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
                    res.json(owner)
                } else {
                    console.log("password wrong");
                }
            } else {
                console.log("email not get");
            }
        } catch (error) {
            res.json("fail")
            console.log(error);
        }
    },
    users: async (req, res) => {
        const owner = await ownerschema.find()
        console.log(owner);
    },
    postplots: async(req,res)=>{
        const {placename, hour, day, month, location, plotdetails}=req.body
        // console.log("none",placename, hour, day, month, location, plotdetails)
        try {
            const plot = new plotSchema({
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
    },
    getplots: async(req,res)=>{
        try {
            const plots = await plotSchema.find()
            res.json({status:"success",message:"success fully fetched",data:{plots}})
        } catch (error) {
            res.json("fail")
            console.log(error);
        }
// .json({status:"succes",message"",data:plots})
    }
}