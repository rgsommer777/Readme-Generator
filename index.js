// const { initDeflate } = require("pdfkit/js/reference")

// Pseudo
// 1. npm init (creates the package.JSON)
// 2. install inquire and PDFKit
// 3. create inquire routine to prompt user Input
// 4. take user input and write to a JSON object File (stringified)
// 5. create a switch case to insert a badge at top of the HTML and insert the licesnse condisions under license 
// 6. use template literals or declarations to create html file
// 7. convert index.html to pdf with pdfkit

const fs=require('fs');
const inquire=require('inquire');
const pdfkit=require('pdfkit');

// fs.readFile("./data.csv", "utf8", function (error,data){
//     if(error){
//         console.error(error);
//         return;
//     }
//     console.log(data);
// });

// fs.writeFile("log.txt", process.argv[2], function (err){
//     if(err) {
//         return console.log(err);
//     }
//     console.log("Success!");

// });
// fs.appendFile("log.txt", process.argv[2]+"\n", function (err){
//     if(err) {
//         return console.error(err);
//     }
//     console.log("Success!");

// });

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// // THEN this is displayed as the title of the README
// // WHEN I enter a description
// , installation instructions
// , usage information
// , contribution guidelines
// , and test instructions
// // THEN this information is added to the sections of the README entitled 
// Description, 
// Installation, 
// Usage, 
// Contributing, and 
// Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter your project name"
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description for your project"
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter any installation instructions for this project (write 'N/A' if no installation is required)"
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter instructions on how to use this application or project"
    },
    {
      type: "input",
      name: "contributing",
      message: "Please mention any other collaborators or developers who contributed to the project"
    },
    {
        type: "input",
        name: "tests",
        message: "Please describe any test instructions"
      },
    {
      type: "checkbox",
      message: "Please choose a license",
      name: "license",
      choices: [
        "Apache", 
        "GNU GPLv3.0", 
        "ISC", 
        "MIT"
      ]
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },

  ]);
//   Function to generate the ReadMe Markdown file
  function generateMd(resp) {
      return`
      # ${resp.title}

      ## Description ${resp.description}

      ## Table of Contents
      - [Description](#description)
      - [Installation](#installation)
      - [How to Use](#usage)
      - [Contributors](#contributing)
      - [Tests](#tests)
      - [License](#license)
      - [Questions](#license)




  `}
  

  fs.writeFile("log.txt", process.argv[2], function (err){
    if(err) {
        return console.log(err);
    }
    console.log("Success!");
});