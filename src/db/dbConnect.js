const mongoose = require("mongoose");
const config =  require("../config")

function connectMongoDb() {
    return mongoose.connect(config.DB_URL);
}

module.exports = {
    connectDB: connectMongoDb
};
