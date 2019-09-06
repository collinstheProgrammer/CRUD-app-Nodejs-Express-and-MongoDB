const express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
  res.json('sample text')
})
//exporting the Router
module.exports = router
