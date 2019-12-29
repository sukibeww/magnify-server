const express = require('express')
const router = express.Router()
const passport = require('passport')
const passport_Linkedin = require('../config/passport')
passport_Linkedin(passport)
const { updateEmployee } = require('../controller/employee')
const { ensureAuthenticated } = require('../helper/auth')

router.put('/employee/update', ensureAuthenticated, updateEmployee)

module.exports = router
