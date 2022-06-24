// Create address book schema
const mongoose = require('mongoose');

// Set up address book schema
const addressBookSchema =  mongoose.Schema({
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    email: {type: String, default: ""},
    phoneNumber: {type: String, default: ""},
    address: {type: String, default: ""},
});

const addressBook = mongoose.model("AddressBook", addressBookSchema);

module.exports = addressBook;