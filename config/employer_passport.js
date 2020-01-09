const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
const User = require('../model/Employer')

const SERVER = process.env.SERVER

const employer_Linkedin = async passport => {
  passport.use(
    new LinkedInStrategy(
      {
        clientID: process.env.clientID, //to move to .env
        clientSecret: process.env.clientSecret,
        callbackURL: SERVER + '/auth/linkedin/callback',
        scope: ['r_emailaddress', 'r_liteprofile']
      },
      function(accessToken, refreshToken, profile, done) {
        process.nextTick(function() {
          const searchQuery = {
            email: profile.emails[0].value
          }
          const updates = {
            displayName: profile.displayName,
            email: profile.emails[0].value,
            linkedin_id: profile.id,
            photos: profile.photos[3].value
          }
          const option = {
            new: true,
            upsert: true
          }
          User.findOneAndUpdate(searchQuery, updates, option, function(
            err,
            user
          ) {
            if (err) {
              return done(err)
            } else {
              return done(null, user)
            }
          })
        })
      }
    )
  )
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}

module.exports = employer_Linkedin
