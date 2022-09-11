const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {

        super(name, id, email)

        this.gitHub = gitHub;

        engineerQuestions = () => {
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
                    message: "Enter the engineer's GitHub username:",
                    name: 'username',
                    validate: userNameInput => { userNameInput ? true : console.log("Enter a GitHub username"), false }
                }
            ])
                .then(answers => {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.username);
                })
        };
        getGithub = () => {
            return this.gitHub;
        };
        getRole = () => {
            return "engineer";
        };
    };
}

module.exports = Engineer;