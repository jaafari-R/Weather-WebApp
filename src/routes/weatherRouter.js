const { Router } = require("express");
const WeatherController = require("../controllers/weatherController");

const router = Router();

router.get("/:cityName", WeatherController.getWeatherByCityName);
router.get("/", WeatherController.getAllSavedCityWeathers);
router.post("/", WeatherController.saveCityWeather);
router.delete("/:cityName", WeatherController.deleteCityWeather);

module.exports = router;