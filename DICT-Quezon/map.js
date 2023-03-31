// Create a new map instance
var map = L.map('map');

// Add the OpenStreetMap tiles layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors',
}).addTo(map);

// Define the locations to add to the map
var locations = [
    {lat: 51.5074, lng: -0.1278, name: 'London'},
    {lat: 40.7128, lng: -74.0060, name: 'New York'},
    {lat: 35.6895, lng: 139.6917, name: 'Tokyo'}
];

// Loop through the locations and add markers to the map
for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    L.marker([location.lat, location.lng]).addTo(map).bindPopup(location.name);
}

// Set the map view to the center of the locations with a zoom level of 5
map.setView([14.131, 121.965], 2);
var marker = L.marker([13.946927483642305, 121.61101088007385]).addTo(map);

<span class="popup">
  <b>OfficeName</b><br>
  123 <br>
  London <br>
  <a href="website" target="_blank">Website</a><br>
  Call:<a href="tell:123">123</a>
</span>
