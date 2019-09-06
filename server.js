//require ('/home/donnyllionaire/CRUD-app-Nodejs-Express-and-MongoDB/models/db.js')
require('./models/db')
//adding a router for the employee Controllers
const express = require('express')
const employeeController = require('./Controllers/employeeController')
const path = require('path')
consr exphbs = require('express-handlebars');
//calling the express function
var app = express()

//configuring the views
app.set('views', path.join(__dirname, '/views/layouts/'))

//configuring the express engine for handle bars
app.engine('hbs', exphbs({extname:'hbs', defaultlayout: 'mainLayout',
layouDir:__dirname + '/view/layouts/mainLayout
app.set('view engine','hbs');
}))

///starting the server
app.listen(3000, ()=>{
  console.log('Express server started at port:3000')
})

//configure the routing for the application
app.use('/employee', employeeController)
