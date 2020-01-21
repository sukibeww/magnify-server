const express = require('express');
const router = express.Router();

const { ensureAuthenticated } = require('../helper/auth')
const { editVacancy, getVacancies, createVacancies, getVacanciesOfCompany ,deleteVacancy} = require('../controller/vacancy')

/*
TODO: make this authenticated by mocking authentication in the tests
*/

router.get('/vacancies', getVacancies)
router.get('/vacancies/:companyId', getVacanciesOfCompany)
router.post('/vacancies', createVacancies)
router.delete('/vacancies/:vacancyId', deleteVacancy)
router.put('/vacancies/:vacancyId', editVacancy)


module.exports = router;