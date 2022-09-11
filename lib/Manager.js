const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email)

        this.officeNumber = officeNumber;

        this.getRole = () => {
            return "employee"
        };
    }
}

managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Enter name:",
            name: 'name',
            validate: nameInput => { nameInput ? true : console.log("Enter a name"), false }
        },
        {
            type: 'number',
            message: "Enter employee identification number:",
            name: 'id',
            validate: idInput => { idInput ? true : console.log("Enter an id number"), false || typeof idInput === 'number' ? true : console.log("id must be a number"), false }
        },
        {
            type: 'input',
            message: "Enter email address:",
            name: 'email',
            validate: emailInput => { emailInput ? true : console.log("Enter an email address"), false || emailInput === 'anystring@anystring.anystring' ? true : console.log("Enter a valid email address"), false }
        },
        {
            type: 'input',
            message: "Enter the manager's office number:",
            name: 'office',
            validate: officeInput => { officeInput ? true : console.log("Enter an office number"), false || typeof officeInput === 'number' ? true : console.log("Office number must be an interger"), false }
        },
    ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            //push new manager to team array
            team.push(manager);
        })
};

module.exports = Manager;
module.exports = managerQuestions();