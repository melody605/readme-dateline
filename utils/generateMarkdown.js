// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLink;
  if (license === "MIT License") {
    badgeLink = `https://img.shields.io/badge/MIT%20License-purple`;
  } else if (license === "Eclipse Public License 2.0") {
    badgeLink = 'https://img.shields.io/badge/Eclipse%20Public%20License%202.0-purple';
  } else if (license === "Mozilla Public License 2.0") {
    badgeLink = 'https://img.shields.io/badge/Mozilla%20Public%20License%202.0-purple';
  } else {
    return '';
  }
  return `![License](${badgeLink})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license === "MIT License") {
    licenseLink = `https://opensource.org/licenses/MIT`;
  } else if (license === "Eclipse Public License 2.0") {
    licenseLink = `https://www.eclipse.org/legal/epl-2.0/`;
  } else if (license === "Mozilla Public License 2.0") {
    licenseLink = `https://www.mozilla.org/en-US/MPL/2.0/`;
  } else {
    return '';
  }
  return `See the [full license](${licenseLink}) for more information.`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `## License` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usageInfo, contributing, test, license, github, email }) {
  return `# ${title}
${renderLicenseBadge(license)}



## Description

${description}

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage Information

${usageInfo}

##Video Demo

[![Video Demo](assets/videodemo/${attachmentName})

## How to Contribute

${contributing}

## Tests

${test}

${renderLicenseSection(license)}
This application is covered under ${license}.
${renderLicenseLink(license)}

## Contact

Reach out to me with any additional questions or concerns!
Message me on either GitHub at [${github}](https://github.com/${github}) or via email at ${email}.
`;
}

export default generateMarkdown;
