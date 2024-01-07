class WeatherApiManager {
    static getCityWeather(cityName) {
        return $.get("/weather/" + cityName);
    }

    static getSavedCityWeathers() {
        return $.get("/weather/");
    }

    static saveCityWeather(cityWeather) {
        return $.post("/weather", cityWeather);
    }

    static deleteCityWeather() {
        return $.ajax({
            url: "/weather",
            type: "DELETE"
        })
    }
}