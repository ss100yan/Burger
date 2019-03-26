// * Inside `burger.js`, import `orm.js` into `burger.js`

var orm = require('../config/orm.js');

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    selectAll: function(callback){
      orm.selectAll('burgers', function(response){
        callback(response);
      });
    },
 
    insertOne: function(value, callback){
      orm.insertOne('burgers', 'burger_name', value, function(response){
        callback(response);
      });
    },
    updateOne: function(){
     
    },
    updateOne: function(colVal, conditionVal, callback){
      orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal, function(response){
        callback(response);
      });
    }
  };


//   * Export at the end of the `burger.js` file.
module.exports = burger;


// burger.selectAll();