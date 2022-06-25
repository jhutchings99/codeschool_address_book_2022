// Pull in server
const app = require("./server");

// Pull in config
const config = require("./config");

// Pull in db
const db = require("./persist/mongo");

// Start server
db.setUpConnectionHandlers(() => {
    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });
})
db.connect();