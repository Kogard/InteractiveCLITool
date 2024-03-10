#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu() {
  console.log("Welcome to Interactive CLI Tool");
  console.log("1. Option 1");
  console.log("2. Option 2");
  console.log("3. Option 3");
  console.log("4. Exit");
  rl.question("Please enter your choice: ", function(choice) {
    switch (choice.trim()) {
      case '1':
        console.log("You selected Option 1");
        // Perform action for Option 1
        break;
      case '2':
        console.log("You selected Option 2");
        // Perform action for Option 2
        break;
      case '3':
        console.log("You selected Option 3");
        // Perform action for Option 3
        break;
      case '4':
        console.log("Exiting...");
        rl.close();
        process.exit(0);
      default:
        console.log("Invalid choice. Please try again.");
    }
    displayMenu(); // Redisplay the menu after handling choice
  });
}

displayMenu(); // Start the interactive menu
