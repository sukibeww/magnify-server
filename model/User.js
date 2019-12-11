const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
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
  ]
})

module.exports = mongoose.model('User', UserSchema)
