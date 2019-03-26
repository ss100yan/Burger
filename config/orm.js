var connection = require("./connection.js");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// var orm = {

var orm ={
// *  ORM function taking all the  burger names from SQL database.
selectAll: function(table, callback){
      var queryString = 'SELECT * FROM ' + table;
  
      connection.query(queryString, function(error, results){
        if(error) throw error;
        callback(results);
      });
    },
  

// *  ORM function insering to insert a new burger name to SQL database.
insertOne: function(table, column, burgerInput, callback){
    var queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';

    connection.query(queryString, [burgerInput], function(err, data){
      if(err) throw err;
      callback(data);
    });
  },


  updateOne: function(table, col, colVal, condition, conditionVal, callback){
    var queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';

    connection.query(queryString, [colVal, conditionVal], function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

// connection.end();
};
// orm.selectAll();

// * Export the ORM object in `module.exports`.
module.exports = orm;