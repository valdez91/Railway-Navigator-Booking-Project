// Add a click event listener to the 'stopsHeader' element
document.getElementById('stopsHeader').addEventListener('click', function() {
  const stopsTable = document.getElementById('stops');
  if (stopsTable.style.display === 'none' || stopsTable.style.display === '') {
    stopsTable.style.display = 'table';
  } else {
    stopsTable.style.display = 'none';
  }
});

// Add a mouseover event listener to the 'viewTrainInfoButton' element
document.getElementById('viewTrainInfoButton').addEventListener('mouseover', function() {
  const trainName = document.getElementById('trainName');
  const timestamp = document.getElementById('timestamp');

  if (trainName.style.display === 'none' || trainName.style.display === '') {
    trainName.style.display = 'block';
    timestamp.style.display = 'block';
  } else {
    trainName.style.display = 'none';
    timestamp.style.display = 'none';
  }
});


// Get the submit button element
const submitButton = document.getElementById('btn');

// Add a click event listener to the submit button
submitButton.addEventListener('click', function() {
  // Prevent the form from submitting in the default way
  event.preventDefault();

  // Display an alert message
  alert('Your ticket details have been received!');
});

// Fetch the data from the provided URL
async function fetchData() {
  const response = await fetch('https://api.irail.be/vehicle/?id=BE.NMBS.IC1832&format=json&lang=en&alerts=false');
  const data = await response.json();
  return data;
}
// Display the station names as a list
async function displayStations() {
  const data = await fetchData();
  const stations = data.stops.stop.map(stop => stop.station);
  const stationsList = document.getElementById('stations-list');
  stations.forEach(station => {
    const li = document.createElement('li');
    li.textContent = station;
    stationsList.appendChild(li);
  });
}


// Display the train name and timestamp
function displayTrainInfo(data) {
  document.getElementById('trainName').textContent = data.vehicleinfo.name;
  document.getElementById('timestamp').textContent = data.timestamp;
}

// Display the stops information
function displayStops(data) {
  const stopsTableBody = document.getElementById('stops').getElementsByTagName('tbody')[0];
  data.stops.stop.forEach(stop => {
      const row = stopsTableBody.insertRow();
      const stationCell = row.insertCell(0);
      stationCell.textContent = stop.stationinfo.name;
      const timeCell = row.insertCell(1);
      timeCell.textContent = new Date(stop.time * 1000).toLocaleString();
      const delayCell = row.insertCell(2);
      delayCell.textContent = stop.delay;
      const platformCell = row.insertCell(3);
      platformCell.textContent = stop.platform;
  });
}

//Fetch the data and display it
async function init() {
  const data = await fetchData();
  displayTrainInfo(data);
  displayStops(data);
}
// Call the displayStations function to display the station names
displayStations();
// Call the init function to fetch the data and display the train information and stops
init();


