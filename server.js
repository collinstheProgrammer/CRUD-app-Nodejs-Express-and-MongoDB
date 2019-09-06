//require ('/home/donnyllionaire/CRUD-app-Nodejs-Express-and-MongoDB/models/db.js')
require('./models/db')
//adding a router for the employee Controllers
const express = require('express')
const employeeController = require('./Controllers/employeeController')
const path = require('path')
const exphbs = require('express-handlebars');
const router = express.Router()

//calling the express function
var app = express()

//configuring the views
//app.set('views', path.join(__dirname, '/views/'))

//configuring the express engine for handle bars
//app.engine('hbs', exphbs({extname:'hbs', defaultlayout: 'mainLayout', layoutsDir:__dirname + '/view/layouts/mainLayout'}))
//app.engine('hbs', require('hbs').__express)
//app.engine('hbs', require('addOrEdit').renderFile);

//app.engine(app.engine('html', require('ejs').renderFile))
//app.set('view engine','hbs');
//app.set('views',__dirname + '/views')

///starting the server


//app.use('/employee', employeeController)

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/addOrEdit.html'));
  //__dirname : It will resolve to your project folder.
});

app.use('/',router)
app.listen(3000, ()=>{
  console.log('Express server started at port:3000')
})

//configure the routing for the application
