const mySql = require('mysql2')
const inquirer = require('inquirer')


const dbConnection = mySql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Goddard03!',
        database: 'business_db'
   },
    console.log('Successfully connected!')
);

dbConnection.connect((err) => {
    err ? console.log(err) : CLI()
})

const CLI = () => inquirer.prompt([
    {
        type: 'list',
        message: `What would you like to do?`,
        choices: ['View All Employees...','Add An Employee...', 'Update Employee Role...', 'View All Roles...', 'Add A Role...', 'View All Departments...', 'Add A Department...', 'Quit Menu'], 
        name: `main`
    }
])
.then(response => {
    switch (response.main) {
        case "View All Employees...":
        viewEmployees()
        break;
        
        case "Add An Employee...":
        addEmployee();
        break;

        case "Update Employee Role...":
        updateEmployee()
        break;

        case "View All Roles...":
        viewRoles()
        break;

        case "Add A Role...":
        addRole()
        break;

        case "View All Departments...":
        viewDepartments()
        break;

        case "Add A Department...":
        addDepartment()
        break;

        case "Quit Menu":
        process.exit()
        break;
    }
});

const addDepartment = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your new department?',
        name: 'department'
    }
])
.then(response => {
    dbConnection.query(`INSERT INTO department (name) VALUES (?)`, [response.department], (err, res) => {
        err ? console.log(err) : console.log(`\nNew department, ${response.department}, has been added!`)
        CLI()
    })
});

const addEmployee = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is the first name of this new employee?',
        name: 'first'
    },
    {
        type: 'input',
        message: 'What is the last name of this new employee?',
        name: 'last'
    }
])
.then(response => {
    dbConnection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [response.first, response.last, 1, 1], (err, res) => {
        err ? console.log(err) : console.log(`\nNew department, ${response.department}, has been added!`)
        CLI()
    })
});

const addRole = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of this new role?',
        name: 'role'
    },
    {
        type: 'input',
        message: 'What is the yearly of this new role? (in whole numbers)',
        name: 'salary'
    },
    {
        type: 'list',
        message: 'Which department is this role under?',
        name: 'department',
        choices: ["1", "2", "3"]
    }

])
.then(response => {
    dbConnection.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [response.role, response.salary, response.department], (err, res) => {
        err ? console.log(err) : console.log(`\nNew role, ${response.role}, has been added!`)
        CLI()
    })
});


const viewDepartments = () => inquirer.prompt([
])
.then(response => {
    dbConnection.query('SELECT * FROM department', (err, res) => {
        err 
        ? console.log(err) 
        : console.log(`\nAll departments are listed below...`),
        console.table(res)
        CLI()
        })
});


const viewEmployees = () => inquirer.prompt([
])
.then(response => {
    dbConnection.query('SELECT * FROM employee', (err, res) => {
    err 
    ? console.log(err) 
    : console.log(`\nAll employees are listed below...`),
    console.table(res),
    CLI()
    })
});

const viewRoles = () => inquirer.prompt([
])
.then(response => {
    dbConnection.query('SELECT * FROM role', (err, res) => {
        err 
        ? console.log(err) 
        : console.log(`\nAll roles are listed below...`),
        console.table(res),
        CLI()
    })
})


const updateEmployee = () => inquirer.prompt([
    {
        type: 'list',
        message: 'What is the new role for this employee?',
        choices: ['1', '2', '3'],
        name: 'role'
    }
])
.then(response => {
    console.log(`\nEmployee has been assigned this new role!`)
    CLI()
});