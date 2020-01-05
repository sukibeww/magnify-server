const Employee = require('../model/Employee')
const Result = require('../model/Result')

const createResult = async (req, res, next) => {
  const { surveyA, surveyB, surveyC, surveyD } = req.body
  const survey = {
    surveyA,
    surveyB,
    surveyC,
    surveyD
  }
  const searchQuery = {
    employee_id: req.user._id
  }
  const updates = {
    score: {
      kinetic: 32,
      productivity: 26,
      visual: 66,
      optimism: 100,
      social: 78
    },
    employee_id: req.user._id,
    created: Date.now()
  }
  const option = {
    new: true,
    upsert: true
  }
  const result = await Result.findOneAndUpdate(
    searchQuery,
    updates,
    option,
    function(err, result) {
      if (err) {
        res.send(undefined)
      } else {
        res.send(result)
      }
    }
  )
}

const findResult = async (req, res, next) => {
  const searchQuery = {
    employee_id: req.user._id
  }
  const result = await Result.findOne(searchQuery, function(err, result) {
    if (err) {
      res.send(undefined)
    } else {
      console.log(result)
      res.send(result)
    }
  })
}
module.exports = { createResult, findResult }
