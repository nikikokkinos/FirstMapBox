mapboxgl.accessToken = 'pk.eyJ1IjoibmlraTEyc3RlcCIsImEiOiJjanZlNGFneWswMm0zNDRxcGYwZXYwcjl2In0.fWV3JfWN5hg9UFqDimwIZw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [23.389893, 38.298559],
  zoom: 5.6,
  minZoom: 3,
});

map.on('load', function() {
  var url = 'https://raw.githubusercontent.com/nikikokkinos/GR_Data/master/GR_Regions.geojson';
  map.addSource('regions', {
    type: 'geojson',
    data: url,
  });

  map.addLayer({
  'id': 'regionsLayer',
  'type': 'fill',    /*define the type of layer fill, line, point, fill-extrusion, background, raster, circle*/
  'source': 'regions',
  'layout': {
    'visibility': 'visible'
  },

  /*there are many options for styling - this is a simple style*/

  'paint': {
    'fill-color': 'skyblue',
    'fill-outline-color': 'white',
    'fill-opacity': 0.9
  }
});
});
