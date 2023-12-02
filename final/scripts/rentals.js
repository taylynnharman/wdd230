const url = "https://raw.githubusercontent.com/taylynnharman/wdd230/main/final/data/prices.json";
const rentalsContainer = document.querySelector('#rentals');

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

  const persons = document.createElement('p');
  persons.textContent = `Persons: ${vehicle.persons}`;

  const reservationPrices = vehicle.reservation.map(option => `${option.title}: ${option.price}`).join(', ');
  const reservation = document.createElement('p');
  reservation.textContent = `Reservation Prices: ${reservationPrices}`;

  const walkinPrices = vehicle.walkin.map(option => `${option.title}: ${option.price}`).join(', ');
  const walkin = document.createElement('p');
  walkin.textContent = `Walk-in Prices: ${walkinPrices}`;

  const reserveButton = document.createElement('button');
  reserveButton.textContent = 'Reserve';
  reserveButton.classList.add('button');

  // Add an event listener to the reserve button
  reserveButton.addEventListener('click', function () {
    // Navigate to reservations.html and pass the rental type as a query parameter
    const rentalType = encodeURIComponent(vehicle.vehicle);
    window.location.href = `reservations.html?rentalType=${rentalType}`;
  });
  div.appendChild(image);
  div.appendChild(title);
  div.appendChild(persons);
  div.appendChild(reservation);
  div.appendChild(walkin);
  div.appendChild(reserveButton);

  return div;
}

function displayVehicles(vehicles) {
  rentalsContainer.innerHTML = ''; // Clear previous content

  vehicles.forEach(vehicle => {
    const vehicleCard = createVehicleCard(vehicle);
    rentalsContainer.appendChild(vehicleCard);
  });
}

