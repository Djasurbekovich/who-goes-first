let elDistanceForm = document.querySelector('.form');
let elDistanceInput = elDistanceForm.querySelector('.input');

let elWalkTime = document.querySelector('.walk-time');
let elBikeTime = document.querySelector('.bike-time');
let elCarTime = document.querySelector('.car-time');
let elPlaneTime = document.querySelector('.plane-time');

let elErrorMessage = document.querySelector('.error');

// Piyoda - 3.6 km/soat
// Velosiped - 20 km/soat
// Mashina - 70 km/soat
// Samolyot - 800 km/soat

let walkSpeed = 3.60;
let bikeSpeed = 20.00;
let carSpeed = 70.00;
let planeSpeed = 800.00;

let distance = '';



elDistanceForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  distance = parseFloat(elDistanceInput.value.trim(), 10);
  
if (distance > 0){
    let walkTime = distance / walkSpeed;
    walkHour = parseInt(walkTime, 10);
    walkMinute = Math.round((parseFloat(walkTime.toFixed(2), 10) - walkHour) * 60);

    let bikeTime = distance / bikeSpeed;
    bikeHour = parseInt(bikeTime, 10);
    bikeMinute = Math.round((parseFloat(bikeTime.toFixed(2), 10) - bikeHour) * 60);

    let carTime = distance / carSpeed;
    carHour = parseInt(carTime, 10);
    carMinute = Math.round((parseFloat(carTime.toFixed(2), 10) - carHour) * 60);

    let planeTime = distance / planeSpeed;
    planeHour = parseInt(planeTime, 10);
    planeMinute = Math.round((parseFloat(planeTime.toFixed(2), 10) - planeHour) * 60);
    
    elErrorMessage.classList.add('d-none');
    
    elWalkTime.textContent = `${walkHour} hours, ${walkMinute} min`;
    elBikeTime.textContent = `${bikeHour} hours, ${bikeMinute} min`;
    elCarTime.textContent = `${carHour} hours, ${carMinute} min`;
    elPlaneTime.textContent = `${planeHour} hours, ${planeMinute} min`;
}
else{
    elErrorMessage.textContent = NaN;
}
});