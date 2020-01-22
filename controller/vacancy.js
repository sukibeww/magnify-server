const Vacancy = require('../models/Vacancy')

const getVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find()
      .where({ isOpen: true })
      .populate('creator')
      .exec(function(err, result) {
        console.log(result)
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(200).send(result)
        }
      })
  } catch (error) {
    res.status(500).send(error)
  }
}

const getVacanciesOfCompany = async (req, res) => {
  await Vacancy.find()
    .where('creator')
    .equals(req.params.companyId)
    .populate('applicants', 'email displayName photos score category')
    .exec(function(err, result) {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(result)
      }
    })
}

const editVacancy = async (req, res) => {
  if (req.body) {
    try {
      await Vacancy.findByIdAndUpdate(req.body._id, req.body)
      res.send('Updated')
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

const deleteVacancy = async (req, res) => {
  const { vacancyId } = req.params
  try {
    await Vacancy.findByIdAndDelete(vacancyId, (err, item) => {
      if (item) {
        res.json(item)
      }
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

const createVacancies = async (req, res) => {
  const { newVacancy } = req.body
  try {
    await Vacancy.create(newVacancy, (err, item) => {
      if (item) {
        res.json(item)
      }
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getVacancies,
  createVacancies,
  getVacanciesOfCompany,
  deleteVacancy,
  editVacancy
}
