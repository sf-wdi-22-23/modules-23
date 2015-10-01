# The DOM and jQuery

| Objectives |
| :--- |
| Manipulate the DOM using jQuery |
| Select DOM elements using jQuery selector functions |
| Detect DOM events with event listeners and trigger changes |
| Detect form submissions and display submitted data |

### Motivation (Why?)

jQuery is a commonly used, powerful and convenient library.
Long story short, it will make your life easier.

The slogan for jQuery is "Write less, do more", and this Javascript library delivers. A craftsman needs tools. jQuery is a great toolbox that provides a lot of convenient functions that are easy to use (as opposed to handwriting them in vanilla Javascript).

### Analogy (What?)

jQuery is your toolbox. It provides a ton of helpful methods that make life easier.
Would you rather use a handsaw or a chainsaw? A screwdriver or a drill?

![toolbox](http://westsideinternalmed.com/wp-content/uploads/2015/02/Toolbox.jpg)

jQuery takes common operations in Javascript and makes them easier to write and read the same way power tools
make construction tasks easier.

### Another Analogy (What?)

* HTML = Skeleton
* Javascript = Muscles, Brain, and Organs
* CSS = Skin and Clothes

![muscles](https://github.com/sf-wdi-19-20/modules/blob/master/w1_d4_2_dom_vanilla_js/muscles.jpg?raw=true)

### Select Elements

Get the first matching DOM element by selector
```
var h1Element = $("h1") // or jQuery('h1')
var myId = $("#myId") // or jQuery('#myId')
```

Get all matching DOM elements by selector
```
var primaryButtons = $(".btn-primary");
```

--------------------------------------------------------

Get DOM element by id
```javascript
// Javascript
var el = document.getElementById("myId");
// jQuery
var el = $('#myId');
```

Get DOM elements by class
```javascript
// Javascript
var arr = document.getElementsByClassName("myclass");
// jQuery
var arr = $('.myclass');
```

Get DOM elements by HTML tag
```javascript
// Javascript
var el = document.getElementsByTagName("h1");
// jQuery
var el = $('h1');
```

#### Add Dynamic Changes to Events with Functions
Add a function
```javascript
// Javascript
el.addEventListener("click", function() {
  alert("you clicked the element this listener is attached to");
});

// jQuery
el.on('click', function() {
  alert("Your click triggered this listener!");
})

// Other Event Listeners
// "mouseenter"
// "mouseleave"
// "submit"
```

Change or add a style attribute value
```javascript
// Javascript
var arr = document.getElementsByClassName('text-good');
// console.log(arr)

for(i = 0; i < arr.length; i++) {
    console.log(i)
    console.log(arr[i]);
    arr[i].style.color = "green"
    // arr[i].style.display= "none" // hide the element
}

// jQuery
var arr = $('text-good');
arr.each(function(index) {
  $(this).text("number " + index);
  $(this).css("color", "blue");
})
```

Change text
```javascript
// Javascript
el.innerText = "New Text!"

// jQuery
el.text("New text!")
```

Add class
```javascript
// Javascript
el.classList.add("danger");

// jQuery
el.addClass("danger");
```

Prevent Default Behavior
```javascript
// Javascript
var button = document.querySelector("a#san-francisco_cta");
button.onclick = function(e){
    event.preventDefault(); // SUPER IMPORTANT PART
    alert("Hahah! Now you get me instead")
};

// jQuery
var button = $('a#san-francisco_cta');
button.on('click', function(e) {
    event.preventDefault(); // SUPER IMPORTANT PART
    console.log("if you see this message in your Dev Tools console, then your prevent default is working");
})
```

### Demo (set up new project and adding jQuery CDN)

1. `cd ~/dev`
1. Make a new directory: ```mkdir intro-jquery```
2. Change directories to the one you just made: ```cd intro-jquery```
3. Create three files: ```index.html```, ```styles.css```, and ```scripts.js```. Use the ```touch``` command followed by the file name, like this: ```touch index.html```.
4. Add the jQuery CDN link to the ```<head>``` tag in your ```index.html``` file. Use a script tag to include it like this:
```<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">```

  It should look like this:

    ```html
    <html>
    <head>
      <title>Your Page</title>      
      <!-- BOOTSTRAP -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

      <!-- LOCAL CSS -->
      <link rel="stylesheet" href="styles.css">

      <!-- REMOTE SCRIPT (FROM CONTENT DELIVERY NETWORK (CDN)) -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

      <!-- LOCAL SCRIPTS -->
      <script src="scripts.js"></script>
    </head>
    <body>
      <!-- YOUR HTML with CSS classes and ids -->
    </body>
    </html>
    ```
1. Add this code to your `scripts.js`:
  ```js
  $(document).ready(function(){
    //Your custom jQuery goes here
    //This function will fire when your DOM is finished loading
  });
  ```
5. Add some basic HTML with ids and classes to your ```index.html``` file. *Don't worry about styling it, you can do that later.*
6. Open your page in the browser from your terminal using ```open index.html```
7. Play around with jQuery by selecting and manipulating DOM elements. You can do this directly in the Developer Tools console.
```js
$('div').append("<p>This string was appended.</p>");
$('div').css("color", "blue");
```

# Further Reading

  * [Getting started with selectors [MDN]](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors)
  * [Selectors with multiple classes and ids [CSS Tricks]](https://css-tricks.com/multiple-class-id-selectors/)
