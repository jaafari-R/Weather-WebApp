class NO_WEATHERS_EXISTS_ERR extends Error {
    static msg = "There are no saved weathers!"
    static statusCode = 404;
}

class CITY_WEATHER_ALREADY_EXISTS_ERR extends Error {
    static msg = "This city weather already exist";
    static statusCode = 409;
}

class CITY_WEATHER_IS_NOT_SAVED_ERR extends Error { // does not exist in db
    static msg = "The weather for the provided city is not saved";
    static statusCode = 400;
}

class CITY_DOES_NOT_EXIST_ERR extends Error {
    static msg = "This city does not exist";
    static statusCode = 400;
}

module.exports = {
    NO_WEATHERS_EXISTS_ERR,
    CITY_WEATHER_ALREADY_EXISTS_ERR,
    CITY_WEATHER_IS_NOT_SAVED_ERR,
    CITY_DOES_NOT_EXIST_ERR
}
