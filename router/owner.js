const express = require('express')
const router = express.Router()

const {
    signup,
    login,
    users,
    postplots,
    getplots
} = require('../controller/owner')

router.post('/signup',signup)
router.post('/login',login)
router.get('/users',users)
router.post('/plots',postplots)
router.get('/plots',getplots)

module.exports=router