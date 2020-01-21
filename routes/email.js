const express = require('express')
const router = express.Router()
const { sendEmail } = require('../controller/email')
const { ensureAuthenticated } = require('../helper/auth')

router.post('/email', ensureAuthenticated, sendEmail)

module.exports = router
