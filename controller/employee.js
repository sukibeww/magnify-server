const Employee = require('../model/Employee')

const updateEmployee = async (req, res, next) => {
  const { editedEmployee } = req.body
  if (editedEmployee){
    await Employee.findByIdAndUpdate(editedEmployee._id, editedEmployee)
    res.send("Updated")
  }
  else{
    console.log("error")
    res.send("404: Update not found")
  }
}

module.exports = { updateEmployee } 
