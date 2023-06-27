const CLI = require('./lib/cli.js');
const Database = require('./db/database.js')

const cli = new CLI();

Database.connect();
cli.run();