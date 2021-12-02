const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');

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
    ])
    .then(managerInput => {
        const { name, id, email } = managerInput;
        const manager = new Manager (name, id, email);

        teamArray.push(manager);
        console.log(manager);
    })
};

addManager();