import { Command } from "commander";
import fs from "fs";

const program = new Command();

program.name("counter").description("CLI to do file based tasks").version("0.8.0");

program
  .command("count")
  .description("Count words")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, 'utf-8' , (error, data) => {
      if (error) {
        return console.log(error);
      }

      const count = data.split(" ").length;
      console.log(`ther is ${count} words in this ${file} file`);
    });
  });


