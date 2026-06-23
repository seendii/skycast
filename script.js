const API_KEY = "2a59234444ab7c0307eee217243be66b";

const params = new URLSearchParams(window.location.search);
const city = params.get("city");

async function getWeather(city) {

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        document.getElementById("city").innerText =
            data.name;

        document.getElementById("temperature").innerText =
            Math.round(data.main.temp) + "°C";

        document.getElementById("condition").innerText =
            data.weather[0].description;

        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        document.getElementById("humidity").innerText =
            data.main.humidity + "%";

        document.getElementById("wind").innerText =
            data.wind.speed + " m/s";

        document.getElementById("pressure").innerText =
            data.main.pressure + " hPa";

        document.getElementById("visibility").innerText =
            (data.visibility / 1000) + " km";

        document.getElementById("clouds").innerText =
            data.clouds.all + "%";

        document.getElementById("sunrise").innerText =
            new Date(data.sys.sunrise * 1000).toLocaleTimeString();

        document.getElementById("sunset").innerText =
            new Date(data.sys.sunset * 1000).toLocaleTimeString();

    } catch (error) {

        document.getElementById("condition").innerText =
            "City not found";

    }
}

if(city) {
    getWeather(city);
}
