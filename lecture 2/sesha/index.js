#!/usr/bin/env node


// console.log("hello world");
// console.log(process.argv);
import { Command } from "commander";
import fs from "fs";
import inquirer from 'inquirer';
// import { questions } from "./questions";
const program = new Command();

const questions = [
    {
        type: "input",
        name: "name",
        message: "what's your favorite programming language?"
    },
    {
        type: "number",
        name: "price",
        message: "how much this course"
    },
]

program
    .name("sesha")
    .description("CLI to some JavaScript string utilities")
    .version("1.0.0");


program
    .command("add")
    .alias("a")
    .description("add a course")
    // .argument("<name>", "add course title")
    // .option("--price <price>", "add course price")
    .action(() => {
        inquirer
            .prompt(questions)
            .then((answers) => {
                // Use user f eedback for... whatever!!
                const { name, price } = answers

                if (name && price) {
                    fs.readFile('./courses.json', "utf8", (err, data) => {
                        if (err) {
                            fs.writeFile('./courses.json', JSON.stringify([answers]), 'utf8', (err) => {
                                if (err) {
                                    console.log('error is', err);
                                } else {
                                    console.log("done");
                                }
                            })
                        } else {
                            // console.log(JSON.parse(data));
                            const newData = JSON.parse(data)
                            newData.push({
                                name: name,
                                price: price
                            })
                            fs.writeFile('./courses.json', JSON.stringify(newData), 'utf8', (err) => {
                                if (err) {
                                    console.log('error is', err);
                                } else {
                                    console.log("done");
                                }
                            })
                        }
                    })
                } else {
                    console.error("name and price is unavailable");
                }


            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            });
    })

program.parse(process.argv);
