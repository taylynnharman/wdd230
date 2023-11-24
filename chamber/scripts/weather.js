// variables
const currentTemp = document.querySelector('#temp');
const headTemp = document.querySelector('#headtemp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector('#forecast');

// URLs
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.42&lon=-111.8&units=imperial&appid=aaa802f065623b257e44b95ccc9e87c0'
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.42&lon=-111.8&units=imperial&appid=ee2dc236cfc7a44e4ed19315866fcc64';

// Weather API Fetch
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error (await response.text());
        }
    } catch (error) {
            console.log(error);
    }
}
apiFetch();

// Forecast API Fetch
async function forecastApiFetch() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const forecastData = await response.json()
            console.log(forecastData);
            forecastDisplayResults(forecastData);
        }
        else {
            throw Error (await response.text());
        }
    } catch (error) {
            console.log(error);
    }
}
forecastApiFetch();

// Display Weather
function displayResults(data) {
    
    if (currentTemp) {
        currentTemp.textContent = `${data.main.temp}°F`;
    } else {
        console.log("No element with ID 'currentTemp' found on this page.");
    }
    if (headTemp) {
        headTemp.textContent = `${data.main.temp}°F`;
    } else {
        console.log("No element with ID 'headTemp' found on this page.");
    }
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let description = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', description);
    if (captionDesc) {
        captionDesc.textContent = description;
    } else {
        console.log("No element with ID 'figcaption' found on this page.");
    }
}
    // Display Forecast
    function forecastDisplayResults(forecastData) {

        const dayOne = `${forecastData.list[8].main.feels_like.toFixed(0)} °F`;
        const dayTwo = `${forecastData.list[16].main.feels_like.toFixed(0)} °F`;
        const dayThree = `${forecastData.list[24].main.feels_like.toFixed(0)} °F`;
        forecast.textContent = `${dayOne}, ${dayTwo}, ${dayThree}`;
        // forecast.appendChild(dayOne);
        // forecast.appendChild(dayTwo);
        // forecast.appendChild(dayThree);

    }
    