 const fs = require ('fs');
 const inquirer = require ('inquirer')
 const util = require ('util')
 const generateMarkdown = require(".utils/generateMarkdown");

 const promptUser = [
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of your Project?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please write your Githubusername',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license does your project use?',
        choices: ["None", "MIT", "ISC", "Academic Free License v3.0", "Apace license 2.0", "Boost Software License 1.0"]
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'Does your Project require any dependencies to install?',
        default: "npm i"
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
        message: 'Please write your Githubusername',
        default: "npm test"
      },
 ];

 function writeToFile(fileName,data) {
     return fs.writeFileSync(path.join(process.cwd(),fileName),data)
 }

 function init () {
     inquirer.prompt(promptUser).then((answers) => {
         writeToFile('README.md', generateMarkdown(answers))
     })
 }

init();

      //THEN a high-quality, professional README.md is generated with the title of my project and 
      //sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, 
      //Tests, and Questions