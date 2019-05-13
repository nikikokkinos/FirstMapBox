mapboxgl.accessToken = 'pk.eyJ1IjoibmlraTEyc3RlcCIsImEiOiJjanZlNGFneWswMm0zNDRxcGYwZXYwcjl2In0.fWV3JfWN5hg9UFqDimwIZw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [23.389893, 38.298559],
  zoom: 5.6,
  minZoom: 3,
});

map.on('load', function() {

  var urlRegions = 'https://raw.githubusercontent.com/nikikokkinos/GR_Data/master/GR_RegionsSimplified.json';

  map.addSource('regions', {
    type: 'geojson',
    data: urlRegions,
  });

  var regionsLayer = map.addLayer({
  'id': 'regionsLayer',
  'type': 'fill',    /*define the type of layer fill, line, point, fill-extrusion, background, raster, circle*/
  'source': 'regions',
  'layout': {
    'visibility': 'visible'
  },

  /*there are many options for styling - this is a simple style*/

  'paint': {
    'fill-color': '#a2c6db',
    'fill-outline-color': '#ffffff',
    'fill-opacity': 0.9
  }
});

  var urlDistricts = 'https://raw.githubusercontent.com/nikikokkinos/GR_Data/master/GR_DistrictsSimplified.json'

  map.addSource('districts', {
    type: 'geojson',
    data: urlDistricts,
  });

  var districtsLayer = map.addLayer({
    'id': 'districtsLayer',
    'type': 'fill',    /*define the type of layer fill, line, point, fill-extrusion, background, raster, circle*/
    'source': 'districts',
    'layout': {
      'visibility': 'visible'
    },

    /*there are many options for styling - this is a simple style*/

    'paint': {
      'fill-color': 'white',
      'fill-outline-color': 'black',
      'fill-opacity': 0.9
    }
  });
});

// mapbox gl js navigation control
var nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'top-right');

// mapbox geocoder
map.addControl(new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
}));

// var layers = [regionsLayer, districtsLayer];
//
// L.control.layers(layers).addTo(map);


// var baselayers = {
//   'Regions Layer': regionsLayer,
//   'Districts Layer': districtsLayer,
// };
//
// L.control.layers(baselayers).addTo(map);

// var layers = [ 'regionsLayer', 'districtsLayer' ];

// var toggleableLayers = [ 'regionsLayer', 'districtsLayer' ];
//
// for (var i = 0; i < toggleableLayers.length; i++) {
//   var id = toggleableLayers[i];
//
//   var link = document.createElement('a');
//   link.href = '#';
//   link.className = 'active';
//   link.textContent = id;
//
//   link.onclick = function (e) {
//   var clickedLayer = this.textContent;
//   e.preventDefault();
//   e.stopPropagation();
//
//   var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
//
//   if (visibility === 'visible') {
//   map.setLayoutProperty(clickedLayer, 'visibility', 'none');
//   this.className = '';
//   } else {
//   this.className = 'active';
//   map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
//   }
//   };
//
// var layers = document.getElementById('menu');
// layers.appendChild(link);
// }
