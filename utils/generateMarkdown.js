// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    badgeLink = `https://img.shields.io/badge/MIT%20License-purple`;
  } else if (license==="Eclipse Public License 2.0") {
      badgeLink = 'https://img.shields.io/badge/Eclipse%20Public%20License%202.0-purple';
  } else if (license==="Mozilla Public License 2.0") {
        badgeLink = 'https://img.shields.io/badge/Mozilla%20Public%20License%202.0-purple';
  } else {
    return '';
  }
  return `![License](${badgeLink})`;
}



  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  { else if license 
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{ if (license === "MIT") {
  licenseLink = `https://opensource.org/licenses/MIT`;
} else if (license==="Eclipse Public License 2.0") {
  licenseLink = `https://www.eclipse.org/legal/epl-2.0/`;
} else if (license==="Mozilla Public License 2.0") {
  licenseLink = `https://www.mozilla.org/en-US/MPL/2.0/`;
} else {
  return ``;
}
return `See the [full license](${licenseLink}) for more information.`;
  
}

//   [![License:MIT]
// ([![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

)}




}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return(license) ? `License` : '';

}


// TODO: Create a function to generate markdown for README
function generateMarkdown({projectTitle, description, installation, usageInfo, contributionGuidelines, test, license, github, email, attachmentName}) {
  return `# ${projectTitle}
${renderLicenseBadge(license)}
   
  ##Description

${description}


  ## Table of Contents

  [Title](#title)
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License]($license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)



  ##Installation

  ${installation}


  ${license}

  ##Usage Information

  ${usage.Info}
  
  #How to Contribute 

  ${contribution.Guidelines}

  ##Tests

  ${test}



github.com/${data.Github}

`;
}

export default generateMarkdown;
