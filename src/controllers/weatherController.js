const WeatherModel = require("../model/weatherModel");
const errorHandler = require("../errors/errorHandler")

class WeatherController {
    static async getWeatherByCityName(req, res) {
        try {
            const cityName = req.params.cityName;
            const cityWeather = await WeatherModel.getCityWeather(cityName);
            res.send(cityWeather);
        }
        catch(error) {
            errorHandler.handle(res, error);
        }
    }

    static async getAllSavedCityWeathers(req, res) {
        try {
            const cityWeathers = await WeatherModel.getSavedCityWeathers();
            res.send(cityWeathers);
        }
        catch(error) {
            errorHandler.handle(res, error);
        }
    }

    static async saveCityWeather(req, res) {
        try {
            const cityWeather = req.body;
            const newCityWeather = await WeatherModel.saveCityWeather(cityWeather);
            res.send(newCityWeather)
        }
        catch(error) {
            errorHandler.handle(res, error);
        }
    }

    static async deleteCityWeather(req, res) {
        try {
            const cityName = req.params.cityName;
            await WeatherModel.deleteSavedCityWeather(cityName);
            res.sendStatus(204);
        }
        catch(error) {
            errorHandler.handle(res, error);
        }
    }
}

module.exports = WeatherController;