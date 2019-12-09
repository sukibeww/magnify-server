var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
const User = require('../models/User')

const passport_Linkedin = async passport => {
  passport.use(
    new LinkedInStrategy(
      {
        clientID: '81jde443a46v56', //to move to .env
        clientSecret: 'y9JPimZcX6UlXJKw',
        callbackURL: 'http://127.0.0.1:3000/auth/linkedin/callback',
        scope: ['r_emailaddress', 'r_liteprofile']
      },
      function(accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function() {
          // To keep the example simple, the user's LinkedIn profile is returned to
          // represent the logged-in user. In a typical application, you would want
          // to associate the LinkedIn account with a user record in your database,
          // and return that user instead.
          return done(null, profile)
        })
      }
    )
  )
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}

module.exports = passport_Linkedin
