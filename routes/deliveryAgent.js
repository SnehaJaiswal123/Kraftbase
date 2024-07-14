const express = require('express')
const router = express.Router()
const status = require('../controllers/deliveryAgent')

router.post('/status',status)

module.exports = router