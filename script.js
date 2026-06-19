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
