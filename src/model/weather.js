const { WEATHER_API_ICON_URL } = require("../config");

class CityWeather {
    constructor(weather) {
        this.name = weather.name;
        this.tempreture = weather.main.temp;
        this.condition = weather.weather[0].main;
        this.conditionIcon = `${WEATHER_API_ICON_URL}${weather.weather[0].icon}@2x.png`;
    }
}

module.exports = CityWeather;