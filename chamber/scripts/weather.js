const temp = document.querySelector('#temp').innerHTML;
const windspeed = document.querySelector('#windspeed').innerHTML;
const windchill = document.querySelector('#windchill');

if (temp > 50 || windspeed <= 3) {
    windChill = "N/A";
} else {
    windChill = 35.74 + 0.6215 * temp - 35.75 * windspeed **0.16 + 0.4275 * temp * windspeed **0.16;
}
windchill.innerText = `${windChill.toFixed(2)} °F`;