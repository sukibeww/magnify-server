const Vacancy = require('../models/Vacancy');

const getVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find();
    res.status(200).send(vacancies);
  }
  catch(error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getVacancies
}