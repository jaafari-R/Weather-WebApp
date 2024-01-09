require("dotenv").config();

class Config {
    static DB_URL = process.env.DB_URL 
        || "mongodb://127.0.0.1/weather-db";
    static SERVER_PORT = process.env.SERVER_PORT
        || 3000;
    static WEATHER_API_URL = process.env.WEATHER_API_URL
        || "https://api.openweathermap.org/data/2.5/weather";
    static WEATHER_API_ICON_URL = process.env.WEATHER_API_ICON_URL
        || "https://openweathermap.org/img/wn/";
    static WEATHER_API_KEY = process.env.WEATHER_API_KEY
        || "";
}

module.exports = Config;