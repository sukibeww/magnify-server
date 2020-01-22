const EmployeeNotification = require('../models/EmployeeNotification');
const Employee = require('../models/Employee')
const Vacancy = require('../models/Vacancy')

const createEmployeeNotification = async (req, res, next) => {
  const { employeeId, vacancyId } = req.body;

  try {
    const employee = await Employee.findById(employeeId);
    const vacancy = await Vacancy.findById(vacancyId);
    await EmployeeNotification.create({ employee, vacancy }, (err, item) => {
      if (item) {
        res.json(item)
      }
    })
  }
  catch(error) {
    res.status(500).send(error);
  }
}

module.exports = { createEmployeeNotification }
