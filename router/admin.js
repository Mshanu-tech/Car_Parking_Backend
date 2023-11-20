const express = require('express')
const router = express.Router()

const {
    signup,
    users,
    plots,
    owners,
    getowner
} = require("../controller/admin")

router.post('/signup', signup)
router.get('/users', users)
router.get('/plots', plots)
router.get('/owners', owners)
router.get('/owner/:id', getowner)
module.exports=router