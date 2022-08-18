const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'n4m3x5ti89xl6czh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    database: 'owpggkyq543hb11k',
    user: 'nuk599y5hqmsbyqw',
    password: 'wucrrz55j4nzhdap'
});

// PORT 3306

module.exports = connection;