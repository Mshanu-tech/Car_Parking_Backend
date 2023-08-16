const express = require('express')
const router = express.Router()

const {
    plots
} = require('../controller/user')

router.get('/place',plots)

module.exports = router