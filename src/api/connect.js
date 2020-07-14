const mysql = require('mysql');

let Config = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'res_kor_db1'
});

export default Config;
