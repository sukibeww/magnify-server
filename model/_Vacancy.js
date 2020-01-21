const mongoose = require('mongoose')

const VacancySchema = new mongoose.Schema({
  vacancy: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  employer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employer'
    // required: true
  }
})

module.exports = mongoose.model('Vacancy', VacancySchema)
