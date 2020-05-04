const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function generateMarkdown(data) {

  //get github link and avatar link
  const request = new XMLHttpRequest();
  let userLink, userAvaLink;
  request.open('GET', `https://api.github.com/users/${data.githubID}`, false);
  request.send(null);
  if (request.status === 200) {
    userLink = JSON.parse(request.responseText).url;
    userAvaLink = JSON.parse(request.responseText).avatar_url;
  }

  //get the according license link from user's choice and badge
  let license, badge;
  switch (data.license) {
    case "GNU AGPLv3":
      license = "https://choosealicense.com/licenses/agpl-3.0/#";
      badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU GPLv3":
      license = "https://choosealicense.com/licenses/gpl-3.0/";
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "GNU LGPLv3":
      license = "https://choosealicense.com/licenses/lgpl-3.0/";
      badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "Mozilla Public License 2.0":
      license = "https://choosealicense.com/licenses/mpl-2.0/";
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Apache License 2.0":
      license = "https://choosealicense.com/licenses/apache-2.0/";
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT License":
      license = "https://choosealicense.com/licenses/mit/";
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "The Unlicense":
      license = "https://choosealicense.com/licenses/unlicense/";
      badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }

  return `# ${data.projectName}
${data.projectDescription}

- [Setup](#setup)
- [Credit](#credit)
- [Features](#features)
- [Link](#link)
- [Author](#author)
- [License](#license)

## Setup
${data.projectInstallation}

## Credit
${data.credit}

## Features
${data.features}

## Link
[${data.projectName}](${data.githubLink})

## Author
[${data.githubID}](${userLink})

![image description](${userAvaLink})

## License
${badge}

[${data.license}](${license})`;
}

module.exports = generateMarkdown;