// Set variables 
const currentTemp = document.querySelector('.temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.4249&lon=111.7979&units=imperial&appid=aaa802f065623b257e44b95ccc9e87c0'

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

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}°F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}