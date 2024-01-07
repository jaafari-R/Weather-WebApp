const mongoose = require("mongoose");
const config =  require("../configs")

function connectMongoDb() {
    return mongoose.connect(config.DB_URL);
}

module.exports = {
    connectDB: connectMongoDb
};