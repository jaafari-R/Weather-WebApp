const express = require("express");
const config = require("./config");
const { connectDB } = require("./db/dbConnect");
const WeatherRouter = require("./routes/weatherRouter");

const app = express();

app.use(express.json());

app.use("/weather", WeatherRouter);

async function main() {
    await connectDB()

    app.listen(config.SERVER_PORT, () => {
        console.log("Server is running on port", config.SERVER_PORT);
    })
}


main();