// importing  Express and burger.js
    var express = require('express');
       var burger = require('../models/burger.js');

// Create the `router` for the app.  
   var router = express.Router();

//create the main router
router.get('/',function(req,res){


   //create an object that holds information from both the burger and menu table
    var info = {
      brgr: [],
      itm: []
    };

// grab data from burger table
    burger.selectAll(function(data){
      for(var i=0;i<data.length; i++){
        info.brgr.push(data[i]);
      }
   });    
   
  
//render index.handlebars
    res.render('index',info)
});

  router.post('/create', function(req, res){
    burger.insertOne([], 
      function(){
      
    });
    res.redirect('/');
  });
  
  router.put('/update/:id', function(req, res){
    burger.updateOne([], function(){
      res.redirect('/');
    });
  });
  


  // export the `router` at the end of your file.
  module.exports = router;