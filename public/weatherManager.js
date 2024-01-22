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

    async deleteCityWeather(cityName) {
        const cityWeatherIdx = this.cityWeathers.findIndex(cw => cw.name === cityName);
        if(cityWeatherIdx > -1) {
            await WeatherApiManager.deleteCityWeather(cityName);
            this.cityWeathers.splice(cityWeatherIdx, 1);
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