const mongoose = require('mongoose')

const EmployerSchema = new mongoose.Schema({
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
  }
})

module.exports = mongoose.model('Employer', EmployerSchema)
