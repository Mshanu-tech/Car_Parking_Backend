const plotSchema = require("../model/owner/plot")
const carDetails = require("../model/user/carDetails")


module.exports = {
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
        const {name, email, phone, carNo, id, uniqueImageName} = req.body
        const carDetail = new carDetails({
            name:name,
            email:email,
            phone:phone,
            car_no:carNo,
            car_photo:uniqueImageName
        })
        await carDetail.save().then(card => {
            console.log(card)
        })
        } catch (error) {
            console.log("error", error);
        }

    }
} 