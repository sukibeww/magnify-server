const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeNotificationSchema = Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  },
  vacancy: {
    type: Schema.Types.ObjectId,
    ref: 'Vacancy'
  }
})

const EmployeeNotification = mongoose.model('EmployeeNotification', EmployeeNotificationSchema)

module.exports = EmployeeNotification