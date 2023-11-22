const express = require('express')
const router = express.Router()

const {
    signup,
    users,
    getuser,
    plots,
    owners,
    getowner,
    getplot,
    editPlot,
    deletePlot,
} = require("../controller/admin")

router.post('/signup', signup)
router.get('/users', users)
router.get('/user', getuser)
router.get('/plots', plots)
router.get('/owners', owners)
router.get('/owner/:id', getowner)
router.get('/plot/:id', getplot);
router.put('/plot', editPlot);
router.delete('/plot/:id',deletePlot)
module.exports=router