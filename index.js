const CLI = require('./lib/cli.js');
const Database = require('./db/database.js');

const cli = new CLI();

// WHEN I run index.js
// THEN I connect to the database
// WHEN I connect to the database, I run CLI command.



const credentials = {
    host: 'localhost',
    user: 'root',
    password: 'Fireball1',
    database: 'employee_db'
};

const db = new Database(credentials);
db.connect()

cli.run();