const mongoose = require('mongoose')

const ResultSchema = new mongoose.Schema({
  score: {
    kinetic: {
      type: Number,
      require: true
    },
    productivity: {
      type: Number,
      require: true
    },
    visual: {
      type: Number,
      require: true
    },
    optimism: {
      type: Number,
      require: true
    },
    social: {
      type: Number,
      require: true
    }
  },
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    require: true
  },
  created: {
    type: String,
    default: Date.now
  }
})

module.exports = mongoose.model('Result', ResultSchema)
