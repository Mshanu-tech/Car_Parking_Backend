const express = require('express')
const router = express.Router()

const {
    signup,
    editowner,
    login,
    users,
    postplots,
    getplots,
    getplot,
    editPlot,
    deletePlot
} = require('../controller/owner')

router.post('/signup',signup)
router.put('/profile', editowner)
router.post('/login',login)
router.get('/users',users)
router.post('/plots',postplots)
router.get('/plots',getplots)
router.get('/plot/:id', getplot);
router.put('/plot', editPlot);
router.delete('/plot/:id',deletePlot)

module.exports=router