const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  profile_image: {
    type: String
  },
  category: [
    {
      type: String
    }
  ],
  survey: {
    surveyA: [
      {
        type: String
      }
    ],
    surveyB: [
      {
        type: String
      }
    ],
    surveyC: [
      {
        type: String
      }
    ],
    surveyD: [
      {
        type: String
      }
    ]
  }
})

module.exports = mongoose.model('Employee', EmployeeSchema)
