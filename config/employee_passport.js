const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
const Employee = require('../model/Employee')
const Employer = require('../model/Employer')

const SERVER = process.env.SERVER

const employee_Linkedin = async passport => {
  passport.use(
    new LinkedInStrategy(
      {
        clientID: process.env.clientID, //to move to .env
        clientSecret: process.env.clientSecret,
        callbackURL: SERVER + '/auth/linkedin/callback',
        scope: ['r_emailaddress', 'r_liteprofile'],
        passReqToCallback: true
      },
      function(req, accessToken, refreshToken, profile, done) {
        // console.log(req.query.state)
        if (req.query.state === 'employee') {
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
            Employee.findOneAndUpdate(searchQuery, updates, option, function(
              err,
              user
            ) {
              if (err) {
                return done(err)
              } else {
                return done(null, { userData: user, type: 'employee' })
              }
            })
          })
        } else {
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
            Employer.findOneAndUpdate(searchQuery, updates, option, function(
              err,
              user
            ) {
              if (err) {
                return done(err)
              } else {
                return done(null, { userData: user, type: 'employer' })
              }
            })
          })
        }
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, { id: user.userData._id, type: usertype })
  })

  passport.deserializeUser((user, done) => {
    if (user.type === 'employee') {
      console.log('employee')
      console.log(user)
      Employee.findById(user.id, (err, user) => {
        done(err, user)
      })
    } else {
      console.log('employer')
      console.log(user)
      Employee.findById(user.id, (err, user) => {
        done(err, user)
      })
    }
  })
}

module.exports = employee_Linkedin
