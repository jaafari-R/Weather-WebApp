class WeatherController {
    constructor() {
        this.weatherManager = new WeatherManager();
        this.renderer = new Renderer();
        this.init();
    }

    async init() {
        this.setUpEventListeners();

        await this.weatherManager.init();
        this.weatherManager.cityWeathers.forEach(cityWeather => {
            this.renderer.addCityWeather(cityWeather);
        })
    }

    async getCityWeather(cityName) {
        const cityWeather = await this.weatherManager.getCityWeather(cityName);
        if(cityWeather) {
            this.renderer.addCityWeather(cityWeather);
        }
    }

    async saveCityWeather(cityName) {
        try {
            this.weatherManager.saveCityWeather(cityName);
        }
        catch(err) {
            console.log(err);
        }
    }

    async unsaveCityWeather(cityName) {
        try {
            this.weatherManager.deleteCityWeather(cityName);
        }
        catch(err) {
            console.log(err);
        }
    }

    setUpEventListeners() {
        const controller = this;
        const getCityWeatherButton = $(HTML_SELECTORS.GET_CITY_WEATHER_BUTTON_SELECTOR);
        const getCityWeatherInput = $(HTML_SELECTORS.GET_CITY_WEATHER_INPUT_SELECTOR);
        const cityWeathers = $(HTML_SELECTORS.CITY_WEATHER_CONTAINER_SELECTOR);

        // disable form submition
        $("form").on('submit', function() {return false})

        getCityWeatherButton.click(function() {
            const cityName = getCityWeatherInput.val();
            controller.getCityWeather(cityName);
        })

        cityWeathers.on("click", ".saveWeather", async function() {
            await controller.saveCityWeather($(this).data("cityname"));
        })

        cityWeathers.on("click", ".unSaveWeather", async function() {
            await controller.unsaveCityWeather($(this).data("cityname"));
        })
    }
}