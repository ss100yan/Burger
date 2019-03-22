var connection = require("./connection.js");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// var orm = {
// selectAll: function(callback){

//     connection.query('SELECT * FROM burgers', function (error, results, fields) {
//     if (error)
//         throw error;
//         callback(results);
//     results.forEach(result => {
//         console.log(result);
//     });
// });
// } ,
var orm ={
    selectAll: function(table, callback){
      var queryString = 'SELECT * FROM ' + table;
  
      connection.query(queryString, function(err, data){
        if(err) throw err;
        callback(data);
      });
    },
  

// * `insertOne()`
insertOne: function(){

    connection.query('SELECT * FROM burgers', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});
} ,

// * `updateOne()`
updateOne: function(){

    connection.query('SELECT * FROM burgers', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});
} 

// connection.end();
};
// orm.selectAll();

// * Export the ORM object in `module.exports`.
module.exports = orm;