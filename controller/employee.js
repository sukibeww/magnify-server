const Employee = require('../model/Employee')

const updateEmployee = async (req, res, next) => {
  const { editedEmployee } = req.body
  if (editedEmployee) {
    await Employee.findByIdAndUpdate(editedEmployee._id, editedEmployee)
    res.send('Updated')
  } else {
    console.log('error')
    res.send('404: Update not found')
  }
}

const getDelegates = async (req, res, next) => {
  await Employee
  .find()
  .where("score.rating").gt(0)
  .exec(function(
    err,
    result
  ) {
    if (err) {
      res.status(400).send(err)
    } else {
      res.send(result)
    }
  })
}

const saveSurvey = async (req, res, next) => {
  const { surveyA, surveyB, surveyC, surveyD, count, section } = req.body

  const survey = {
    surveyA,
    surveyB,
    surveyC,
    surveyD
  }
  const current = { current_count: count || 1, current_section: section || 'A' }
  const searchQuery = {
    _id: req.user._id
  }
  const updates = {
    survey: survey || {},
    current: current
  }
  await Employee.findOneAndUpdate(searchQuery, updates, function(err, user) {
    if (err) {
      res.status(404).send('something went wrong')
    } else {
      res.status(200).send('save succesfully')
    }
  })
}

const createResult = async (req, res, next) => {
  const { surveyA, surveyB, surveyC, surveyD } = req.body

  const searchQuery = {
    _id: req.user._id
  }
  const updates = {
    score: {
      kinetic: surveyA,
      productivity: surveyB,
      visual: surveyC,
      optimism: 200 - (surveyA + surveyB),
      social: surveyD,
      rating: (200 + surveyC + surveyD) / 5,
      created: Date.now()
    } //fake
  }
  const option = {
    new: true,
    upsert: true
  }
  await Employee.findOneAndUpdate(searchQuery, updates, option, function(
    err,
    user
  ) {
    if (err) {
      res.status(404).send(undefined)
    } else {
      res.json({ score: user.score })
    }
  })
}

module.exports = { updateEmployee, saveSurvey, createResult, getDelegates }
