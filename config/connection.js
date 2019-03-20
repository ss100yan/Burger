
var mysql = require ('mysql');

var connection = mysql.createConnection({
host : 'localhost',
database : 'burger_db',
user : 'root',
password : 'root',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});



module.exports = connection;