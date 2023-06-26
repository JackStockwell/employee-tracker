// Imports

const inquirer = require('inquirer');
const { mainMenu, addDepartment, addRole, addEmployee, updateEmployee } = require('./lib/questions');
const db = require('../db/employeeDatabase.js')

// Function to connect to the database.
const dbConnect = () => {

    const credentials = {
        host: 'localhost',
        user: 'root',
        password: 'Fireball1',
        database: 'employee_db'
    };

    const db = new db(credentials);

    db.connect();
}


const menuQuestions = () => {
    
    dbConnect();

    inquirer
        .prompt(mainMenu)
        .then((response) => {
            
        })
}

