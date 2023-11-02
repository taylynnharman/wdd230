//initialize display element variable
const visitsDisplay = document.querySelector("#visits");

//get stored value for numVisits or set to 0
let currentVisit = new Date();

if (numVisits == 0) {
    //if this is their first visit
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions."
} 

else if (lastVisit - currentVisit ){
    //If the amount of time between visits is less than a day
    visitsDisplay.textContent = "Back so soon! Awesome!."
}
//
else {
    visitsDisplay.textContent = "Your last visit was" + {numVisits}+ "days ago."
}

numVisits++;



// If the number of days is 1, then change the language to "day" not "days"



   