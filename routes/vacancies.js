const express = require('express');
const router = express.Router();

const { ensureAuthenticated } = require('../helper/auth')
const { getVacancies, createVacancies, getVacanciesOfCompany} = require('../controller/vacancy')

/*
TODO: make this authenticated by mocking authentication in the tests
*/

router.get('/vacancies', getVacancies)
router.get('/vacancies/:companyId', getVacanciesOfCompany)
router.post('/vacancies', createVacancies)


module.exports = router;