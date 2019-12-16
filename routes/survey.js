const express = require('express')
const router = express.Router()
const passport = require('passport')
const passport_Linkedin = require('../config/passport')
passport_Linkedin(passport)
const { saveSurvey } = require('../controller/survey')
const { ensureAuthenticated } = require('../helper/auth')

router.post('/employee/survey', ensureAuthenticated, saveSurvey)

module.exports = router
