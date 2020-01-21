const Employer = require('../model/Employer')
const Vacancy = require('../model/Vacancy')

const getAllVacancy = async (req, res) => {
  const { industry } = req.body.industry
  await Vacancy.find({ industry: industry }, function(err, result) {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
}
const getUserVacancy = async (req, res, next) => {
  if (req.user._id) {
    await Vacancy.find({ employer_id: req.user._id }, function(err, result) {
      if (err) {
        res.status(404).send(err)
      }
      res.send(result)
    })
  } else {
    res.status(404).send('not authenticate')
  }
}

const createVacancy = async (req, res) => {
  if (req.user._id) {
    const vacancy = new Vacancy({
      vacancy: req.body.vacancy,
      salary: req.body.salary,
      industry: req.body.industry,
      status: req.body.status,
      employer_id: req.user._id
    })
    try {
      let newVacancy = await vacancy.save()
      res.send(newVacancy)
    } catch (err) {
      res.status(500).send(err)
    }
  } else {
    res.status(404).send('not authenticate')
  }
}

const updateVacancy = async (req, res, next) => {
  if (req.user._id) {
    await Vacancy.findByIdAndUpdate(editedEmployer._id, editedEmployer)
  } else {
    res.status(404).send('not authenticate')
  }
}

const deleteVacancy = async (req, res, next) => {
  const { editedEmployer } = req.body
  if (editedEmployer) {
    await Employer.findByIdAndUpdate(editedEmployer._id, editedEmployer)
    res.send('Updated')
  } else {
    console.log('error')
    res.send('404: Update not found')
  }
}

module.exports = { getAllVacancy, getUserVacancy, createVacancy }
