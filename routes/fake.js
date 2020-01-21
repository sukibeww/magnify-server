const express = require('express')
const router = express.Router()
const { fake } = require('../controller/faker')

router.get('/fake', fake)

module.exports = router
