// Pull in mongoose
const mongoose = require("mongoose");

const db = mongoose.connection;

// Connect to mongoose
function connect() {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

// Set up connection handlers
function setUpConnectionHandlers(callback) {
    db.once("connecting", () => {
        console.log("Connecting to MongoDB");
    });

    db.once("connected", () => {
        console.log("Connected to MongoDB");
    });

    db.once("open", () => {
        console.log("Open Connection to MongoDB");
        callback();
    });

    db.once("error", () => {
        console.log("Error Connecting to MongoDB");
    });
}

module.exports = {
    connect,
    setUpConnectionHandlers,
}