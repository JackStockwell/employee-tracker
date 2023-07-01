const mainMenu = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: 
        [
            { value: 'viewDepartments', name: 'View all Departments.'},
            { value: 'viewRoles', name: 'View all Roles.' },
            { value: 'viewEmployees', name:'View all Employees.' },
            { value: 'viewManagers', name:'View all Managers'},
            { value: 'addDepartment', name:'Add a department.' },
            { value: 'addRole', name: 'Add a role.'},
            { value: 'addEmployee', name:'Add an employee.' },
            { value: 'updateRole', name:'Update an employees role.'},
            { value: 'exit', name: 'Quit'}
        ]
    }
]

const addDepartment = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'New department name?'
    }
]

const addRole = [
    {
        type: 'input',
        name: 'roleName',
        message: 'New role name?'
    },
    {
        type: 'input',
        name: 'roleSalary',
        message: 'The role\'s salary? '
    },
    {
        type: 'list',
        name: 'roleDepartment',
        message: 'What department do they belong too?',
        choices: [

        ]
    }
]

const addEmployee = [
    {
        type: 'input',
        name: 'empNameFirst',
        message: 'Employee\'s first name?'
    },
    {
        type: 'input',
        name: 'empNameLast',
        message: 'Employee\'s last name?'
    },
    {
        type: 'list',
        name: 'empRole',
        message: 'Employee\'s role?',
        choices: [

        ]
    },
    {
        type: 'list',
        name: 'empManager',
        message: 'Who do they report to? (Manager)',
        choices: [

        ]
    }
]

const updateEmployee = [
    {
        type: 'list',
        name: 'updatedEmployee',
        message: 'Who do you want to update?',
        choices: [

        ]
    },
    {
        type: 'list',
        name: 'newRole',
        message: 'What \'s their new role?',
        choices: [

        ]
    }
]

const exit = [
    {
        type: 'confirm',
        name: 'exit',
        message: 'Are you sure you want to quit?'
    }
]

module.exports = questions = { 
    mainMenu,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee,
    exit
}