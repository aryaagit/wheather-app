const apiKey = "bd5e378503939ddaee76f12ad7a97608"; 


async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            document.getElementById("weather-info").innerHTML = `
                <img class="weather-icon" src="${weatherIcon}" alt="Weather Icon">
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡 Temperature: <strong>${data.main.temp}°C</strong></p>
                <p>☁ Weather: <strong>${data.weather[0].description}</strong></p>
                <p>💧 Humidity: <strong>${data.main.humidity}%</strong></p>
                <p>🌬 Wind Speed: <strong>${data.wind.speed} m/s</strong></p>
            `;
            document.getElementById("weather-card").style.display = "block";
        } else {
            document.getElementById("weather-info").innerHTML = `<p style="color:red;">City not found!</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("weather-info").innerHTML = `<p style="color:red;">Error fetching data.</p>`;
    }
}
