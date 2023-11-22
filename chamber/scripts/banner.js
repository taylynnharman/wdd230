const closeButton = document.querySelector('#closeBanner');
const banner = document.querySelector('#banner');

closeButton.addEventListener('click', () => {
    const today = new Date().getDay();
    if (today >= 1 && today <= 3) {
        // Show the banner
        const banner = document.getElementById("banner");
        banner.style.display = "block";}
        
    banner.classList.toggle('close');
    banner.style.display = "none";
});