const inquirer = require('inquirer');
const fs = require("fs");






inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project: "
    },
    {
      type: "input",
      name: "sitelink",
      message: "Please post the link the Deployed Application ",
    },
    {
      type: "input",
      name: "behavior",
      message: "What is this Expected Behavior of the Application"
    },
    {
      type: "input",
      name: "install",
      message: "What is the installation for the Application?"
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
      ]
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this projects?"
    },
    {
      type: "input",
      name: "bugs",
      message: "Are there any known bugs?"
    },
    {
      type: "input",
      name: "repolink",
      message: "Please post the Application's GitHub repo link"
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: "
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: "
    }
  ])

  .then((data) => {
    const filename = `./output/README.md`;
    var badge = ''
    if (data.license == "Apache") {
      badge = 'apache licence link'
    }


    var string = `# ${data.projectTitle}

  ## Table of Contents
    
  ❤ [Description](#Description)
    
  ❤ [Installation](#install)
    
  ❤ [Usage](#usage)
    
  ❤ [License](#license)
    
  ❤ [Contributers](#contributors)
    
  ## Description
    
  ### ${data.description}
    
  ## Install
    
  ### ${data.install}
    
  ## Usage
    
  ## license
    ${badge}
  ## contributors
    `

    fs.writeFile(filename, string, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });