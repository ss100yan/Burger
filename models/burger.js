// * Inside `burger.js`, import `orm.js` into `burger.js`

var orm = require('../config/orm.js');

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    selectAll: function(cb){
      orm.selectAll('burgers', function(res){
        cb(res);
      });
    },
 
    insertOne: function(){
      
    },
    updateOne: function(){
     
    },
  };


//   * Export at the end of the `burger.js` file.
module.exports = burger;


// burger.selectAll();