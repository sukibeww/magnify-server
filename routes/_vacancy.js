const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../helper/auth')
const {
  getAllVacancy,
  getUserVacancy,
  createVacancy
} = require('../controller/vacancy')

router.get('/employer/vacancy', ensureAuthenticated, getUserVacancy)
router.post('/employer/vacancy', ensureAuthenticated, createVacancy)
router.get('/employee/vacancy', ensureAuthenticated, getAllVacancy)

module.exports = router
