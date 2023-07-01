// Imports

const CLI = require('./lib/cli.js');
const mysql = require('mysql2');
require('dotenv').config();

// SQL database connection, carried on throughout the class.
const db = mysql.createConnection(
    {
        host: 'localhost',
        // .env for security reasons
        // Follow the README for guidance on how to use.
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    console.log("Connected to Database")
)

// Creates a new instance of the CLI class with the database parsed in.
const cli = new CLI(db);

// Calls the main menu, which starts the application.
cli.mainMenu();
