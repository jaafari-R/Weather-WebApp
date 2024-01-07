class WeatherManager {
    constructor() {
        this.cityWeathers = [];
        this.init();
    }
    
    async init() {
        this.cityWeathers = await WeatherApiManager.getSavedCityWeathers();
    }

    async getCityWeather(cityName) {
        const cityWeather = await WeatherApiManager.getCityWeather(cityName);
        this.cityWeathers.push(cityWeather);
        return cityWeather;
    }

    async saveCityWeather(name, tempreture, condition, conditionIcon) {
        const savedCityWeather = await WeatherApiManager.saveCityWeather({name, tempreture, condition, conditionIcon});
        return savedCityWeather;
    }

    async deleteCityWeather(name) {
        const cityWeatherIdx = this.cityWeathers.findIndex(cw => cw.name === name);
        if(cityWeatherIdx > -1) {
            await WeatherApiManager.deleteCityWeather(name);
            this.cityWeathers.splice(cityWeatherIdx, 1);
        }
    }
}