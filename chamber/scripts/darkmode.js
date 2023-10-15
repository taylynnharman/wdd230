
const darkModeToggle = document.getElementById("mode");
const footer = document.querySelector("footer");
// Get all <h2> elements on the page
const h2Elements = document.querySelectorAll("h2");
darkModeToggle.addEventListener("change", function () {
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  // Add CSS classes or styles for dark mode
  document.body.classList.add("dark-mode");
  footer.classList.add("dark-mode");
// Loop through each <h2> element and add the "dark-mode" class
h2Elements.forEach(function(h2) {
  h2.classList.add("dark-mode");
});

}

function disableDarkMode() {
  // Remove CSS classes or styles for dark mode
  document.body.classList.remove("dark-mode");
  document.footer.classList.remove("dark-mode");
  h2Elements.forEach(function(h2) {
    h2.classList.remove("dark-mode");
    
  });
}