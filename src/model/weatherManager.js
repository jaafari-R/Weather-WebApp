const WeatherApiManager = require("../externalApis/weatherApi/weatherApiManager");
const CityWeather = require("./weather");

class WeatherModel {
    static async getCityWeather(cityName) {
        const cityWeather = await WeatherApiManager.getWeatherByCityName(cityName)
        return new CityWeather(cityWeather);
    }
}

module.exports = WeatherModel;