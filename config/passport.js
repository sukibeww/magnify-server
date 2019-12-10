const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
const User = require('../model/User')

const passport_Linkedin = async passport => {
  passport.use(
    new LinkedInStrategy(
      {
        clientID: process.env.clientID, //to move to .env
        clientSecret: process.env.clientSecret,
        callbackURL: 'http://localhost:3000/auth/linkedin/callback',
        scope: ['r_emailaddress', 'r_liteprofile']
      },
      function(accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        // console.log(profile)
        process.nextTick(function() {
          console.log(profile)
          const searchQuery = {
            email: profile.emails[0].value
          }
          const updates = {
            //or create
            displayName: profile.displayName,
            email: profile.emails[0].value,
            linkedin_id: profile.id,
            profile_image: profile.photos[0].value
          }
          const option = {
            //https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
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
  //https://dev.to/anabella/a-peep-beneath-the-hood-of-passportjs-oauth-flow-eb5
  passport.serializeUser((user, done) => {
    console.log(user)
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    User.findOne(user.id, (err, user) => {
      done(err, user)
    })
  })
}

module.exports = passport_Linkedin
