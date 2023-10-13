const express = require('express')
const router = express.Router()

const {
    plots,
    carDetails,
    getuser
} = require('../controller/user')

router.post('/',getuser)
router.get('/place',plots)
router.post('/carDetails',carDetails)

module.exports = router