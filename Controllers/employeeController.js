const express = require('express')
const path = require('path')
const router = express.Router()

//router.get('/',function(req,res){
  //res.render('employee/addOrEdit',{viewTitle:"Register New Employee"})
//res.sendFile('/home/donnyllionaire/CRUD-app-Nodejs-Express-and-MongoDB/employee/addOrEdit.html',{viewTitle:"Register New Employee"})
//res.render('addOrEdit')

//  res.json('sample text')
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/home/donnyllionaire/CRUD-app-Nodejs-Express-and-MongoDB/employee/addOrEdit.html'));
  //__dirname : It will resolve to your project folder.
});
//exporting the Router
module.exports = router
