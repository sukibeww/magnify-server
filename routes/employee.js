const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../helper/auth')
const {
  updateEmployee,
  saveSurvey,
  createResult
} = require('../controller/employee')

router.put('/employee/update', ensureAuthenticated, updateEmployee)
router.post('/employee/survey', ensureAuthenticated, saveSurvey)

router.post('/employee/result', ensureAuthenticated, createResult)

module.exports = router
