const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'pk1l4ihepirw9fob.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'nbg3gdafbxycxunu',
    password: 'ujdbj7l6bvam7xjk',
    database: 'dq9m9enqi97gnecz',
    multipleStatements: true
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('Database is connected');
    }
});

module.exports = mysqlConnection;
