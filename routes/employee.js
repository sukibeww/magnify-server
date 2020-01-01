const express = require('express')
const router = express.Router()
const passport = require('passport')
const passport_Linkedin = require('../config/employee_passport')
const { login, logout, updateEmployee, saveSurvey } = require('../controller/employee')
const { ensureAuthenticated } = require('../helper/auth')
const employee_Linkedin = require('../config/employee_passport')
const HOME = process.env.HOMEPAGE
employee_Linkedin(passport)

router.get('/employee/login', login)
router.get('/employee/logout', logout)
router.put('/employee/update', ensureAuthenticated, updateEmployee)
router.post('/employee/survey', ensureAuthenticated, saveSurvey)
router.get('/employee/auth/linkedin', passport.authenticate('linkedin'))
router.get(
  '/employee/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    failureRedirect: HOME,
    successRedirect: HOME
  }),
  (error, req, res, next) => {
    res.redirect(HOME)
  }
)

module.exports = router
