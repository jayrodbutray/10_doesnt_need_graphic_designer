const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes.js');
const { error } = require('console');

/*inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want to create?',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter a color for your shape:',
    },
    {
      type: 'input',
      name: 'text',
      message: 'What three letters do you want for your logo?',
    },
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case "Triangle":
        shape = new Triangle(answers.color);
        break;
      case "Circle":
        shape = new Circle(answers.color);
        break;
      case "Square":
        shape = new Square(answers.color);
        break;
    }
  const svg = shape.render().replace('SVT_TEXT', answers.text);

  fs.writeFileSync('examples/logo.svg', svg);
  });
*/
inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "Which shape do you want to create?",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "color",
      message: "Enter a color for the shape:",
    },
    {
      type: "input",
      name: "text",
      message: "Enter three letters of text for your logo:",
    },
    {
      type: "input",
      name: "textColor",
      message: "What color would you like your text to be?",
    }
  ])
  .then((answers) => {
    const {shape, color, text, textColor}= answers;

    // Create the appropriate shape based on the user's choice
    let selectedShape;
    switch (shape) {
      case "Triangle":
        selectedShape = new Triangle(color, text, textColor);
        break;
      case "Circle":
        selectedShape = new Circle(color, text, textColor);
        break;
      case "Square":
        selectedShape = new Square(color, text, textColor);
        break;
    }

    selectedShape.setColor(color,textColor);
   
    // Generate the SVG string
    
    const svgShape = selectedShape.render();
    // Write the SVG string to a file
    fs.writeFileSync("examples/logo.svg", svgShape, (error) => {
      if(error){
        console.log(`Error writing to examples/logo.svg`, error);
      } else {
        console.log(`Generated examples/logo.svg`);
      }
    })

  });

