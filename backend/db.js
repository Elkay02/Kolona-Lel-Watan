import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'id20549367_admin',
    password: 'Nampalm2009@@',
    database: 'id20549367_database'
});

connection.connect();

export default connection;