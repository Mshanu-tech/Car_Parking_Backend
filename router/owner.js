const express = require('express')
const router = express.Router()

const {
    signup,
    otpverificatons,
    editowner,
    login,
    postplots,
    getplots,
    getplot,
    editPlot,
    deletePlot,
    getUsers
} = require('../controller/owner')

router.post('/signup',signup)
router.post('/otpverificaton',otpverificatons)
router.put('/profile', editowner)
router.post('/login',login)
router.get('/users',getUsers)
router.post('/plots',postplots)
router.get('/plots',getplots)
router.get('/plot/:id', getplot);
router.put('/plot', editPlot);
router.delete('/plot/:id',deletePlot)
// router.get('/users', getUsers)

module.exports=router