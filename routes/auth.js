const express = require('express')
const router = express.Router()

const passport = require('passport')
const employee_Linkedin = require('../config/employee_passport')
employee_Linkedin(passport)
const HOME = process.env.HOMEPAGE

router.get('/auth/linkedin', passport.authenticate('linkedin'))
router.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    failureRedirect: HOME,
    successRedirect: HOME
  }),
  (error, req, res, next) => {
    res.redirect(HOME)
  }
)

module.exports = router
