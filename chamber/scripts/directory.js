const url = "https://raw.githubusercontent.com/taylynnharman/wdd230/main/chamber/data/members.json"
const cards = document.querySelector('#cards');

async function getMemberData() {
    console.log('calling');
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members)
  }

  getMemberData();

  const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2'); 
        let logo = document.createElement('img');
        let contacts = document.createElement('div'); 
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');
    
        // Build the h2 content out to show the member's full name
        name.textContent = `${member.name}`; 
        address.textContent = `${member.address}`; 
        phone.textContent = `${member.phone}`; 
        website.textContent = `${member.website}`; 
        membership.textContent = `${member.membership}`; 
        name.textContent = `${member.name}`; 
        // fill in the blank
        // Build the image portrait by setting all the relevant attributes
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `${member.name} logo`); 
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');
        // Build Div
        contacts.appendChild(address); 
        contacts.appendChild(phone); 
        contacts.appendChild(website); 
        contacts.appendChild(membership); 
        // Append the section(card) with the created elements
        card.appendChild(name); 
        card.appendChild(logo); 
        card.appendChild(contacts); 
        cards.appendChild(card);
    });
  }

document.addEventListener("DOMContentLoaded", function() {
  const gridModeToggle = document.getElementById("gridMode");
  
  gridModeToggle.addEventListener("change", function () {
    if (this.checked) {
      enableGrid();
    } else {
      enableList();
    }
  });
  
  // Add grid, remove list
  function enableGrid() {
    display.classList.add("directory");
    display.classList.remove("list");
  }
  
  // Add list function, remove grid
  function enableList() {
    display.classList.add("list");
    display.classList.remove("directory");
  }
});