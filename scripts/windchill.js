function calculateWindChill() {
    //get and store the input values
    var temp = parseFloat(document.getElementById("temp").value);
    var windspeed = parseFloat(document.getElementById("windspeed").value);

    var windchill;
    //check that temp and windspeed meet the specification limits (<=50°F and>3.0mph)
    if (temp > 50 || windspeed <= 3) {
        windchill = "N/A";
    } else {
        windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * Math.pow(windspeed, 0.16);
    }
    //update the windchill with the calculated windchill
    document.querySelector("#windchill").textContent = windchill;
}

// Add input event listeners to both input fields.
document.getElementById("temp").addEventListener("input", calculateWindChill);
document.getElementById("windspeed").addEventListener("input", calculateWindChill);

// Call the function once to calculate windchill initially.
calculateWindChill();

// F&deg;
//MPH