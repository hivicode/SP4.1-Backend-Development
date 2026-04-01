const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crud_user'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});
module.exports = conn;