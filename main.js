#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//using object to store sentences which will be input by the user with the help inquirer.prompt
const counter = await inquirer.prompt({
    name: "sentance",
    type: "input",
    message: chalk.cyanBright("Please enter a sentence for which you would like to know the word count:"),
});
//using trim() for removing whitespaces 
//spilt(" ") is using to store your sentance words with sequence in array
const words = counter.sentance.trim().split(" ");
// print the words variable which will be seprately put your entered sentance in the form of words without whitespaces
console.log(words);
//print the length of the words of your entered sentance 
console.log(chalk.magentaBright(`your sentence word count is: ${words.length}`));
