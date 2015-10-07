$(document).ready(function() {
    // you can define global variables here and then change their values inside the functions below, for example var pos = {};

    // define map to be globally available
    var map;

    // define function to create new Map using Google Maps API
    function initMap() {

        /* Make an instance of the Google Maps 'Map' object using constructor function
         passing the HTML element with an id of 'map-canvas' as a parameter
         and a Javascript object for configuring the map that specifies
         the center of the map and level of zoom. (The center point below is Trader Joe's
         on Masonic.)  */

        map = new google.maps.Map(document.getElementById('map-canvas'), {
            center: {
                lat: 37.783465, 
                lng: -122.447585
            },
            zoom: 13
        });
    }

    // Invoke the initialize function to create map
    initMap();

    // Specify image for later use
    var image = 'ga_cog.png';


    /* Make an instance of the Google Maps 'Marker' object using constructor function
     passing Javascript object to configure the marker's position, which map to place it on, 
     and what image to use for the marker icon:  */

    var newMarker = new google.maps.Marker({
        position: {
            lat: 37.790841, 
            lng: -122.401280
        },
        map: map,
        icon: image
    });

    // Content for the info window is a concatenated HTML string
    var contentString = "<div class='infowindow'><h2>InfoWindow</h2>" + "<p>This InfoWindow opened because you clicked on the marker it that has an event listener which accepts the marker itself and the map as parameters for <code>.open</code> callback.</p>" + "<h3>Marker</h3>" + "<p>The Marker is instantiated using a configuration object which you can customize to specify position, title, image, map, and other properties.</p></div>"

    // Instantiate a new InfoWindow instance, passing configurable Javascript object to set the content
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


/////////////////////
// The following geolocation code does not work
// in part because 'pos' is undefined...
////////////////////

    // Check for geolocation and set position if possible
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //         pos = {
        //             lat: position.coords.latitude,
        //             lng: position.coords.longitude
        //         };
        //     })
        // }

/////////////////////

    /* Create another marker, with a position in General Assembly, SF
     swap in 'pos' after restructuring code to find location
     before initializing map, or reload map in geolocation callback */

    var markerWithInfoWindow = new google.maps.Marker({
        position: {lat: 37.790841, lng: -122.401280}, // pos
        map: map,
        title: "General Assembly"
    });

    // Attach event listener to markerWithInfoWindow callback

    markerWithInfoWindow.addListener('click', function() {
        infowindow.open(map, markerWithInfoWindow);
    });
});