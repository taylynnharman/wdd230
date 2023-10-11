// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(cityName) {
    try {
        const response = await fetch(`${apiUrl}?q=${cityName}&appid=${apiKey}`);
        const data = await response.json();

        if (response.status === 200) {
            displayWeather(data);
        } else {
            console.error(data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
    const description = data.weather[0].description;

    weatherInfo.innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${description}</p>
    `;
}

// Example: Get weather for a specific city (e.g., London)
getWeather('Rexburg');
