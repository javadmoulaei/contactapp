const fs = require("fs");
// const { Chalk } = require("chalk");

const create = ({ fullname, phone, email }) => {
  try {
    const contacts = find();
    const checkContact = contacts.find(
      (contact) => contact.email == email || contact.phone == phone
    );

    if (checkContact)
      return console.log(
        checkContact.phone == phone
          ? "phone is already taken"
          : "email is already taken"
      );
    contacts.push({
      id: contacts.length == 0 ? 1 : contacts[contacts.length - 1].id + 1,
      fullname,
      phone,
      email,
    });
    fs.writeFileSync("contacts.json", JSON.stringify(contacts));
    console.log("Contact Saved!");
  } catch (error) {
    console.log(error);
  }
};
const find = () => {
  try {
    return JSON.parse(fs.readFileSync("contacts.json").toString());
  } catch (error) {
    console.log(error);
    return [];
  }
};

const remove = (id) => {
  try {
    const contacts = find();

    const checkContact = contacts.find((contact) => contact.id == id);

    if (!checkContact) return console.log("Contact Not Found!!!");

    const filterContacts = contacts.filter((contact) => contact.id != id);
    fs.writeFileSync("contacts.json", JSON.stringify(filterContacts));
    console.log("Contact Deleted!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  create,
  find,
  remove,
};
