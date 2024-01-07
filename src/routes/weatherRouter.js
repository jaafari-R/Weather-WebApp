const { Router } = require("express");
const WeatherModel = require("../model/weatherManager");

const router = Router();

router.get('/:cityName', async (req, res) => {
    const cityName = req.params.cityName;
    const cityWeather = await WeatherModel.getCityWeather(cityName);
    res.send(cityWeather);
})

module.exports = router;