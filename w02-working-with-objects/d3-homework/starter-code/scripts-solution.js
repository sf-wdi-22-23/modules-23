$(document).ready(function() {
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;
    var pos = {lat: 37.783465, lng: -122.447585};

    var gasf = new google.maps.LatLng(37.790841, -122.401280);

    function initMap() {
        directionsDisplay = new google.maps.DirectionsRenderer();
        map = new google.maps.Map(document.getElementById('map-canvas'), {
            center: pos,
            zoom: 13
        });
    }

    initMap();
    directionsDisplay.setMap(map);

    var image = 'ga_cog.png';

    var contentString = "<h2>General Assembly</h2>" + 
    "<p>Transforming thinkers into creators</p>" + 
    "<h3>Hello, San Francisco!</h3>" + 
    "<a href='https://generalassemb.ly/san-francisco' target='_blank'>Visit Page</a>";

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

  navigator.geolocation.getCurrentPosition(function(position) {
        pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var youAreHere = new google.maps.Marker({
          position: pos,
          map: map,
          title: "You are Here."
        });

        map.setCenter(pos);
        calcRoute();
    }, function() {
      handleNoGeolocation(true);
    });

    var calcRoute = function() {
      var start = pos;
      var end = gasf;
      var request = {
        origin:pos,
        destination:end,
        travelMode: google.maps.TravelMode.WALKING
      };
      directionsService.route(request, function(request, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(request);
        }
      });
    };

    var markerWithInfoWindow = new google.maps.Marker({
        position: gasf,
        map: map,
        title: "General Assembly",
        icon: image
    });

    markerWithInfoWindow.addListener('click', function() {
        infowindow.open(map, markerWithInfoWindow);
    });
});