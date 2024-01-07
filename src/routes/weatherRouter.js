const { Router } = require("express");
const WeatherModel = require("../model/weatherManager");

const router = Router();

router.get("/:cityName", async (req, res) => {
    const cityName = req.params.cityName;
    const cityWeather = await WeatherModel.getCityWeather(cityName);
    res.send(cityWeather);
})

router.get("/", async (req, res) => {
    const cityWeathers = await WeatherModel.getSavedCityWeathers();
    res.send(cityWeathers);
})

router.post("/", async (req, res) => {
    const cityWeather = req.body;
    const newCityWeather = await WeatherModel.saveCityWeather(cityWeather);
    res.send(newCityWeather)
})

router.delete("/:cityName", async (req, res) => {
    const cityName = req.params.cityName;
    await WeatherModel.deleteSavedCityWeather(cityName);
    res.send(204);
})

module.exports = router;