const express = require('express')
const router = express.Router()
const HOME = process.env.HOMEPAGE

const passport = require('passport')
const employee_Linkedin = require('../config/employee_passport')
employee_Linkedin(passport)

const { login, logout } = require('../controller/auth')

router.get('/auth/linkedin/login/:type', function(req, res, next) {
  passport.authenticate('linkedin', { state: req.params.type })(req, res, next)
})
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

router.get('/login', login)
router.get('/logout', logout)

module.exports = router
