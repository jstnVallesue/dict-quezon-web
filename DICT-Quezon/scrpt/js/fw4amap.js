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
  pup: {
    coords: [13.69045497,122.1714586],
    officename: "Polytechnic University Of The Philippines - Gen. Luna Campus",
    address: "General Luna, Quezon Provice",
    website: '',
    phone:123 ,
  },
  slsugumaca: {
    coords: [13.92297907, 122.1010992],
    officename: "Southern Luzon State University Gumaca Campus",
    address: "Gumaca, Quezon Provice",
    website: 'slsu.edu.ph',
    phone:123 ,
  },
  slsuinfanta: {
    coords: [14.71378799	,121.6206677],
    officename: "Southern Luzon State University Infanta Campus",
    address: "Infanta, Quezon Provice",
    website: 'slsu.edu.ph',
    phone:123 ,
  },
  puplopez: {
    coords: [13.88079950056233,	122.2598687],
    officename: "Polytechnic University Of The Philippines - Lopez Campus",
    address: "Lopez, Quezon Provice",
    website: '',
    phone:123 ,
  },
  slsulucena: {
    coords: [13.94892543,	121.6289322],
    officename: "Southern Luzon State University Lucena Campus",
    address: "Lucena, Quezon Provice",
    website: 'slsu.edu.ph',
    phone:123 ,
  },
  slsupolilio: {
    coords: [14.721650,	121.938308],
    officename: "Southern Luzon State University Polilio Campus",
    address: "Polilo, Quezon Provice",
    website: 'slsu.edu.ph',
    phone:123 ,
  },
  pupmulanay: {
    coords: [13.52973741,	122.3926254],
    officename: "Polytechnic University Of The Philippines - Mulanay Campus",
    address: "Mulanay, Quezon Provice",
    website: '',
    phone:123 ,
  },
  colegiotayabas: {
    coords: [14.02296577,	121.5893273],
    officename: "Colegio dela Ciudad de Tayabas",
    address: "Tayabas, Quezon Provice",
    website: '',
    phone:123 ,
  },
  slsutiaong: {
    coords: [13.94710317,	121.3691737],
    officename: "Southern Luzon State University Tiaong Campus",
    address: "Tiaong, Quezon Provice",
    website: 'slsu.edu.ph',
    phone:123 ,
  },
  pupunisan: {
    coords: [13.84579079,	121.9691757],
    officename: "Polytechnic University Of The Philippines - Unisan Campus",
    address: "Unisan, Quezon Provice",
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
