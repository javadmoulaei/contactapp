const yargs = require("yargs");

const { create, find, remove } = require("./contacts");

yargs.scriptName("Contacts Manager");
yargs.version("1.0.0");
yargs.command({
  command: "create",
  describe: "[create new contact]",
  builder: {
    fullname: {
      alias: "f",
      describe: "person fullname",
      demandOption: true,
      type: "string",
    },
    phone: {
      alias: "p",
      describe: "Person phone number",
      demandOption: true,
      type: "number",
    },
    email: {
      alias: "e",
      describe: "Person email address",
      demandOption: true,
      type: "string",
    },
  },
  handler(args) {
    create(args);
  },
});

yargs.command({
  command: "list",
  describe: "[listing the contacts]",
  handler() {
    console.table(find());
  },
});

yargs.command({
  command: "delete",
  describe: "[delete a contact.]",
  builder: {
    id: {
      describe: "person's id",
      demandOption: true,
      type: "number",
    },
  },
  handler(args) {
    remove(args.id);
  },
});
yargs.parse();
