const express = require('express')
const router = express.Router()

const {
    plots,
    carDetails,
    postuser
} = require('../controller/user')

router.post('/',postuser)
router.get('/place',plots)
router.post('/carDetails',carDetails)

module.exports = router