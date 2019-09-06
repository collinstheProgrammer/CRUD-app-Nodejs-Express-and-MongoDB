const mongoose = require('mongoose')
//creating an object for the employees schema
var employeesSchema = new mongoose.Schema({
  fullname :{
    type: String
  },

  email :{
    type: String
  },
  mobile :{
    type: String
  },
  city:{
    type: String
  }
})
//registering employees schema inside mongoose
mongoose.model('Employee', employeesSchema )
