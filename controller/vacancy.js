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

const getVacanciesOfCompany = async (req, res) => {
  console.log(req.params.companyId)
  await Vacancy
  .find()
  .where("creator").equals(req.params.companyId)
  .exec(function(
    err,
    result
  ) {
    if (err) {
      res.status(400).send(err)
    } else {
      console.log(result)
      res.status(200).send(result)
    }
  })
}

const createVacancies = async (req, res) => {
  const { newVacancy } = req.body
  try {
    await Vacancy.create(newVacancy, (err, item)=>{
      if(item){
        res.json(item)
      }
    })
  }
  catch(error){
    res.status(500).send(error)
  }
}

module.exports = {
  getVacancies,
  createVacancies,
  getVacanciesOfCompany
}