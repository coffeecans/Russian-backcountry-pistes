mapboxgl.accessToken = 'pk.eyJ1IjoiY29mZmVlY2FucyIsImEiOiJjaW0wa3h2MDUwMGludjltNGVobHExMmZ3In0.QMqBfT0pupdAritKkq4j8g';
var start = [51.842248,50.277898];
var startZoom = 3.98;
var speed = 2.4;
var next = [
  {
    name: "Sochi",
    place: [40.261574,43.664931],
    zoom: 11.37,
    speed: speed,
    bearing: 30,
    pitch: 25
  },
  {
    name: "Cheget",
    place: [42.494472,43.293130],
    zoom: 11.36,
    speed: speed,
    bearing: -30,
    pitch: 15
  },
  {
    name: "Donbai",
    place: [41.647406,43.288654],
    zoom: 13.01,
    speed: speed,
    bearing: -40,
    pitch: 25
  },
  {
    name: "Abzakovo",
    place: [59.595377,55.122003],
    zoom: 11.34,
    speed: speed,
    bearing: -40,
    pitch: 25
  }
];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/coffeecans/cim56cv4n013mccm3usc4zvn4',
  center: start,
  zoom: startZoom,
  interactive: true
});

map.addControl(new mapboxgl.Navigation({position: 'top-left'}));

var isAtStart = true;
var go = 0;
var speed = 1.5;
var slope;

function fly(e) {

  var target = isAtStart ? next : start;
  var newZoom;
  isAtStart = !isAtStart;
  slope = e;

  if (slope=='sochi') {
    target = next[0].place;
    newZoom = next[0].zoom;
    newSpeed = next[0].speed;
    newBearing = next[0].bearing;
    newPitch = next[0].pitch;
  } else if (slope=='cheget') {
    target = next[1].place;
    newZoom = next[1].zoom;
    newSpeed = next[1].speed;
    newBearing = next[1].bearing;
    newPitch = next[1].pitch;
  } else if (slope=='donbai') {
    target = next[2].place;
    newZoom = next[2].zoom;
    newSpeed = next[2].speed;
    newBearing = next[2].bearing;
    newPitch = next[2].pitch;
  } else if (slope=='abzakovo') {
    target = next[3].place;
    newZoom = next[3].zoom;
    newSpeed = next[3].speed;
    newBearing = next[3].bearing;
    newPitch = next[3].pitch;
  }

  map.flyTo({
    center: target,
    zoom: newZoom,
    bearing: newBearing,
    pitch: newPitch,
    speed: newSpeed, // make the flying slow
    curve: 0.8, // change the speed at which it zooms out
    easing: function (t) {
      return t;
    }
  });
}
