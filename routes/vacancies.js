const express = require('express');
const router = express.Router();

const { ensureAuthenticated } = require('../helper/auth')
const { editVacancy, getVacancies, createVacancies, getVacanciesOfCompany ,deleteVacancy} = require('../controller/vacancy')

/*
TODO: make this authenticated by mocking authentication in the tests
*/

router.get('/vacancies', getVacancies, ensureAuthenticated )
router.get('/vacancies/:companyId', getVacanciesOfCompany) , ensureAuthenticated
router.post('/vacancies', createVacancies, ensureAuthenticated)
router.delete('/vacancies/:vacancyId', deleteVacancy, ensureAuthenticated)
router.put('/vacancies/:vacancyId', editVacancy, ensureAuthenticated)


module.exports = router;