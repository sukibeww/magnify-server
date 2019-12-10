const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  linkedin_id: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  profile_image: {
    type: String
  }
})

module.exports = mongoose.model('User', UserSchema)
