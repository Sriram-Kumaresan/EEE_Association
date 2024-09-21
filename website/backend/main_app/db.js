const mysql2 = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Alconesy@24',
    // password: 'Badminton19@',
    // password: 'root',
    database: 'alconesy'
  };

  const pool= mysql2.createPool(dbConfig).promise()


  module.exports=pool