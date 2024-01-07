const express = require("express");
const config = require("./config");

const app = express();

app.use(express.json());



app.listen(config.SERVER_PORT, () => {
    console.log("Server is running on port", config.SERVER_PORT);
})
