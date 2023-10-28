const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(localStorage.getItem("numVisits")) || 0;

if (numVisits !==0) {
    visitsDisplay.textContent = numVisits;
} 

else {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions."
}

numVisits++;

localStorage.setItem("numVisitsDiscover-ls", numVisits);