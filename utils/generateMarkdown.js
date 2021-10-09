// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Choices: "None", "MIT", "ISC", "Apache License 2.0", "Boost Software License 1.0"
function renderLicenseBadge(license) {
  switch (license) {
      case 'None':
        return " ";

      case 'MIT':
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      
      case 'ISC':
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";

      case 'Apache License 2.0':
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";

      case 'Boost Software License 1.0':
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
 
  }
}


// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

switch (license) {
  case 'None':
    return " ";

  case 'MIT':
    return "(https://opensource.org/licenses/MIT)";
  
  case 'ISC':
    return "(https://opensource.org/licenses/ISC)";

  case 'Apache License 2.0':
    return "(https://opensource.org/licenses/Apache-2.0)";

  case 'Boost Software License 1.0':
    return "(https://www.boost.org/LICENSE_1_0.txt)";
}
}
// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
switch (license) {
  case 'None':
    return " ";

  case 'MIT':
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  
  case 'ISC':
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

  case 'Apache License 2.0':
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

  case 'Boost Software License 1.0':
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Github URL
[${data.github}] (https://github.com/${data.github}/)

## Description

${data.description}

##Table of Contents

* [Installation](#dependencies)

* [Usage](#usage)

* [License](#license)

* [Contributors](#contributor)

* [Test](#test)

* [Questions](#questions)


## Instillation or Dependencies

${data.dependencies}

## Usage

${data.usage}

## Contributors

${data.contributor}

## License

The License for this project is covered under ${renderLicenseSection(data.license)}

## Contributors

${data.contributor}


## Test

${data.test}

## Questions

For any comments or questions, you can contact me on Github through the link above or my email: ${data.email}  


`;
}

module.exports = generateMarkdown;
