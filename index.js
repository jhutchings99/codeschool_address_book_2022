// Pull in server
const app = require("./server");

// Pull in config
const config = require("./config");

// Pull in db
const db = require("./persist/mongo");

// Pull in socket io
const socket = require("socket.io")

// Start server
db.setUpConnectionHandlers(() => {
    var server = app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });

    const io = socket(server);

    io.sockets.on("connection", (socket) => {
        console.log("New socket connection: " + socket.id);
    })
})
db.connect();