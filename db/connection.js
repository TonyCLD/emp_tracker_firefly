const mysql = require('mysql2');
const is_on_heroku = process.env.NODE_ENV === 'production';
const connection_data = is_on_heroku ? {
    host: 'n4m3x5ti89xl6czh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    database: 'owpggkyq543hb11k',
    user: 'nuk599y5hqmsbyqw',
    password: 'wucrrz55j4nzhdap'
} : {
    host: 'localhost',
    database: 'firefly',
    user: 'root',
    password: 'pass'
}

const connection = mysql.createPool(connection_data);

// PORT 3306




console.log(is_on_heroku);
module.exports = connection;


