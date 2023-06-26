// const CLI = require('./lib/cli.js');

// const cli = new CLI();

// cli.run();

const { EmployeeDatabase } = require('./db/employeeDatabase.js');

const opt = new EmployeeDatabase()

opt.options()