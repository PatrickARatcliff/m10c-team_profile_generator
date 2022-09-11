const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//initialize team member array
let team = [];
//create html cards for different sub-classes of employees
const managerCard = (teamMember) => { return `<div class="card" style="width: 18rem;">
<div class="card-header">
    <h3><i class="bi bi-cup-hot-fill"></i> Manager</h3>
    <h5>${teamMember.name}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID#: ${teamMember.id}</li>
  <li class="list-group-item">Email: ${teamMember.email}</li>
  <li class="list-group-item">Office#: ${teamMember.office}</li>
</ul>
</div>
`; }
const engineerCard = (teamMember) => { return `<div class="card" style="width: 18rem;">
<div class="card-header">
    <h3><i class="bi bi-wrench-adjustable-circle-fill"></i> Engineer</h3>
    <h5>${teamMember.name}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${teamMember.id}</li>
  <li class="list-group-item">Email: ${teamMember.email}</li>
  <li class="list-group-item">Github Username: ${teamMember.username}</li>
</ul>
</div>
`; }
const internCard = (teamMember) => { return`<div class="card" style="width: 18rem;">
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
`; }
//create template literal html code based on members in team array
generateTeamPageHtml = (team) => {
    let buildTeam;
    let teamHtml = buildTeam.join('');
    for (let i = 0; i < team.length; i++) {
        const member = team[i];
        member.getRole() === "manager" ? buildTeam.push(managerCard(member)) :
            member.getRole() === "engineer" ? buildTeam.push(engineerCard(member)) :
                member.getRole() === "intern" ? buildTeam.push(internCard(member)) : console.log("No team members");
    }
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
        <main class="container">
            ${teamHtml}
        </main>
        
    </body>
    </html>`;
}
//creat question wwith otions to create additional team members or finish page
const choiceQuestion = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do next?",
            name: 'choice',
            choices: ["Add an Engineer", "Add an Intern", "Finish building team"],
        }
    ])
        .then(choice => {
            switch (choice) {
                case "Add an Engineer":
                    //inquirer questions for engineer
                    Engineer.engineerQuestions();
                    //push new engineer to team array
                    team.push(engineer);
                     //loop back through options
                    choiceQuestion();
                    break;
                case "Add an Intern":
                    //inquirer questions for intern
                    Intern.internQuestions();
                    //push new intern to team array
                    team.push(intern);
                    //loop back through options
                    choiceQuestion();
                    break;
                default:
                    //create html for team page
                    generateTeamPageHtml();
                    break;
            }
        });
}
//Create a function to write html file
function writeToFile(fileName) {

    Manager.managerQuestions();
    //push new manager to team array
    team.push(manager);
    //inquirer to create new team members
    choiceQuestion();
    //function using file system to write html file
    fs.writeFile(fileName, generateTeamPageHtml(), (err) =>
        err ? console.error(err) : console.log('An HTML file has been created for your project!')
    )
}
//Create a function to initialize app
function init() {
    writeToFile('index.html');
};
//Function call to initialize app
init();
