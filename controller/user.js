const plotSchema = require("../model/owner/plot")


module.exports = {
    plots: async (req,res) =>{
        const plots = await plotSchema.find()
        try {
            res.json(plots)
        } catch (error) {
            res.json("fail")
            console.log(error);
        }
    }
} 