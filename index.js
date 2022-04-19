
const inquirer = require('inquirer');
const fs = require("fs");

inquirer
  .prompt([
    {
      type: 'input', //type of font
      message: 'What is your name?',
      name: 'username', //property on the result object
    },
    {
      type: 'input',
      message: 'What is your Location?',
      name: 'location', //property on the result object
    },
    {
      type: 'input',
      message: 'Tell me about yourself.',
      name: 'bio', //property on the result object
    },
    {
      type: 'list', //shows list of options
      message: 'Which acct would you like to share?',
      choices: ['Linkedin', 'Github', 'Facebook'],
      name: 'socialmedia',
    },
    {
      type: 'input', //type of font
      message: 'Paste your URL',
      name: 'URL', //property on the result object
    },
  ])

  .then((data) => {
    const filename = `${data.username.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });