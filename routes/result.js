const express = require('express')
const router = express.Router()
const passport = require('passport')
const passport_Linkedin = require('../config/passport')
passport_Linkedin(passport)
const { createResult, findResult } = require('../controller/result')
const { ensureAuthenticated } = require('../helper/auth')

router.get('/employee/result', ensureAuthenticated, findResult)
router.post('/employee/result', ensureAuthenticated, createResult)

module.exports = router
