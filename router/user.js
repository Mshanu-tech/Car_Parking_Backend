const express = require('express')
const router = express.Router()

const {
    plots,
    carDetails,
} = require('../controller/user')

router.get('/place',plots)
router.post('/carDetails',carDetails)

module.exports = router