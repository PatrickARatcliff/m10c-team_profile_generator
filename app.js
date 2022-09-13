const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { Console } = require('console');
//initialize team member array
let team = [];
//create html cards for different sub-classes of employees
const managerCard = (teamMember) => {
    return `<div class="card" style="width: 18rem;">
<div class="card-header">
    <h3><i class="bi bi-cup-hot-fill"></i> Manager</h3>
    <h5>${teamMember.name}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID#: ${teamMember.id}</li>
  <li class="list-group-item">Email: ${teamMember.email}</li>
  <li class="list-group-item">Office#: ${teamMember.officeNumber}</li>
</ul>
</div>
`;
}
const engineerCard = (teamMember) => {
    return `<div class="card" style="width: 18rem;">
<div class="card-header">
    <h3><i class="bi bi-wrench-adjustable-circle-fill"></i> Engineer</h3>
    <h5>${teamMember.name}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${teamMember.id}</li>
  <li class="list-group-item">Email: ${teamMember.email}</li>
  <li class="list-group-item">Github Username: ${teamMember.gitHub}</li>
</ul>
</div>
`;
}
const internCard = (teamMember) => {
    return `<div class="card" style="width: 18rem;">
<div class="card-header">
    <h3><i class="bi bi-mortarboard-fill"></i> Intern</h3>
    <h5>${teamMember.name}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${teamMember.id}</li>
  <li class="list-group-item">Email: ${teamMember.email}</li>
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
        <main class="container d-inline-flex">
            ${buildTeam}       
        </main>  
    </body>
    </html>`;
}
//inquirer questions for manager
managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Enter name:",
            name: 'name',
            //validate: (answer) => {answer ? true : console.log("Enter a name"), false},
        },
        {
            type: 'number',
            message: "Enter employee identification number:",
            name: 'id',
            //validate: idInput => { idInput ? true : console.log("Enter an id number"), false || typeof idInput === 'number' ? true : console.log("id must be a number"), false }
        },
        {
            type: 'input',
            message: "Enter email address:",
            name: 'email',
            //validate: emailInput => { emailInput ? true : console.log("Enter an email address"), false || emailInput === 'anystring@anystring.anystring' ? true : console.log("Enter a valid email address"), false }
        },
        {
            type: 'input',
            message: "Enter the manager's office number:",
            name: 'office',
            //validate: officeInput => { officeInput ? true : console.log("Enter an office number"), false || typeof officeInput === 'number' ? true : console.log("Office number must be an interger"), false }
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
            message: "Enter name:",
            name: 'name',
            //validate: nameInput => { nameInput ? true : console.log("Enter a name"), false }
        },
        {
            type: 'number',
            message: "Enter employee identification number:",
            name: 'id',
            //validate: idInput => { idInput ? true : console.log("Enter an id number"), false || typeof idInput === 'number' ? true : console.log("id must be a number"), false }
        },
        {
            type: 'input',
            message: "Enter email address:",
            name: 'email',
            //validate: emailInput => { emailInput ? true : console.log("Enter an email address"), false || emailInput === 'anystring@anystring.anystring' ? true : console.log("Enter a valid email address"), false }
        },
        {
            type: 'input',
            message: "Enter the engineer's GitHub username:",
            name: 'username',
            //validate: userNameInput => { userNameInput ? true : console.log("Enter a GitHub username"), false }
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
            message: "Enter intern's name:",
            name: 'name',
            //validate: nameInput => { nameInput ? true : console.log("Enter a name"), false }
        },
        {
            type: 'number',
            message: "Enter intern's identification number:",
            name: 'id',
            //validate: idInput => { idInput ? true : console.log("Enter an id number"), false || typeof idInput === 'number' ? true : console.log("id must be a number"), false }
        },
        {
            type: 'input',
            message: "Enter intern's email address:",
            name: 'email',
            //validate: emailInput => { emailInput ? true : console.log("Enter an email address"), false || emailInput === 'anystring@anystring.anystring' ? true : console.log("Enter a valid email address"), false }
        },
        {
            type: 'input',
            message: "Enter the intern's school:",
            name: 'school',
            //validate: schoolInput => { schoolInput ? true : console.log("Enter a school name"), false }
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
}
//Create a function to initialize app
function init() {
    writeToFile('index.html');
};
//Function call to initialize app

managerQuestions();
