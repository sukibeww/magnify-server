const express = require('express')
const router = express.Router()

const passport = require('passport')
const passport_Linkedin = require('../config/passport')
passport_Linkedin(passport)
const { login, logout } = require('../controller/auth')
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

router.get('/login', login)
router.get('/logout', logout)

module.exports = router
