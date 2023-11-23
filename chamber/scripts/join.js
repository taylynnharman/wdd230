function setTimestamp() {
    var timestampInput = document.getElementById('timestamp');
    // Set the value to the current date/time in milliseconds
    timestampInput.value = Date.now();
}
