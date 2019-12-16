const Employee = require('../model/Employee')

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
module.exports = { saveSurvey }
