const express = require('express')
const router = express.Router()

const passport = require('passport')
const passport_Linkedin = require('../config/passport')
passport_Linkedin(passport)

router.get('/linkedin/auth', passport.authenticate('linkedin'))
router.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', function(err, user, info) {
    console.log(err)
    console.log(user)
    console.log(info)
  }),
  function(req, res) {
    if (req.user) res.send({ user: req.user, status: 'success' })
    else res.send(err)
  }
)

module.exports = router
