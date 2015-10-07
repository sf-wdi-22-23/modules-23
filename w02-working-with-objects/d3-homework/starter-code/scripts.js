var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF
    zoom: 8
  });
}