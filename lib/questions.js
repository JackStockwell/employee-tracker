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
            { value: 'addDepartment', name:'Add a department.' },
            { value: 'addRole', name: 'Add a role.'},
            { value: 'addEmployee', name:'Add an employee.' },
            { value: 'updateRole', name:'Update an employees role.'}
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
        name: 'role',
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
        name: 'empLastName',
        message: 'Employee\'s last name?'
    },
    {
        type: 'list',
        name: 'empRole',
        choices: [

        ]
    },
    {
        type: 'list',
        name: 'empManager',
        choices: [

        ]
    }
]

const updateEmployee = [
    {
        type: 'list',
        name: 'updateEmpList',
        choices: [

        ]
    },
    {
        type: 'list',
        name: 'updateRoleList'
    }
]

module.exports = questions = { 
    mainMenu,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee
}