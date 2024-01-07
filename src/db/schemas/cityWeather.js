const { Schema, model } = require("mongoose");

const cityWeatherSchema = new Schema({
    name: String,
    tempreture: Number,
    condition: String,
    conditionIcon: String
});

const CityWeatherModel = model("cityWeather", cityWeatherSchema);
module.exports = CityWeatherModel;