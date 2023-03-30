const map = L.map('map').setView([14.131, 121.965], 8);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const data = {
  dict: {
    coords: [13.946927483642305, 121.61101088007385],
    officename: "DICT Provincial Office",
    address: "OfficeName 123 Lucena",
    website: 'dict.gov.ph',
    phone:123,
  },
  slsu: {
    coords: [14.11223,121.56079],
    officename: "Southern Luzon State University Main Campus",
    address: "Brgy. Kulapi, Lucban Quezon",
    website: 'slsu.edu.ph',
    phone:123,
  },
  slsutayabas: {
    coords: [14.046439760998949, 121.66556217060123],
    officename: "Southern Luzon State University Tayabas Campus",
    address: "Brgy. Ibabang Palale, Tayabas City Quezon",
    website: 'slsu.edu.ph',
    phone:123,
  },
  dll: {
    coords: [13.946690122684158, 121.59027463352925],
    officename: "Dalubhasaan ng Lungsod ng Lucena",
    address: "City Hall Annex Compound, Isabang, Lucena, Philippines",
    website: '',
    phone:123 ,
  },
}

const customIcon =  L.icon({
  iconUrl: './img/wifi_icon.png',
  iconSize: [25, 25],
})

for (let key in data){

  const office = data[key];

  L.marker(office.coords, {
    title: office.officename,
    icon: customIcon,
  })
  .bindPopup(`
  <span class="popup">
    <b>${office.officename}</b>
    <br>${office.address}
    <br><a href="${office.website}"
    target="_blank">${office.website}</a>
    <br>Call:<a href="${office.phone}">${office.phone}</a></span>`)
    .addTo(map)
}
