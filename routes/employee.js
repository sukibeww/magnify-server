const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../helper/auth')
const { updateEmployee, saveSurvey } = require('../controller/employee')
const { createResult, findResult } = require('../controller/result')

router.put('/employee/update', ensureAuthenticated, updateEmployee)
router.post('/employee/survey', ensureAuthenticated, saveSurvey)

router.get('/employee/result', ensureAuthenticated, findResult)
router.post('/employee/result', ensureAuthenticated, createResult)

module.exports = router
