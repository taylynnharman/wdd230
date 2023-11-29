const url = "https://raw.githubusercontent.com/taylynnharman/wdd230/main/final/data/prices.json"
const rentals = document.querySelector('#rentals');

async function getData() {
    console.log('calling');
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members)
  }

  getData();

const displayreservations = (rentals) => {
    let heading = document.createElement('h3');
    heading.textContent = "Learning Activities";
    activity.appendChild(heading);

    rentals.forEach((vehicle) => {

        vehicle.forEach((reservation) => {
            let listItem = document.createElement('li');
            let a = document.createElement('a');
            a.href = `${baseURL}${reservation.url}`;
            a.textContent = reservation.title;

            listItem.appendChild(a);
            activity.appendChild(listItem);
        });
    });
}

getreservations();
  const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h3'); 
        let pic = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p');
    
        // Build the h2 content out to show the member's full name
        name.textContent = `${member.name}`; 
        address.textContent = `${member.address}`; 
        phone.textContent = `${member.phone}`; 
        website.href = member.website; 
        website.textContent = `${member.website}`;
        website.target = '_blank'; 
        membership.textContent = `${member.membership}`; 
        name.textContent = `${member.name}`; 

        // Build the image portrait by setting all the relevant attributes
        pic.setAttribute('src', `${member.image}`);
        pic.setAttribute('alt', `${member.name} pic`);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('width', '300');
        pic.setAttribute('height', 'auto');

        card.appendChild(name); 
        card.appendChild(pic); 
        card.appendChild(address); 
        card.appendChild(phone); 
        card.appendChild(website); 
        card.appendChild(membership); 
        cards.appendChild(card);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const gridModeToggle = document.getElementById("gridMode");

    gridModeToggle.addEventListener("change", function () {
        if (this.checked) {
            enableList();
        } else {
            enableGrid();
        }
    });

    // Add grid, remove list
    function enableGrid() {
        cards.classList.add("grid"); // Add a class for grid view
        cards.classList.remove("list"); // Remove the class for list view
    }

    // Add list function, remove grid
    function enableList() {
        cards.classList.add("list"); // Add a class for list view
        cards.classList.remove("grid"); // Remove the class for grid view
    }
});

