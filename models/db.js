const mongoose = require('mongoose')

//connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser:true},(err)=> {
  if(!err){
    console.log('Successful MongoDB Connection')
  }
  else {
    console.log('MongoDB connection unsuccessful' + err)
  }
})
require('./employees.model')
