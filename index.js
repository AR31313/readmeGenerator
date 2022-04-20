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
      type: "list",
      name: "install",
      message: "Is thes an installation process? ",
      choices: [
        "Yes",
        "No",
      ]
    },
    {
      type: "input",
      name: "installprocess",
      message: "What is the  for the Application?"
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
      name: "tablecontent",
      message: "what are the Table of Contents?"
    },
    {
      type: "input",
      name: "bugs",
      message: "Are there any known bugs?"
    },
    {
      type: "input",
      name: "repolink",
      message: "Please post the Application's GitHub repo link ?"
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
    const filename = `${data.username.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });