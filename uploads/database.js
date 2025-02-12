const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',  // Replace with your MySQL host
  user: 'root',  // Replace with your MySQL username
  password: 'admin',  // Replace with your MySQL password
  database: 'images' 
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = connection;