// Imports

const inquirer = require('inquirer');
const { mainMenu, addDepartment, addRole, addEmployee, updateEmployee } = require('./lib/questions');
const database = require('../db/employeeDatabase.js')

database.options()



// const menuQuestions = () => {
//     inquirer
//         .prompt(mainMenu)
//         .then((response) => {
            
//         })
// }

