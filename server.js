// Set up express server
const express = require("express");
const app = express();
app.use(express.json());

// Pull in schema
const addressBook = require("./persist/address");

// Pull in helper
const helpers = require("./helper");

// Stub out the methods
// get address book by id
app.get("/addressbook/:id", (req, res) => {
    addressBook.findById(req.params.id).then((addressBook) => {
        if (addressBook == null) {
            res.status(404).json({"message": "not found"});
            return;
        }
        res.json(addressBook);
    });
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
    const validatedAddressBook = helpers.setupAddressBook(req.body);
    addressBook.findByIdAndUpdate(req.params.id, validatedAddressBook, {returnDocument: "after"}).then((addressBook) => {
        if (addressBook == null) {
            res.status(404).json({"message": "not found"});
            return;
        }
        res.json(addressBook);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// patch address book
app.patch("/addressbook/:id", (req, res) => {
    addressBook.findByIdAndUpdate(req.params.id, req.body, {returnDocument: "after"}).then((addressBook) => {
        if (addressBook == null) {
            res.status(404).json({"message": "not found"});
            return;
        }
        res.json(addressBook);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// delete address book
app.delete("/addressbook/:id", (req, res) => {
    addressBook.findByIdAndDelete(req.params.id).then((addressBook) => {
        if (addressBook == null) {
            res.status(404).json({"message": "not found"});
            return;
        }
        res.json(addressBook);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = app;