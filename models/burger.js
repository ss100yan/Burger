// * Inside `burger.js`, import `orm.js` into `burger.js`

var orm = require('../config/orm.js');

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    selectAll: function(cb){
      orm.selectAll('burgers', function(res){
        cb(res);
      });
    },
 
    insertOne: function(val, cb){
      orm.insertOne('burgers', 'burger_name', val, function(res){
        cb(res);
      });
    },
    updateOne: function(colVal, conditionVal, cb){
      orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal, function(res){
        cb(res);
      });
    },
  };


//   * Export at the end of the `burger.js` file.
module.exports = burger;


// burger.selectAll();