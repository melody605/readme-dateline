// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  { else if license 
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{ if (license === "MIT") {

  return`## `
  [![License:MIT]
([![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

)}




}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license==="none"){
  return"";

}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ${data.description}

  [Title](#title)
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License]($license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)


${data.installation}

${data.license}

${data.contributing}

${data.test}

${data.email}

github.com/${data.Github}

`;
}

export default generateMarkdown;
