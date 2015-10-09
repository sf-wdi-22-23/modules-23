####Please use the homework submission instructions from the 22-homework or 23-homework repo to submit two to five sentences about something cool you learned about jquery from the homework below.

#jQuery and the DOM

| Objectives |
| :---- |
| Get comfortable with Chrome Developer Tools and the Console |
| Select elements from the page using CSS Selectors |
| Perform basic DOM manipulations using jQuery |

#### Chrome Developer Tools
Please take a quick look at the following documentation for the [Chrome Developer Console](https://developer.chrome.com/devtools), specifically the [Elements tab](https://developer.chrome.com/devtools/docs/dom-and-styles), and the [Console tab](https://developer.chrome.com/devtools/docs/console) (Max 20 minutes). This is one of the most important tools in your developer toolbelt.

#### What is the DOM?
DOM stands for Document Object Model. It's a fancy way of describing what's going on in your browser when you visit a website. You may think that a website is just a chunk of html, css, and javscript. But between it being pure data (text), and it being a rendered page that you can explore, there's an important intermediate step. It turns out that everything you interact with inside of your browser can be represented as a javascript `object`. For example, this paragraph is an object, and it's full of information about being an html `p` tag.

##Intro to jQuery
jQuery is just JavaScript! It was invented in 2005 and has made our lives as developers better ever since.

We use jQuery because it's:

- Convenient: solves problems developers commonly face.
- Less Buggy: ensures javascript DOM manipulation works the same, cross-browser.
- Modern: brings javascript DOM manipulation into the 21st century.
- Popular: 26.95% of all sites use jQuery! (see Builtwith.com).

But some would argue, [you might not need jQuery](http://youmightnotneedjquery.com/)! It can be overkill, depending on what you're doing! (Optional reading)

#### How to get jQuery
You can only use jQuery if it's included in your page.

The quickest way to include jQuery in your project is to grab the jQuery library using a "CDN" (a blazing fast "content delivery network") and dropping it into a script tag in the head of your html (just google "jQuery cdn" and copy paste!):
``` html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    </head>
    <body>
        <!-- Nothing here yet! -->
    </body>
</html>

```

Sites like: github.com, css-tricks.com, and jquery.com (!) all include the jQuery library on their page. This means all you have to do is open up your Chrome Developer Console on one of those sites, and you can start playing with jQuery on the page!

#### jQuery is just Javascript
Everything you do in jQuery can be done in pure/vanilla javascript.

Take a look at the [raw jquery library](http://code.jquery.com/jquery-2.1.3.js) (it's just a bunch of javascript!).

#### Using jQuery
You know you're working with jQuery any time you see a `$` in your code.

As you're working with jQuery to manipulate DOM elements, you are almost always either *getting* or *setting* a value. Memorize this pattern:  
- `$("CSS Selector").someJqueryMethodName()` - **getting** a value
- `$("CSS Selector").someJqueryMethodName(setterValue)` - **setting** a value

For example, if you are viewing this readme on github.com, then you can try the following in your Chrome Developer Console:  
- `$('article').text()` -- **get** the text of the readme (it lives inside of an `article` tag)
- `$('article').text("Boo!")` -- **set** the text of the readme to "Boo!"

Wowa!

Let's try another:  
- `$('article').css("background-color")` -- **get** the background color
- `$('article').css("background-color", "blue")` -- **set** the background color to blue.

#### Documentation
Check out the `.text()` and `.css()` methods in the jQuery API Documentation: [text](http://api.jquery.com/text/), [css](http://api.jquery.com/css/).
- Pay close attention in the documentation: there's one section that talks about how to "get" text, and there's another section that talks about how to "set" text.
- `.text()` and `.css()` are not native javascript methods! They only work on jQuery-wrapped DOM Elements (that's what that `$` is doing).

For more cool DOM manipulation tricks, you'll need to hit the docs (Max 25 min):
- jQuery API [Documentation]([jquery.com](jquery.com))
    - [Manipulation Methods](http://api.jquery.com/category/manipulation/)
    - [Tree Traversal Methods](http://api.jquery.com/category/traversing/)

The more you struggle with this kind of documentation, the stronger your coding-chops will become!

## Exercises
- Try this fun little introduction to jQuery: [Learning jQuery with Street Fighter and Hadoukens](https://www.thinkful.com/learn/intro-to-jquery) (maximum 30 minutes)
- Bonus: [CSS Diner](https://flukeout.github.io) the CSS Selector Game.
