const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const connection_data = {
    host: 'n4m3x5ti89xl6czh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    database: 'owpggkyq543hb11k',
    user: 'nuk599y5hqmsbyqw',
    password: 'wucrrz55j4nzhdap'
};

const db = mysql.createPool(connection_data);

fs.promises.readFile(path.join(__dirname, 'seed_heroku.sql'), 'utf8')
    .then(sql => {
        db.query(sql)
            .then(() => {
                console.log('Heroku DB seeded successfully!');
            })
            .catch(err => console.log(err));
    });