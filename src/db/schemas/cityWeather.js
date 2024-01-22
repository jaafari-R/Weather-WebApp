const { Schema, model } = require("mongoose");

const cityWeatherSchema = new Schema({
    name: {type: String, required: true, unique: true},
    tempreture: {type: Number, required: true},
    condition: {type: String, required: true},
    conditionIcon: {type: String, required: true}
});

const CityWeatherModel = model("cityWeather", cityWeatherSchema);
module.exports = CityWeatherModel;