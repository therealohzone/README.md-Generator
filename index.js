//Include packages needed for this application
const fs = require ('fs');
 const inquirer = require ('inquirer')
 const generateMarkdown = require("./utils/generateMarkdown");
 const path = require('path')

 // Create an array of questions for user input
 const questions = [
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please write your Github username',
      },
      {
        type: "input",
        name: "contact",
        message: "Please type your email"
    },
      {
        type: 'list',
        name: 'license',
        message: 'Which license does your project use?',
        choices: ["None", "MIT", "ISC", "Apachye License 2.0", "Boost Software License 1.0"]
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'Does your Project require any dependencies to install?',
        default: "(For node.js) npm i"
      },
      {
        type: 'input',
        name: 'contributor',
        message: 'Please write the names of any Contributors to this Project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this Project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What commands are needed to run this Project?',
        default: "(For node.js) npm test"
      },
 ];

 // Create a function to write README file
 function writeToFile(fileName,data) {
     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
 }

 // Create a function to initialize app
 function init() {
     inquirer.prompt(questions).then((answers) => {
         writeToFile('./utils/README.md', generateMarkdown({...answers}));
     })
 }

 // Function call to initialize app
init();

