// Imports

const mysql = require('mysql2');
const inquirer = require('inquirer');
const { mainMenu, addDepartment, addRole, addEmployee, updateEmployee } = require('./questions');
const { Departments, Employees } = require('../db/employeeDatabase.js')
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    console.log("Connected to Database")
)


class CLI {

    constructor() {

    }

    // Function to connect to the database.
    run() {
        db.connect()
        this.mainMenu()
    }
          // TAKE RESPONSE => RUN CLASS
    mainMenu() {
        inquirer
        .prompt(mainMenu)
        .then((response) => {
            const option = {
                viewDepartments: Departments,
                viewEmployees: Employees
            }

            const data = new option[response.option](db);
            return data.retrieve();
        })
        .then((data) => console.table(data))

    }

    

    
}

module.exports = CLI;