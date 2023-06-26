const CLI = require('./lib/cli.js');

const cli = new CLI();

cli.connect();
cli.run();