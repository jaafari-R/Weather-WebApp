class WeatherManager {
    constructor() {
        this.cityWeathers = [];
    }
    
    async init() {
        this.cityWeathers = await WeatherApiManager.getSavedCityWeathers();
        console.log(this.cityWeathers)
    }

    async getCityWeather(cityName) {
        if(this.cityWeathers.find(cw => cw.name.toLowerCase() === cityName.toLowerCase())) {
            return;
        }
        
        const cityWeather = await WeatherApiManager.getCityWeather(cityName);
        this.cityWeathers.push(cityWeather);
        console.log(this.cityWeathers);
        return cityWeather;
    }

    async saveCityWeather(cityName) {
        const cityWeather = this.cityWeathers.find(cw => cw.name === cityName);
        const savedCityWeather = await WeatherApiManager.saveCityWeather(cityWeather);
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