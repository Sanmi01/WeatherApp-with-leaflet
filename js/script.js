
// if ('geolocation' in navigator) {
//     console.log('geolocation is available');
//     navigator.geolocation.getCurrentPosition(async position=> {
//         console.log(position);
//         console.log(position.coords.latitude, position.coords.longitude);
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;

//         const data = { lat, lon };
//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         };
//         const res = await fetch('/api', options);
//         const dat = await res.json();
//         console.log(dat)
//     });
// } else {
//     console.log('geolocation is not available')
// }


if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async position=> {
        console.log(position);
        const lati = position.coords.latitude;
        const loni = position.coords.longitude;
        abc = lati;
        def = loni;

        const lat = lati.toFixed(2);
        const lon = loni.toFixed(2);

        const data = { lat, lon };
        const root = document.createElement('div');
          const geo = document.createElement('div');
          geo.textContent = `${lat}, ${lon}`;

          root.append(geo);
          document.body.append(root);
          const APIkey = '84faec5e087abbe64fd92b6fa34afc9b'; 
          const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${loni}&appid=${APIkey}`;
          const response = await fetch(api_url);
          const json = await response.json();
          console.log(json);
          const name1 = (json.name)
            const temp1 = (json.main.temp)
            const summary1 = json.weather[0].main;
            const description1 = json.weather[0].description;

          const mymap = L.map('mapid').setView([lati, loni], 6.5);




const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl =
  'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { noWrap: true, bounds: [
    [-90, -180],
    [90, 180]
  ],
   attribution });
tiles.addTo(mymap);
const marker = L.marker([lati, loni]).addTo(mymap);
      const txt = `The weather here at ${name1} located at ${lati}&deg;, ${loni}&deg; is ${summary1} with a look of ${description1} and a temperature of ${temp1}.`
    marker.bindPopup(txt);






// async function getData() {
//     const response = await fetch('/api');
//     const data = await response.json();
//     console.log(data)

//     for (item of data) {
//       const marker = L.marker([item.lat, item.lon]).addTo(mymap)
//       console.log(item)
//       const txt = `The weather here at ${item.lat}&deg;, ${item.lon}&deg; is ${item.summary} with a look of ${item.description} and a temperature of ${item.temp}.`
//     marker.bindPopup(txt);
//     }
    
    
//   }
//   getData();

  var popup = L.popup();
  onMapClick = async (e) => {
    popup.setLatLng(e.latlng)
        console.log(e.latlng);
        let latitude = (e.latlng.lat);
        let longitude = (e.latlng.lng);
        console.log(latitude)
        console.log(longitude)
        const APIkey = '84faec5e087abbe64fd92b6fa34afc9b'; 
        const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
        const response = await fetch(api_url);
        const json = await response.json();
        console.log(json);
        const name = (json.name)
        const temp = (json.main.temp)
        const summary = json.weather[0].main;
        const description = json.weather[0].description;
        const txt = `The weather here at ${name} located at ${latitude}&deg;, ${longitude}&deg; is ${summary} with a look of ${description} and a temperature of ${temp}.`
        popup.setContent(txt)
        popup.openOn(mymap);
}

mymap.on('click', onMapClick);
    });
} else {
    console.log('geolocation is not available')
}







// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     if ('geolocation' in navigator) {
//         navigator.geolocation.getCurrentPosition(async position=> {
//             console.log(position);
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;

//             const APIkey = '84faec5e087abbe64fd92b6fa34afc9b'; 
//           const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
//           const response = await fetch(api_url);
//           const json = await response.json();
//           console.log(json);
//           const temp = (json.main.temp)
//           const summary = json.weather[0].main;
//           const description = json.weather[0].description;

//             const data = { lat, lon, temp, summary, description };
//             const options = {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             };
//             const res = await fetch('/api', options);
//             const dat = await res.json();
//             console.log(dat)
//         });
//     } else {
//         console.log('geolocation is not available')
//     }
// })

// const mymap = L.map('mapid').setView([0, 0], 6);




// const attribution =
//   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// //const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const tileUrl =
//   'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
// const tiles = L.tileLayer(tileUrl, { noWrap: true, bounds: [
//     [-90, -180],
//     [90, 180]
//   ],
//    attribution });
// tiles.addTo(mymap);







// async function getData() {
//     const response = await fetch('/api');
//     const data = await response.json();
//     console.log(data)

//     for (item of data) {
//       const marker = L.marker([item.lat, item.lon]).addTo(mymap)
//       console.log(item)
//       const txt = `The weather here at ${item.lat}&deg;, ${item.lon}&deg; is ${item.summary} with a look of ${item.description} and a temperature of ${item.temp}.`
//     marker.bindPopup(txt);
//     }
    
    
//   }
//   getData();

//   var popup = L.popup();
//   onMapClick = async (e) => {
//     popup.setLatLng(e.latlng)
//         console.log(e.latlng);
//         let latitude = (e.latlng.lat);
//         let longitude = (e.latlng.lng);
//         console.log(latitude)
//         console.log(longitude)
//         const APIkey = '84faec5e087abbe64fd92b6fa34afc9b'; 
//         const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
//         const response = await fetch(api_url);
//         const json = await response.json();
//         console.log(json);
//         const name = (json.name)
//         const temp = (json.main.temp)
//         const summary = json.weather[0].main;
//         const description = json.weather[0].description;
//         const txt = `The weather here at ${name} located at ${latitude}&deg;, ${longitude}&deg; is ${summary} with a look of ${description} and a temperature of ${temp}.`
//         popup.setContent(txt)
//         popup.openOn(mymap);
// }

// mymap.on('click', onMapClick);
