//link to generateHTML
const generateHTML = require('./src/generateHTML')
//team profiles 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


//node modules 
const fs = require('fs');
const inquirer = require('inquirer');

//team array
const teamArray =[];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if(nameInput){
                    return(true);
                } else {
                    console.log("Please enter a manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?",
            validate: idInput => {
                if(idInput){
                    return(true);
                } else {
                    console.log("Please enter a correct id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email",
            validate: emailInput => {
                if(emailInput){
                    return(true);
                } else {
                    console.log('Please enter a email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log('Please enter an office number!')
                    return false;
                } else {
                    return true;
                }
            }
        },
    ])
    // organize data for manager 
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};


const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?",
            validate: nameInput =>{
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter an employee name');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: "Please enter employee's Id.",
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log("Please enter the employee's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter employee's Email.",
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log("Please enter employee's email.");
                    return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'username',
            message: "Please enter employee's github username.",
            when: (input) => input.role === "Engineer", 
            validate: nameInput => {
                if (nameInput ) {
                    return(true);
                } else {
                    console.log("Please enter a github username.");
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'school',
            message: "Please enter employee's School.",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log("Please enter a school name.");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?', 
            default: false
        },
   ])
   .then(employeeData => {
        let { name, id, email, role, username, school, confirmAddEmployee } = employeeData;
        let employee;

        // organize data for employee types 

        if(role === "Engineer") {
            employee = new Engineer (name, id, email, username);

            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee)
        }

        teamArray.push(employee);

        if(confirmAddEmployee){
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
   })

};

//function to generate HTML page using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been successfully created! You can view it in Index.html")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
    








    