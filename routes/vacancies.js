const express = require('express');
const router = express.Router();

const { ensureAuthenticated } = require('../helper/auth')
const { getVacancies } = require('../controller/vacancy')

/*
TODO: make this authenticated by mocking authentication in the tests
*/

router.get('/vacancies', getVacancies)


module.exports = router;