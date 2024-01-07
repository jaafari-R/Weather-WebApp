class Config {
    static DB_URL = process.env.DB_URL 
        || "mongodb://127.0.0.1/weather-db";
    static SERVER_PORT = process.env.SERVER_PORT
        || 3000;
}

module.exports = Config;