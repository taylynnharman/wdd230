document.addEventListener('DOMContentLoaded', () => {


const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=86.9223&units=imperial&appid=aaa802f065623b257e44b95ccc9e87c0";
const weatherContainer = document.querySelector('#weather');

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        displayResults(data);
    } catch (error) {
        console.error(error);
    }
}


function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function createWeatherCard(data, weekday) {
    const card = document.createElement('div');
    card.classList.add('forecast-card');

    const dayOfWeek = document.createElement('h2');
    // Assuming you have a function to get the current day of the week
    weekday = getDayOfWeek();
    dayOfWeek.textContent = weekday;

    const icon = document.createElement('img');
    icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.alt = `Weather Icon`;
    icon.loading = 'lazy';
    icon.width = '300';
    icon.height = '200';

    const temp = document.createElement('p');
    temp.textContent = `${data.main.temp.toFixed(0)}°F`;

    const humidity = document.createElement('p');
    humidity.textContent = `${data.main.humidity.toFixed(0)}`;

    const description = document.createElement('p');
    description.textContent = capitalizeFirstLetter(data.weather[0].description);

    card.appendChild(dayOfWeek);
    card.appendChild(icon);
    card.appendChild(temp);
    card.appendChild(humidity);
    card.appendChild(description);

    return card;
}

function displayResults(data) {
    const weatherCard = createWeatherCard(data);

        container.innerHTML = '';
    
        // Get current day of the week
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date().getDay();
    
        // Loop through forecast data and create a card for each day
        for (let i = 0; i < 3; i++) {
            const weekday = weekdays[(today + 1+i) % 7]; // Adding i to get the next days
        }
    weatherContainer.appendChild(weatherCard);
}
apiFetch();
});




  

// // ✔️ Include any weather alerts if available (applicable) from the government and display it as a closeable message at the
// // top of the page.