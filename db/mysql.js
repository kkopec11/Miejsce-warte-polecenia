const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Haslo123!',
  database: 'mwpDb',
  multipleStatements: true,
  charset: 'utf8'
});

module.exports = pool.promise();