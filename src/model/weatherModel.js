const CityWeatherModel = require("../db/schemas/cityWeather");
const { CITY_DOES_NOT_EXIST_ERR, CITY_WEATHER_ALREADY_EXISTS_ERR, NO_WEATHERS_EXISTS_ERR } = require("../errors/weatherErrors");
const WeatherApiManager = require("../externalApis/weatherApi/weatherApiManager");
const CityWeather = require("./weather");

class WeatherModel {
    static async getCityWeather(cityName) {
        try {
            const cityWeather = await WeatherApiManager.getWeatherByCityName(cityName);
            return new CityWeather(cityWeather);
        }
        catch(error) {
            console.log(error);
            throw new CITY_DOES_NOT_EXIST_ERR();
        }
    }

    static async saveCityWeather({name, tempreture, condition, conditionIcon}) {
        try {
            return await CityWeatherModel.create({name, tempreture, condition, conditionIcon})
        }
        catch(error) {
            throw new CITY_WEATHER_ALREADY_EXISTS_ERR();
        };
    }

    static async getSavedCityWeathers() {
        const cityWeather = await CityWeatherModel.find({});
        if(!cityWeather.length) {
            throw new NO_WEATHERS_EXISTS_ERR(); 
        }
        return cityWeather;
    }

    static async deleteSavedCityWeather(name) {
        const result = await CityWeatherModel.deleteOne({name});
        if(result.deletedCount === 0) {
            throw new CITY_DOES_NOT_EXIST_ERR();
        }
        return result;
    }
}

module.exports = WeatherModel;