const Employer = require('../models/Employer')

const updateEmployer = async (req, res, next) => {
  const { editedEmployer } = req.body
  if (editedEmployer) {
    await Employer.findByIdAndUpdate(editedEmployer._id, editedEmployer)
    res.send('Updated')
  } else {
    console.log('error')
    res.send('404: Update not found')
  }
}

module.exports = { updateEmployer }