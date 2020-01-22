const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../helper/auth')
const { updateEmployer } = require('../controller/employeeNotification')

router.post('/:employeeId', ensureAuthenticated, createEmployeeNotification)

module.exports = router