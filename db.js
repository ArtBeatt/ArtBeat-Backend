const Pool = require('pg').Pool

const pool = new Pool({
    user: 'db_user',
    password: 'db_password',
    host: 'db_host',
    port: 5432,
    database: 'db_name'
});

module.exports = pool;