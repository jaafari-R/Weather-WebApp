const CityWeatherModel = require("../db/schemas/cityWeather");
const WeatherApiManager = require("../externalApis/weatherApi/weatherApiManager");
const CityWeather = require("./weather");

class WeatherModel {
    static async getCityWeather(cityName) {
        const cityWeather = await WeatherApiManager.getWeatherByCityName(cityName)
        return new CityWeather(cityWeather);
    }

    static saveCityWeather({name, tempreture, condition, conditionIcon}) {
        return CityWeatherModel.create({name, tempreture, condition, conditionIcon});
    }

    static getSavedCityWeathers() {
        return CityWeatherModel.find({});
    }

    static deleteSavedCityWeather(name) {
        return CityWeatherModel.deleteOne({name});
    }
}

module.exports = WeatherModel;