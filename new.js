const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
  command: "year",
  describe: "[delete a contact.]",
  handler(args) {
    console.log(chalk.green.bold("Happy New Year!"));
  },
});

yargs.parse();
