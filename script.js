const API_KEY = "2a59234444ab7c0307eee217243be66b";

async function getWeather(lat, lon) {

    try {

        const url =
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

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

    } catch(error) {

        console.error(error);

        document.getElementById("condition").innerText =
            "Failed to load weather";

    }
}

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

        function(position) {

            getWeather(
                position.coords.latitude,
                position.coords.longitude
            );

        },

        function(error) {

            console.log("Location denied. Using fallback location.");

            getWeather(10.1632, 76.6413);

        }

    );

} else {

    getWeather(10.1632, 76.6413);

}
