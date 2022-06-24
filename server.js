// Set up express server
const express = require("express");
const app = express();

// Pull in schema
const addressBook = require("./persist/address");

// Pull in helper
const helpers = require("./helper");

// Stub out the methods
// get address book by id
app.get("/addressbook/:id", (req, res) => {
    res.send("get address book by id");
});

// get all address books
app.get("/addressbooks", (req, res) => {
    addressBook.find().then((addressBook) => {
        res.json(addressBook);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// create address book
app.post("/addressbook", (req, res) => {
    const validatedAddressBook = helpers.setupAddressBook(req.body);
    addressBook.create(validatedAddressBook).then((addressBook) => {
        res.json(addressBook);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// update address book
app.put("/addressbook/:id", (req, res) => {
    res.send("update address book");
});

// delete address book
app.delete("/addressbook/:id", (req, res) => {
    res.send("delete address book");
});

module.exports = app;