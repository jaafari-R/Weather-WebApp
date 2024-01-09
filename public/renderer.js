class Component {
    constructor(templateSelector, containerSelector) {
        this.template = Handlebars.compile($(templateSelector).html());
        this.container = $(containerSelector);
    }
    render(data, empty = true) {
        if(empty) {
            this.container.empty();
        }
        const compiledHtml = this.template(data);
        this.container.append(compiledHtml);
    }
}

class Renderer {
    constructor() {
        this.cityWeather = new Component(
            HTML_SELECTORS.CITY_WEATHER_TEMPLATE_SELECTOR,
            HTML_SELECTORS.CITY_WEATHER_CONTAINER_SELECTOR)
    }

    addCityWeather(cityWeather) {
        this.cityWeather.render(cityWeather, false);
    }
}