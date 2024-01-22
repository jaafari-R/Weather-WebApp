const weatherErrors = require("./weatherErrors");

class ErrorHandler {
    constructor() {
        this.errors = {};
        this.initializeErrorsMap();
    }

    initializeErrorsMap() {
        this.errors = {
            ...weatherErrors
        };
        console.log(this.errors)
    }

    handle(res, error) {
        const errorName = error.constructor.name;
        error = this.errors[errorName];
        if(error) {
            return (
                res.status(error.statusCode)
                .send(error.msg)
            )
        }
        return (
            res.status(500)
            .send("Something went wrong on the server")
        )
    }
}

module.exports = new ErrorHandler();