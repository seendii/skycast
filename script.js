const API_KEY = "2a59234444ab7c0307eee217243be66b";

async function getWeather(lat, lon) {

    try {

        const url =
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("Weather Data:", data);

        document.getElementById("city").innerText =
            data.name;

        document.getElementById("temperature").innerText =
            Math.round(data.main.temp) + "°C";

        document.getElementById("condition").innerText =
            data.weather[0].description;

        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {

        console.error("Error:", error);

        document.getElementById("condition").innerText =
            "Failed to load weather";

    }
}

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log("Latitude:", lat);
            console.log("Longitude:", lon);

            getWeather(lat, lon);

        },

        function(error) {

            console.log(error);

            document.getElementById("condition").innerText =
                "Location access denied";

        }

    );

} else {

    document.getElementById("condition").innerText =
        "Geolocation not supported";

}
