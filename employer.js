const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../helper/auth')
const { updateEmployer } = require('../controller/employer')

router.put('/employer/update', ensureAuthenticated, updateEmployer)

module.exports = router