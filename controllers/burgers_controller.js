// importing  Express and burger.js
    var express = require('express');
       var burger = require('../models/burger.js');

// Create the `router` for the app.  
   var router = express.Router();

//create the main router
router.get('/',function(req,res){

  //create an object that holds information.

                 var info = {
                   brgr: [],
                   itm: []
                  };

        // grab data from burger table and insret's it to the object ifo.

         burger.selectAll(function(data){
          for(var i=0;i<data.length; i++){
           info.brgr.push(data[i]);
          }
      });    
   //render info to index.handlebars
    res.render('index',info)
});

//Routing to '/create', calling the insertOne burger model and passing the new burger Info.
router.post('/create', function(req, res){
  //taking the the burgerInput http post from req.body to burger.insertOne model.
  burger.insertOne([req.body.burgerInput], function(){

      // going back to the main route   
        res.redirect('/');
  });
});
//Routing to '/update',calling the updateOne burger model and updating the devourit to true.  
router.put('/update/:id', function(req, res){
  burger.updateOne([req.body.devoured], [req.params.id], function(){
    res.redirect('/');
  });
});

  


  // export the `router` at the end of your file.
  module.exports = router;