const express = require("express");
const config = require("./config");
const { connectDB } = require("./db/dbConnect");
const WeatherRouter = require("./routes/weatherRouter");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/../public"));
app.use(express.static(__dirname + "/../node_modules/jquery/dist"));
app.use("/weather", WeatherRouter);

async function main() {
    await connectDB()
    console.log("Connected to DB Successfully");

    app.listen(config.SERVER_PORT, () => {
        console.log("Server is running on port", config.SERVER_PORT);
    })
}

main();