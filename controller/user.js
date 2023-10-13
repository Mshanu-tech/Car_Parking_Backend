const plotSchema = require("../model/owner/plot")
const carDetails = require("../model/user/carDetails")
const userschema = require("../model/user/user")

module.exports = {

    getuser: async (req,res) => {
        try {
            const { name, email, phone, password } = req.body
            const user = new userschema({
                name:name,
                email:email,
                phone:phone,
                password:password
            })
            await user.save().then( e =>{
                console.log(e);
            })  
        } catch (error) {
            console.log("Error",error);
        }
        
    },

    plots: async (req,res) =>{
        const plots = await plotSchema.find()
        try {
            res.json(plots)
        } catch (error) {
            res.json("fail")
            console.log(error);
        }
    },
    carDetails: async (req, res) =>{
        try {
        // console.log(req.body);
        const {name, email, phone, carNo, id, startingTime, uniqueImageName, startingDate, endingTime, endingDate, Time, Payment} = req.body
        const carDetail = new carDetails({
            name:name,
            email:email,
            phone:phone,
            car_no:carNo,
            car_photo:uniqueImageName,
            startingDate:startingDate,
            startingTime:startingTime,
            endingDate:endingDate,
            endingTime:endingTime,
            price:Payment,
            time:Time
        })
        await carDetail.save().then(card => {
            console.log(card)
        })
        } catch (error) {
            console.log("error", error);
        }

    }
} 