const express = require('express')
const app = express()
const morgan = require('morgan')

require('dotenv').config()
require('./config/mongoose.js')

const cors = require('cors')
const passport = require('passport')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize())

app.use(require('./routes/index'))

app.listen(process.env.PORT || 3000, console.log('Listening on Port'))
