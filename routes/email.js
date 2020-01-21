const express = require('express')
const router = express.Router()
const { sendEmail } = require('../controller/email')

router.get('/email', sendEmail)

module.exports = router
