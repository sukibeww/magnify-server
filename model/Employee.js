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
  photos: {
    type: String
  },
  linkedin_id: {
    type: String
  },
  category: [
    {
      type: String
    }
  ],
  bio: String,
  current: {
    current_section: {
      type: String
    },
    current_count: {
      type: Number
    }
  },
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
      [
        {
          type: String
        }
      ]
    ],
    surveyD: [
      {
        type: String
      }
    ]
  }
})

module.exports = mongoose.model('Employee', EmployeeSchema)
