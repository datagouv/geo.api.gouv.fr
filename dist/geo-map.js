function getLocation() {
  if (navigator.geolocation) {
    document.getElementsByClassName('green button')[0].style.display = "none";
    document.getElementsByClassName('loader')[0].classList.add('active');
    return navigator.geolocation.getCurrentPosition(locateUser);
  }
}

function initMap() {
    var options = {center : new L.LatLng(46.921982, 2.978952), zoom : 5 };

    var osmUrl = 'https://tilecache.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
                osmAttribution = 'Map data &copy; 2012 OpenStreetMap contributors',
                osm = new L.TileLayer(osmUrl, {maxZoom: 18, attribution: osmAttribution});

    var mapLayer = new L.TileLayer(osmUrl);
    this.map = new L.Map('mapid', options).addLayer(mapLayer);
}

function locateUser(position) {
  var r = 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;

  fetch('https://geo.api.gouv.fr/communes?fields=code,nom,codesPostaux,surface,population,centre,contour&' + r)
  .then(function(response) {
    if (response.ok) {
      return (response.json());
    }
  })
  .then(function(json) {
    var commune = json[0];
    L.geoJson()
      .addData({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [position.coords.longitude, position.coords.latitude]
        }})
      .addData(commune.contour)
      .addTo(this.map);
    this.map.setView([position.coords.latitude, position.coords.longitude], zoom=12);
    document.getElementById("nom").innerHTML = commune.nom;
    document.getElementById("code").innerHTML += commune.code;
    document.getElementById("codesPostaux").innerHTML += commune.codesPostaux.join(', ');
    document.getElementById("population").innerHTML += commune.population;
    document.getElementById("surface").innerHTML += commune.surface;
    document.getElementById("gps").innerHTML += '</br>longitude: ' + commune.centre.coordinates[0] + '</br>latitude: ' + commune.centre.coordinates[1];
  })
  .then(function() {
    document.getElementsByClassName('loader')[0].classList.remove('active');
    document.getElementById('commune').style.display = "block";
  })
  .catch(function(error) {
    document.getElementsByClassName('loader')[0].classList.remove('active');
    document.getElementsByClassName('button')[0].style.display = "block";
    console.log('There has been a problem with your fetch operation: ' + error.message);
});
}

var map = null;
initMap();
