class WeatherManager {
    constructor() {
        this.cityWeathers = [];
    }
    
    async init() {
        this.cityWeathers = await WeatherApiManager.getSavedCityWeathers();
    }

    async getCityWeather(cityName) {
        if(this.cityWeathers.find(cw => cw.name.toLowerCase() === cityName.toLowerCase())) {
            return;
        }

        const cityWeather = await WeatherApiManager.getCityWeather(cityName);
        this.cityWeathers.push(cityWeather);
        return cityWeather;
    }

    async saveCityWeather(cityName) {
        const cityWeather = this.cityWeathers.find(cw => cw.name === cityName);
        const savedCityWeather = await WeatherApiManager.saveCityWeather(cityWeather);
        return savedCityWeather;
    }

    async unsaveCityWeather(cityName) {
        const cityWeatherIdx = this.cityWeathers.findIndex(cw => cw.name === cityName);
        if(cityWeatherIdx > -1) {
            await WeatherApiManager.deleteCityWeather(cityName);
        }
    }

    async removeCityWeather(cityName) {
        const cityWeatherIdx = this.cityWeathers.findIndex(cw => cw.name === cityName);
        if(cityWeatherIdx === -1)
            return;
        this.cityWeathers.splice(cityWeatherIdx, 1); 
        // TODO add delete if saved in db
    }
}