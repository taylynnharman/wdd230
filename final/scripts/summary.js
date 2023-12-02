const url = "https://raw.githubusercontent.com/taylynnharman/wdd230/main/final/data/prices.json";
const summaryContainer = document.querySelector('#summary');

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.rentals);
    displayVehicles(data.rentals);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
 
getData();

function createSummaryCard(rentalCategory) {
    const div = document.createElement('div');
    div.classList.add('summary-card');
  
    const h2 = document.createElement('h2');
    h2.textContent = rentalCategory.rentalType;
  
    const firstVehicle = rentalCategory.vehicles[0];
  
    if (firstVehicle) {
      const image = document.createElement('img');
      image.src = firstVehicle.image;
      image.alt = `${firstVehicle.vehicle} Image`;
      image.loading = 'lazy';
      image.width = '300';
      image.height = '200';
  
      const summary = document.createElement('p');
      summary.textContent = firstVehicle.summary;

  
      div.appendChild(h2);
      div.appendChild(image);
      div.appendChild(summary);
  
      return div;
    }
  }

function displayVehicles(rentals) {
    summaryContainer.innerHTML = ''; // Clear previous content
    rentals.forEach(rentalCategory => {
      const vehicleCard = createSummaryCard(rentalCategory);
      if (vehicleCard) {
        summaryContainer.appendChild(vehicleCard);
      }
    });
  }
    
      
