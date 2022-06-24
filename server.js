// Set up express server
const express = require("express");
const app = express();

// Stub out the methods
// get address book by id
app.get("/addressbook/:id", (req, res) => {
    res.send("get address book by id");
});

// get all address books
app.get("/addressbooks", (req, res) => {
    res.send("get all address books");
});

// create address book
app.post("/addressbook", (req, res) => {
    res.send("create address book");
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