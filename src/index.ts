import L from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png"
import "leaflet/dist/images/marker-icon.png"

import 'leaflet/dist/leaflet.css'
import './index.css'
import g3 from './HH1-01012021_so2_g3.geojson'
import g4 from './HH1-01012021_so2_g4.geojson'



const viewPoint = g3['features'][0]['geometry']['coordinates'];
const map = L.map('mymap').setView([viewPoint[1], viewPoint[0]], 13.5);

// load a tile layer


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

  {

    attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',

    maxZoom: 20,

    minZoom: 9

  }).addTo(map);

  var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#dde330" , // "#ff7800",
    color: "#000",
    weight: 1,
    opacity: .5,
    fillOpacity: 0.2
};


  // L.geoJSON(g3,{

  //   pointToLayer: function(feature,latlng){
  //     // console.log(latlng)
  //     // var marker = L.marker(latlng);
  //     // // marker.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT + '<br/>' + feature.properties.Department + '&nbsp;' + feature.properties.LOCATION_ZIPCODE, {closeOnClick: false, autoClose: false});
  //     // return marker;
  //     // console.log(latlng)
  //     return L.circleMarker(latlng, geojsonMarkerOptions)
  //   }
  // }).addTo(map);


  geojsonMarkerOptions.fillColor = "#e83613"
  L.geoJSON(g4,{

    pointToLayer: function(feature,latlng){
      // console.log(latlng)
      const marker = L.circleMarker(latlng, geojsonMarkerOptions)
      marker.bindPopup('hh1' + '<br/>' + feature.properties.Type + '<br/>' + 'value: ' + feature.properties.Gas_Value +  '<br/>' + 'temprature: ' +feature.properties.Temprature, {closeOnClick: false, autoClose: false});
      // return marker;
      // console.log(latlng)
      return marker
    }
  }).addTo(map);