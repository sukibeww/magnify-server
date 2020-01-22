const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VacancySchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'Employer'
  },
  salary: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  applicants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Employee'
    }
  ],
  isOpen: {
    type: Boolean,
    required: true
  }
})

const Vacancy = mongoose.model('Vacancy', VacancySchema)

module.exports = Vacancy
