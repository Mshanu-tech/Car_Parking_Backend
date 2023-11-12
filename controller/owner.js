const ownerschema = require("../model/owner/owner")
const plotSchema = require("../model/owner/plot")
const nodemailer = require("nodemailer")
const session = require("express-session")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const maxAge = 3 * 24 * 60 * 60;

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})
// const createToken = (id: string) => {
//     try {
//         return jwt.sign({ id }, secret_key, {
//             expiresIn: maxAge
//         });
//     } catch (error) {
//         console.error("Error while creating the JWT token:", error);
//         throw error; // Re-throw the error to handle it in the calling function
//     }
// };

module.exports = {

    signup: async (req, res) => {
        const { email, name, number, password, Image } = req.body;
        if (!name || !email || !password || !number) {
            // return res.json('Please fill in all the required fields.');
        }
    
        try {
            // const ownerExist = await ownerschema.findOne({ email: email });
            // if (ownerExist) {
            //     return res.json('Email already exists.');
            // } else {
            //     var val = Math.floor(1000 + Math.random() * 9000);
            //     mailTransporter.sendMail({
            //         to: email,
            //         from: process.env.EMAIL,
            //         subject: 'Signup Verification',
            //         html: `<h4>This your token for OTP Verification</h4>:<h2>${val}</h2>`
            //     });
            // }
            
            req.session.user = req.body
            //   console.log(req.session.user,val);
            
            req.body.token = val
            req.session.signup = req.body


            res.json("otpverificaton");
        } catch (error) {
            res.json("fail");
            console.log("Error in signup:", error);
        }
    },
    

                // console.log(req.body);
            // const owner = new ownerschema({
            //     name: name,
            //     email: email,
            //     phone: number,
            //     password: password,
            //     image:Image
            // })
            // await owner.save().then(owner => {
            //     res.json("success")
            //     console.log(owner);
            // })

    otpverificatons: async (req, res) => {
        try {
            const { digit1, digit2, digit3, digit4 } = req.body
            console.log(req.body);
            const otp = digit1 + digit2 + digit3 + digit4
            const { token} = req.session.signup;
            // console.log();
            // if (token == otp) {
                // const user = new ownerschema({ name, email, password, number })
                // console.log(user);
                // await user.save().then((doc) => {
                //     res.render('user/payments', {
                //         user_id: user.id,
                //         username: user.name,
                //         phone: user.number
                    // });
                // })
            // } else {
                // res.redirect('/otpverification')
                // console.log('invalid otp');
            // }
        } catch (error) {
            console.log(error);
            // res.redirect('/error')
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
                    const id = data.id
                    console.log(id);
                    // const token = jwt.sign({id}, "jwtSecret",{
                    //     expiresIn:300
                    // })
                    console.log("login success");
                    res.json(owner)
                } else {
                    res.json("password wrong")
                    console.log("password wrong");
                }
            } else {
                res.json("email not get")
                console.log("email not get");
            }
        } catch (error) {
            res.json("fail")
            console.log(error);
        }
    },
    editowner: async (req,res) => {
        const {name,email,phone,image,_id} = req.body
        console.log(name,email,phone,image,_id);
        try {
            ownerschema.findByIdAndUpdate(_id,{
                name:name,
                email:email,
                phone:phone,
                image:image
            }).then((owner) => {
                console.log("edit owner",owner)
            })
        } catch (error) {
            console.log(error);
        }
    },
    users: async (req, res) => {
        const owner = await ownerschema.find()
        console.log(owner);
    },
    postplots: async (req, res) => {
        const { center, placename, hour, day, month, notworking, location, selectedFeatures, carspot, Image, plotdetails } = req.body
        console.log(plotdetails, Image)
        try {
            const plot = new plotSchema({
                center: center,
                placename: placename,
                hour: hour,
                day: day,
                images: Image,
                month: month,
                location: location,
                carspot:carspot,
                notWorkingspot:notworking,
                plotdetails: plotdetails,
                features:selectedFeatures
            })
            await plot.save().then((form) => {
                console.log(form);
            })
        } catch (error) {
            console.log(error);
        }
    },
    getplots: async (req, res) => {
        try {
            const plots = await plotSchema.find()
            res.json({ status: "success", message: "success fully fetched", data: { plots } })
        } catch (error) {
            res.json("fail")
            console.log(error);
        }
        // .json({status:"succes",message"",data:plots})
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
