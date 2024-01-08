const WeatherModel = require("../model/weatherModel");

class WeatherController {
    static async getWeatherByCityName(req, res) {
        const cityName = req.params.cityName;
        const cityWeather = await WeatherModel.getCityWeather(cityName);
        res.send(cityWeather);
    }

    static async getAllSavedCityWeathers(req, res) {
        const cityWeathers = await WeatherModel.getSavedCityWeathers();
        res.send(cityWeathers);
    }

    static async saveCityWeather(req, res) {
        const cityWeather = req.body;
        const newCityWeather = await WeatherModel.saveCityWeather(cityWeather);
        res.send(newCityWeather)
    }

    static async deleteCityWeather(req, res) {
        const cityName = req.params.cityName;
        await WeatherModel.deleteSavedCityWeather(cityName);
        res.send(204);
    }
}

module.exports = WeatherController;