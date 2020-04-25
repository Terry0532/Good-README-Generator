function generateMarkdown(data) {

  //get the according license link from user's choice
  let license;
  switch (data.license) {
    case "GNU AGPLv3":
      license = "https://choosealicense.com/licenses/agpl-3.0/#";
      break;
    case "GNU GPLv3":
      license = "https://choosealicense.com/licenses/gpl-3.0/";
      break;
    case "GNU LGPLv3":
      license = "https://choosealicense.com/licenses/lgpl-3.0/";
      break;
    case "Mozilla Public License 2.0":
      license = "https://choosealicense.com/licenses/mpl-2.0/";
      break;
    case "Apache License 2.0":
      license = "https://choosealicense.com/licenses/apache-2.0/";
      break;
    case "MIT License":
      license = "https://choosealicense.com/licenses/mit/";
      break;
    case "Boost Software License 1.0":
      license = "https://choosealicense.com/licenses/bsl-1.0/";
      break;
    case "The Unlicense":
      license = "https://choosealicense.com/licenses/unlicense/";
  }

  return `# ${data.projectName}
${data.projectDescription}

- [Setup](#setup)
- [Credit](#credit)
- [Features](#features)
- [Link](#link)
- [License](#license)

## Setup
${data.projectInstallation}

## Credit
${data.credit}

## Features
${data.features}

## Link
[${data.projectName}](${data.githubLink})

## License
[${data.license}](${license})`;
}

module.exports = generateMarkdown;