const express = require('express')
const router = express.Router()
const {retrieveRestaurant,orderPlace,rating,addRestaurant,createUser} = require('../controllers/user')

router.get('/retrieveRestaurant',retrieveRestaurant)
router.post('/placeOrder',orderPlace)
router.post('/rating',rating)
router.post('/addRestaurant',addRestaurant)
router.post('/createUser',createUser)

module.exports = router