const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Goddard03!',
    database: 'employee-tracker'
});

connection.connect(function(err) {
    if (err) throw err;
}); 

module.exports = connection;