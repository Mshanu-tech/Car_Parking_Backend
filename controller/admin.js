const adminschema = require("../model/admin/admin")
const userschema = require("../model/user/user")
const plotSchema = require("../model/owner/plot")
const ownershema = require("../model/owner/owner")

module.exports = {

    signup: async (req,res) => {
        try {
            const { name, email, phone, password } = req.body
            const admin = new adminschema({
                name:name,
                email:email,
                phone:phone,
                password:password
            })
            await admin.save().then( e =>{
                console.log(e);
            })  
        } catch (error) {
            console.log("Error", error);
        }
    },
    users: async (req,res) => {
        try {
            const user = await userschema.find()
            res.json({ status: "success", message: "success fully fetched", data: { user } })
            // console.log(user);
        } catch (error) {
            res.json("fail")
            console.log("Error", error);
        }
    },
    plots: async (req,res) =>{
        try {
            const plot = await plotSchema.find()
            res.json({ status: "success", message: "success fully fetched", data: { plot } })
            // console.log(plot);
        } catch (error) {
            res.json("fail")
            console.log("Error", error);
        }
    },
    owners: async (req,res) =>{
        try {
            const owner = await ownershema.find()
            res.json({ status: "success", message: "success fully fetched", data: { owner } })
        } catch (error) {
            res.json("fail")
            console.log("Error", error);
        }
    },
    getowner:async (req,res) => {
        const {id} =req.params
        console.log(id);
        try {
            const owner = await ownershema.findById(id)
            res.json(owner)
        } catch (error) {
            res.json("not get owner")
        }
    },
    getplot: async (req, res) => {
        const { id } = req.params
        // console.log(id);
        try {
            const plot = await plotSchema.findById(id);
            res.json(plot)
        } catch (error) {
            res.json("fail")
            console.log(error);
        }
    },
    getuser: async (req, res) => {
        const { id } = req.params
        // console.log(id);
        try {
            const user = await userschema.findById(id);
            res.json(user)
        } catch (error) {
            res.json("fail")
            console.log(error);
        }
    },
    editPlot: (req, res) => {
        const { _id, center, placename, hour, day, month, location, images, notworking, carspot, plotdetails, } = req.body
        console.log(_id, center, placename, hour, day, month, location, images, plotdetails);
        try {
            plotSchema.findByIdAndUpdate(_id, {
                center: center,
                placename: placename,
                hour: hour,
                day: day,
                month: month,
                location: location,
                carspot:carspot,
                plotdetails: plotdetails,
                images: images,
                notWorkingspot:notworking
            }).then((plot) => {
                console.log(plot);
            })

        } catch (error) {
            console.log(error);
        }
    },
    deletePlot: async (req, res) => {
        const { id } = req.params
        console.log(id);
        
        try {
            await plotSchema.deleteOne({ _id: id })
                .then(() => {
                    console.log("deleted");
                })
            res.json("deleted")
        } catch (error) {
            console.log(error);
        }

    }
}