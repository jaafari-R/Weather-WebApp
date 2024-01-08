const mongoose = require("mongoose");
const config =  require("../config")

function connectMongoDB() {
    return mongoose.connect(config.DB_URL);
}

function disconnectMongoDB() {
    return mongoose.connection.close();
}

module.exports = {
    connectDB: connectMongoDB,
    disconnectDB: disconnectMongoDB
};
