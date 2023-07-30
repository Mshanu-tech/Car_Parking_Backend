const express = require('express')
const router = express.Router()

const {
    signup,
    login,
    users,
    plots
} = require('../controller/owner')

router.post('/signup',signup)
router.post('/login',login)
router.get('/users',users)
router.post('/plots',plots)

module.exports=router