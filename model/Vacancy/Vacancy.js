const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VacancySchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const Vacancy = mongoose.model('Vacancy', VacancySchema);

module.exports = Vacancy;