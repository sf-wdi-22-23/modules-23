#Google Maps API Homework

The following samples provide a broad overview of some of the most useful features of the Google Maps Javascript API. Take a look at them one at a time, but don't feel like you have to copy and recreate them.

For your homework, you have been given a directory of code called 'starter-project'. By default this code points to scripts.js which includes the Javascript for the first example, Simple Map.

Your assignment is to read through the samples below and choose any six (6) to combine into one project. In some cases you don't have to understand everything that's happening if you copy and paste the code carefully. However, you do have to understand enough to know what data is needed for each function, method or object and making sure the variable storing that data is passed around properly. Pay special attention to what happens inside the initialize function, versus what happens outside of that function. Also know that some features, such as geolocation will not work unless you can upload the code to a webserver. Google Maps API logs lots of warnings and errors in the console, so make sure to check it often.


####simple map:
The most basic map requirements include a map center (latitude and longitude), a zoom level and an id in your HTML where the map will show. Some integrations of Google Maps (such as jQuery Mobile) break when you use height: 100%, so stick to a pixel value.

<a href="https://developers.google.com/maps/documentation/javascript/examples/map-simple">Simple Map</a>


####signed-in maps
Of course Google wants your user's data. I have mixed feelings about Signed-in maps, but it is super easy to implement and it does enable some features of the API that are otherwise restricted. (See places search box below.)

<a href="https://developers.google.com/maps/documentation/javascript/examples/save-simple">Signed In Maps</a>

####styled maps:
Google Maps API lets you use a stylers array to change the colors and display properties of myriad features.

<a href="https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-simple">Simple Styles</a>

To change the styles, go to Snazzy Maps and replace the stylers array in the sample code above. (This is the only link in the homework outside of Google Maps API reference:)
<a href="https://snazzymaps.com/">Styled Maps</a>

####simple markers:
When you want to add a marker to your map, you will likely use a second point (latitude and longitude). From now on we'll call a point a ```latlng```.

<a href="https://developers.google.com/maps/documentation/javascript/examples/marker-simple">Simple Markers</a>

####simple marker icons:
If you have a brand, you probably want to make custom icons. This is not really a technical challenge, but useful info.

<a href="https://developers.google.com/maps/documentation/javascript/examples/icon-simple">Simple Marker Icons</a>

####info windows:
InfoWindows display content in an html string. It is best practice to introduce an event handler to show and hide this content when a user clicks a corresponding marker.

<a href="https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple">InfoWindows</a>

####geolocation:
Geolocation invites your user to send their device location to the Maps API. The user must grant permission for this service to work.

<a href="https://developers.google.com/maps/documentation/javascript/examples/map-geolocation">Geolocation</a>

####geocoding:
The geocoding service provides directions between two ```latlng``` objects with or without geolocation. You can also add more ```latlng``` waypoints.

<a href="https://developers.google.com/maps/documentation/javascript/examples/directions-simple">Geocoding</a>

####directions panel:
The directions panel offers the user step-by-step navigation. There are many options here, some of which are more useful than others.

<a href="https://developers.google.com/maps/documentation/javascript/examples/directions-panel">Directions Panel</a>

####directions complex:
The more generic we make our functions, the more flexible they become. Oddly, it's complicated to make things simpler. In this example the user can view different sets of directions by changing the start point and end point, dynamically.

<a href="https://developers.google.com/maps/documentation/javascript/examples/directions-complex">Directions Complex</a>

####places search box:
The places search box is relatively new to the Javascript API. This gives the user the ability to find scads of data based on paramaters that you can control. Type in 'Starbucks' or 'hotels' and see what happens.

Last time I checked this feature was only available when users are signed in.

<a href="https://developers.google.com/maps/documentation/javascript/examples/places-searchbox">Places Search Box</a>

####A little bit harder, now:
By now you might feel pretty comfortable extending the functionality of your Google Maps project. Click around and feel free to try something else. Heat maps are cool, but you'll need some JSON data. Adding and removing markers is great, if that meets a user need. An overlay is helpful when you want to constrain the outer limits of your map or conceal Google's map display with a custom image where roads, etc are not reuqired (think: zoo map).

Good luck and have fun!

