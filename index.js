const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({username, stack, location, linkedin, github}) =>
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Comparitable" content="ie=edge">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
            <title>Portfolio</title>
            
        </head>
        <body>
            <header class="p-5 mb-4 header bg-light">
                <div class="container">
                    <h1 class="display-4">Hi! My name is ${username}</h1>
                    <p class="lead">I am from ${location}.</p>
                    <h3><span class="badge-bd-secondary">Contact Me</span></h3>
                    <ul class="list-group">
                        <li class="list-group-item">GitHub username: ${github}</li>
                        <li class="list-group-item">LinkedIn username: ${linkedin}</li>
                    </ul>
                    <h3><span class="badge-bd-secondary">Languages Known</span></h3>
                    <ul class="list-group">
                        <li class="list-group-item">${stack[1]}</li>
                        <li class="list-group-item">${stack[2]}</li>
                        <li class="list-group-item">${stack[3]}</li>
                        <li class="list-group-item">${stack[4]}</li>  
                    </ul>
                </div>
            </header>
        </body>
    </html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your LinkedIn username?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])

  .then((answers) => {
    const filename = `${answers.username.toLowerCase().split('').join('')}.html`;

    const htmlPageContent = generateHTML(answers);

    fs.writeFile(filename, htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created Portfolio!')
    );
  });
