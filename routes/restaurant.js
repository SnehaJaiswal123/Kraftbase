const express = require('express')
const router = express.Router()
const {updateMenu ,updateStatus,acceptOrder,rejectOrder} = require('../controllers/restaurant')

router.put('/updateMenu',updateMenu)
router.put('/updateStatus',updateStatus)
router.post('/acceptOrder',acceptOrder)
router.post('/rejectOrder',rejectOrder)


module.exports = router