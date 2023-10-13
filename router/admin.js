const express = require('express')
const router = express.Router()

const {
    signup,
    users,
    plots,
    owners
} = require("../controller/admin")

router.post('/signup', signup)
router.get('/user', users)
router.get('/plot', plots)
router.get('/owner', owners)
module.exports=router