// when the document is ready, call this function
$(document).ready(function() {
    // your code here
    // define map to be globally available
    var map;
    // define function to create new Map using Google Maps API
    function initMap() {
        // make an instance of the Google Maps 'Map' object using constructor function
        // passing the HTML element with an id of 'map-canvas' as a parameter
        // and a Javascript object for configuring the map that specifies
        // the center of the map and level of zoom
        map = new google.maps.Map(document.getElementById('map-canvas'), {
            center: {
                lat: -34.397,
                lng: 150.644
            },
            zoom: 8
        });
    }
    // invoke function to create map
    initMap();

    // specify image for later use
    var image = 'ga_cog.png';

    // make an instance of the Google Maps 'Marker' object using constructor function
    // passing Javascript object to configure the marker's position, which map to place it on, and what image to use for the marker icon
    var newMarker = new google.maps.Marker({
        position: {
            lat: -33.890,
            lng: 151.274
        },
        map: map,
        icon: image
    });

    // content for the info window
    var contentString = "<div class='infowindow'><h2>InfoWindow</h2>" + "<p>This InfoWindow opened because you clicked on the marker it that has an event listener which accepts the marker itself and the map as parameters for <code>.open</code> callback.</p>" + "<h3>Marker</h3>" + "<p>The Marker is instantiated using a configuration object which you can customize to specify position, title, image, map, and other properties.</p></div>"
        // instantiate a new InfoWindow instance, passing configurable Javascript object to set the content
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


/////////////////////
// The following geolocation code does not work
// 'pos' is undefined because the
////////////////////
    // check for geolocation and set position if possible
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         var pos = {
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude
    //         };
    //     })
    // }
/////////////////////

    // create another marker, with a position in Brooklyn, NY
    // swap in 'pos' after restructuring code to find location
    // before initializing map, or reload map in geolocation callback
    var markerWithInfoWindow = new google.maps.Marker({
        position: {lat: 40.674, lng: -73.946}, // pos
        map: map,
        title: "General Assembly"
    });

    // attach event listener to markerWithInfoWindow
    // callback
    markerWithInfoWindow.addListener('click', function() {
        infowindow.open(map, markerWithInfoWindow);
    });
});