#! /usr/bin/env node
import inquirer from "inquirer";

// let randomnum = Math.random();

const generatenum = Math.floor(Math.random() + 5 * 1);

const answer = await inquirer.prompt([
      {
        name: "guessnumber",
        type: "input",
        message: "guess number(limit from 1 to 5 )"
      }
]);
if (answer.guessnumber === generatenum) {
    console.log("Congrates! you guess a right number")
}
else{
    console.log("Wrong number")
}