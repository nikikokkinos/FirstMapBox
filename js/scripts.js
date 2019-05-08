mapboxgl.accessToken = 'pk.eyJ1IjoibmlraTEyc3RlcCIsImEiOiJjanZlNGFneWswMm0zNDRxcGYwZXYwcjl2In0.fWV3JfWN5hg9UFqDimwIZw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/niki12step/cjvfptvqghlsn1fs3e3lmh40l',
  center: [23.389893, 38.298559],
  zoom: 5.6,
  minZoom: 3,
});

// map.addSource('regions', {
//   background-color:
// });

// map.on("load", function() {
//   map.addLayer("regions")});
