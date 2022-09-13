const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { Console } = require('console');
//npm email validator import
const validator = require('email-validator');
//initialize team member array
let team = [];
//create html cards for different sub-classes of employees
const managerCard = (teamMember) => {
    return `<div class="card" style="width: 18rem;">
<div class="card-header">
    <h3><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"/>
    <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
  </svg>&nbsp;Manager</h3>
    <h5>${teamMember.name}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID#: ${teamMember.id}</li>
  <li class="list-group-item">Email: <a href = "mailto:${teamMember.email}">${teamMember.email}</a></li>
  <li class="list-group-item">Office#: ${teamMember.officeNumber}</li>
</ul>
</div>
`;
}
const engineerCard = (teamMember) => {
    return `<div class="card" style="width: 18rem;">
<div class="card-header">
    <h3><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-wrench-adjustable-circle-fill" viewBox="0 0 16 16">
    <path d="M6.705 8.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27.596-.894Z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm-6.202-4.751 1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.49 4.49 0 0 1-1.592-.29L4.747 14.2a7.031 7.031 0 0 1-2.949-2.951ZM12.496 8a4.491 4.491 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11c.027.2.04.403.04.61Z"/>
  </svg>&nbsp;Engineer</h3>
    <h5>${teamMember.name}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID#: ${teamMember.id}</li>
  <li class="list-group-item"><a href = "mailto:${teamMember.email}">${teamMember.email}</a></li>
  <li class="list-group-item">Github Username: <a href="https://github.com/${teamMember.gitHub}" target="_blank">${teamMember.gitHub}</a></li>
</ul>
</div>
`;
}
const internCard = (teamMember) => {
    return `<div class="card" style="width: 18rem;">
<div class="card-header">
    <h3><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
  </svg>&nbsp;Intern</h3>
    <h5>${teamMember.name}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID#: ${teamMember.id}</li>
  <li class="list-group-item"><a href = "mailto:${teamMember.email}">${teamMember.email}</a></li>
  <li class="list-group-item">School: ${teamMember.school}</li>
</ul>
</div>
`;
}
//create template literal html code based on members in team array
generateTeamPageHtml = () => {
    let buildTeam = [];
    //console.log(`team: ${team}`);
    for (let i = 0; i < team.length; i++) {
        const members = team[i];
        console.log(`role: ${members.getRole()}`);
        members.getRole() === "manager" ? buildTeam.push(managerCard(members)) :
            members.getRole() === "engineer" ? buildTeam.push(engineerCard(members)) :
                members.getRole() === "intern" ? buildTeam.push(internCard(members)) :
                    console.log("No team members");
    }
    console.log(buildTeam);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Page Builder</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <header class="container">
            <h1>My Team</h1>
        </header>
        <main class="container d-flex justify-content-around flex-wrap">
            ${buildTeam.join('')}       
        </main>  
    </body>
    </html>`;
}
//inquirer questions for manager
managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Enter manager's name:",
            name: 'name',
            validate: (answer) => {
                if (answer) { 
                    return true;
                } else {
                    return console.log("Enter a name")}
            },
        },
        {
            type: 'number',
            message: "Enter manager's identification number:",
            name: 'id',
            validate: (answer) => {
                if (answer && typeof answer === 'number') { 
                    return true;
                } else {
                    return console.log("Enter a number");
                };
            }
        },
        {
            type: 'input',
            message: "Enter manager's email address:",
            name: 'email',
            validate: (answer) => {
                if (validator.validate(answer)) {
                    return true;
                } else {
                    return console.log("Enter a valid email address");
                }
            }
        },
        {
            type: 'input',
            message: "Enter manager's office number:",
            name: 'office',
            validate: (answer) => { 
                if (answer) {
                    return true;
                } else {
                    return console.log("Enter an office number")
                }
            }
        },
    ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            //push new manager to team array
            console.log(manager);
            team.push(manager);
            choiceQuestion();
        })
};
//create question with options to create additional team members or finish page
const choiceQuestion = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do next?",
            name: 'choice',
            choices: ["Add an Engineer", "Add an Intern", "Finish building Team"],
        }
    ])
        .then(choice => {
            console.log(choice.choice)
            switch (choice.choice) {
                case "Add an Engineer":
                    //inquirer questions for engineer
                    engineerQuestions();
                    break;
                case "Add an Intern":
                    //inquirer questions for intern
                    internQuestions();
                    break;
                default:
                    //create html for team page  
                    generateTeamPageHtml(team);
                    init();
                    break;
            }
        });
}
//inquirer questions for engineer
engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Enter engineer's name:",
            name: 'name',
            validate: (answer) => {
                if (answer) { 
                    return true;
                } else {
                    return console.log("Enter a name")}
            },
        },
        {
            type: 'number',
            message: "Enter engineer's identification number:",
            name: 'id',
            validate: (answer) => {
                if (answer && typeof answer === 'number') { 
                    return true;
                } else {
                    return console.log("Enter a number");
                };
            }
        },
        {
            type: 'input',
            message: "Enter engineer's email address:",
            name: 'email',
            validate: (answer) => {
                if (validator.validate(answer)) {
                    return true;
                } else {
                    return console.log("Enter a valid email address");
                }
            }
        },
        {
            type: 'input',
            message: "Enter the engineer's GitHub username:",
            name: 'username',
            alidate: (answer) => {
                if (answer) { 
                    return true;
                } else {
                    return console.log("Enter a username")}
            },
        }
    ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.username);
            //push new engineer to team array
            team.push(engineer);
            choiceQuestion();
        })
};
//inquirer questions for intern
internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Enter interns's name:",
            name: 'name',
            validate: (answer) => {
                if (answer) { 
                    return true;
                } else {
                    return console.log("Enter a name")}
            },
        },
        {
            type: 'number',
            message: "Enter intern's identification number:",
            name: 'id',
            validate: (answer) => {
                if (answer && typeof answer === 'number') { 
                    return true;
                } else {
                    return console.log("Enter a number");
                };
            }
        },
        {
            type: 'input',
            message: "Enter intern's email address:",
            name: 'email',
            validate: (answer) => {
                if (validator.validate(answer)) {
                    return true;
                } else {
                    return console.log("Enter a valid email address");
                }
            }
        },
        {
            type: 'input',
            message: "Enter the intern's school:",
            name: 'school',
            validate: (answer) => {
                if (answer) { 
                    return true;
                } else {
                    return console.log("Enter a school name")}
            },
        },
    ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            //push new intern to team array
            team.push(intern);
            choiceQuestion();
        })
};
//Create a function to write html file
function writeToFile(fileName) {
    //function using file system to write html file
    fs.writeFile(fileName, generateTeamPageHtml(team), (err) =>
        err ? console.error(err) : console.log('An HTML file has been created for your project!')
    )
};
//Create a function to initialize app
function init() {
    writeToFile('index.html');
};
//Function call to initialize app
managerQuestions();
