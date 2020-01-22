const express = require('express')
const app = express()
const morgan = require('morgan')

require('dotenv').config()
require('./config/mongoose.js')

const passport = require('passport')
const cors = require('cors')

app.use(
  cors({
    origin: process.env.HOMEPAGE,
    credentials: true
  })
)

const session = require('express-session')
const session_setting = session({
  secret: 'magnify159088',
  resave: false,
  saveUninitialized: true,
  rolling: true,
  cookie: { maxAge: 1000000 }
})

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session_setting)
app.use(passport.initialize())
app.use(passport.session())

app.use(require('./routes/email'))
app.use(require('./routes/employee'))
app.use(require('./routes/auth'))
app.use(require('./routes/employer'))
app.use(require('./routes/vacancies'))

module.exports = app
