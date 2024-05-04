#! /usr/bin/env node
// Importing inquirer and chalk packages.
import inquirer from "inquirer";
import chalk from "chalk";
// Displaying a colorful welcome message.
console.log(chalk.bold.cyanBright("\n \t\t Code with Nida - Word Counter"));
console.log(chalk.green("=".repeat(60)));
// Prompt the user to enter a sentence.
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blueBright.underline("Enter a sentence"),
    }
]);
// Trimming the sentence and splitting it into words based on "spaces".
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence.
console.log(chalk.green("=".repeat(60)));
console.log(chalk.bold.blueBright("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log(chalk.green("=".repeat(60)));
