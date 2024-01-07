const { default: axios } = require("axios");
const { WEATHER_API_URL, WEATHER_API_KEY } = require("../../config");

class WeatherApiManager {
    static async getWeatherByCityName(cityName) {
        return axios.get(`${WEATHER_API_URL}?appid=${WEATHER_API_KEY}&q=${cityName}&units=metric`)
        .then(response => response.data)
    }
}

module.exports = WeatherApiManager;