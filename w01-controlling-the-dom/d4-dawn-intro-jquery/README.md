# Intro jQuery

| Objectives |
| :--- |
| Understand what jQuery is and why it is helpful. |
| Add jQuery event listeners to DOM elements. |
| Use jQuery to manipulate DOM elements styling and content. |
| Have fun! :D |

## Why jQuery?

The slogan for jQuery is "Write less, do more", and this Javascript library delivers. A craftsman needs tools. jQuery is a great toolbox that provides a lot of convenient functions that are easy to use (as opposed to handwriting them in vanilla Javascript).

Some examples of useful things jQuery makes easier or faster to write than when using vanilla Javascript:

- Finding an element based on its Id

```javascript
// Javascript
document.getElementById('about');
```
```javascript
// jQuery
$('#about');
```

- Changing multiple element's colors

```javascript
// Javascript
var descriptions = document.getElementsByClassName('description');
// returns an array of HTML elements with the class 'description'
for (var i = 0; i < descriptions.length; i++) {
descriptions[i].style.color = "green";
}
// iterating over the collection and changing each element's color
```

```javascript
// jQuery
$('.description').css("color", "red");
// applies changes to all elements found with the class 'description'
//
```

- Adding event listeners

```javascript
// Javascript
var header = document.getElementsByTagName('header')[0]; // selecting first element because getElementByTagName returns an array
header.addEventListener(eventName, eventHandler);
// eventName would be something like 'click', 'mouseup', etc.
// eventHandler would be a function you defined elsewhere

header.addEventListener('click', function() {
   console.log("You clicked the header");
})
```

```javascript
// jQuery
$('header').on(eventName, eventHandler);
// eventName would be something like 'click', 'mouseup', etc.
// eventHandler would be a function you defined elsewhere

$('header').on('click', function() { alert('Header clicked!')})
```

- Making an AJAX request to POST data

```javascript
// Javascript
var request = new XMLHttpRequest();
// instantiate request object
request.open('POST', '/my/url', true);
// configure request object with type, url, and boolean value
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
// set headers for request
request.send(data); // data is likely a JSON object
// send request, passing data as a parameter
```

```javascript
// jQuery
$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data // data is likely a JSON object
});
// Same as above, but with less configuration
```



### Demo (set up new project and adding jQuery CDN)

1. Make a new directory: ```mkdir intro-jquery```
2. Change directories to the one you just made: ```cd intro-jquery```
3. Create three files: ```index.html```, ```main.css```, and ```scripts.js```. Use the ```touch``` command followed by the file name, like this: ```touch index.html```.
4. Add the jQuery CDN link to the ```<head>``` tag in your ```index.html``` file. Use a script tag to include it like this:
```<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">```

It should look like this:

```html
<html>
<head>
  <title>Your Page</title>
  <!-- LOCAL SCRIPTS -->
  <script src="scripts.js"></script>

  <!-- REMOTE SCRIPT (FROM CONTENT DELIVERY NETWORK (CDN)) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
</head>
<body>
  <!-- YOUR HTML with CSS classes and ids -->
</body>
</html>
```

5. Add some basic HTML with CSS ids and classes to your ```index.html``` file. *Don't worry about styling it, you can do that later.*
6. Open your page in the browser from your terminal using ```open index.html```
7. Play around with jQuery by selecting and manipulating DOM elements. You can do this directly in the Developer Tools console.

## Base Challenges

- Change the text content of General Assembly's homepage header using jQuery.
> *Use ```CMD+Shift+U``` and look at the source code or use the Dev Tools if you are having trouble finding the classes / ids / HTML tags you want to change*
- Add an event listener to a DOM element. Include a callback function that fires when that event is triggered
- Select and change multiple elements at once with jQuery

## Stretch Challenges
- make something happen (e.g., write a function to be invoked) when your page loads using jQuery's ```document.ready``` function
- Change multiple DOM elements at once using vanilla Javascript
- Make a HTTP get request to a 3rd-party API using jQuery's $.ajax() function
> *Ask an instructor if you have trouble finding an open API*
- Help out a cohort-mate – you're all in this together! :)

## Additional Resources (optional)
- [Workshop/jQuery intro from John Resig, creator of jQuery](http://ejohn.org/apps/workshop/intro/)
