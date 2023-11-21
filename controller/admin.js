const adminschema = require("../model/admin/admin")
const userschema = require("../model/user/user")
const plotschema = require("../model/owner/plot")
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
            const plot = await plotschema.find()
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
    }
}