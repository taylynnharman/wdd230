const url = "https://raw.githubusercontent.com/taylynnharman/wdd230/main/final/data/prices.json";
const summaryContainer = document.querySelector('#summary');

async function getData() {
  try {
    console.log('calling');
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.rentals);
    displayVehicles(data.rentals);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
 
getData();

function createVehicleCard(vehicle) {
  const div = document.createElement('div');
  div.classList.add('vehicle-card');

  const image = document.createElement('img');
  image.src = vehicle.image;
  image.alt = `${vehicle.vehicle} Image`;
  image.loading = 'lazy';
  image.width = '300';
  image.height = '200';

  const title = document.createElement('h2');
  title.textContent = vehicle.vehicle;

  const summary = document.createElement('p');
  summary.textContent = vehicle.summary;



  const reservationPrices = vehicle.reservation.map(option => `${option.title}: ${option.price}`).join(', ');
  const reservation = document.createElement('p');
  reservation.textContent = `Reservation Prices: ${reservationPrices}`;

  const reserveButton = document.createElement('button');
  reserveButton.textContent = 'Reserve';
  reserveButton.classList.add('form');

  // Add an event listener to the reserve button
  reserveButton.addEventListener('click', function () {
    // Navigate to reservations.html and pass the rental type as a query parameter
    const rentalType = encodeURIComponent(vehicle.vehicle);
    window.location.href = `reservations.html?rentalType=${rentalType}`;
  });
  div.appendChild(image);
  div.appendChild(title);
div.appendChild(summary);
  div.appendChild(reserveButton);

  return div;
}

function displayVehicles(rentals) {
        summaryContainer.innerHTML = ''; // Clear previous content
      
        rentals.forEach(rentalCategory => {
          const rentalTypeHeading = document.createElement('h2');
          rentalTypeHeading.textContent = rentalCategory.rentalType || 'Unknown';
          summaryContainer.appendChild(rentalTypeHeading);
      
          const firstVehicle = rentalCategory.vehicles[0]; // Get the first vehicle in the category
      
          if (firstVehicle) {
            const vehicleCard = createVehicleCard({
              vehicle: rentalCategory.rentalType,
              persons: firstVehicle.persons,
              image: firstVehicle.image,
              summary: firstVehicle.summary,
            });
      
            summaryContainer.appendChild(vehicleCard);
          }
        });
      }
      
