---
title: Well-structured HTML Architecture
type: lesson
duration: "1:25"
creator:
    name: Ben Hulan
    city: SF
competencies: HTML and CSS
---

### Objectives
*After this lesson, students will be able to:*

- Hand-code well-structured HTML documents
- Understand grid-based HTML structure
- Write better CSS
- Debug CSS more quickly


// pick up here
// add ducky.html
// add css/style.css
// add js/scripts.js


### Preparation

*Before this lesson, students should already be able to:*

- Write HTML and CSS
- ...or at least they have already read the homework from last night

> Note: As instructors demonstrate different CSS properties, be sure to explain and point out the property being used.

## What is CSS? Intro (5 mins)

If HTML is a set of instructions telling the browser what to display, CSS tells it how to display it.

CSS stands for:

- **C**ascading
- **S**tyle
- **S**heet

It provides the browser with precise instructions on how to style each element we want displayed on the page and can affect the text format - like font, size, color - the size and position of various objects on the page, colors, spacial layouts, etc. There are literally hundreds of different properties we can use to style HTML elements on a webpage.

## Let's write some CSS - Codealong (20 mins)

Create a new folder with a HTML page:

```bash

$ mkdir css-basics
$ cd css-basics
$ touch index.html

```

First, add a basic HTML structure to your `index.html` file:

```html

 <!DOCTYPE>
 <html>
   <head>
	 <title>Intro to CSS</title>
   </head>
 <body>
 </body>
 </html>
```

####Adding CSS

There are three different ways to use CSS to style your HTML:

- External style sheet
- Internal Style sheet
- Inline style

Let's take a look at each one.

#### Inline CSS

If you're looking to add a unique style for a single HTML element, you can use an inline style.  It can also be used to test different styles, initially, or for quick fixes, as it's much easier to change a single element on the page than to find and change the source CSS file.  

To use inline styles, add the style attribute to the relevant tag. The style attribute can contain any CSS property. The example shows us changing the HTML body's background to red:

```html

 <!DOCTYPE>
 <html>
   <head>
	 <title>Intro to CSS</title>
   </head>
   <body style="background:red">
   </body>
 </html>
```


Open this HTML file in browser and let's see what we have - a red page!

Inline CSS has a lot of downsides, though, so try to avoid using it on your projects and during class.

#### Style Sheets

Style sheets can be written in your HTML (internal) or in a separate CSS file (external).  Whatever style sheet you use, the CSS syntax is the same. We build our CSS with a selector - usually the name of the HTML tag, a specific class of elements, or an element with a unique ID:

```css
selector {
  property_1: value_1;
  property_2: value_2;
}

```

Do not forget the curly brackets or the semi-colon after the value!

The last semi-colon can be omitted but it's optional.


#### Internal Style Sheets

If a _single page_ has a unique style, you could use an internal style sheet - these are defined and written in your HTML using the `<style>`` element, inside the head section of an HTML page:

```html

 <!DOCTYPE>
 <html>
   <head>
   <style>
    body {
      background: black
    }
   </style
	 <title>Intro to CSS</title>
   </head>
 <body>
 </body>
 </html>

```

Just like before, if you open the index.html with your browser, you'll notice the body background has changed. We've selected the body element and instructed the browser to color it black.


#### External Style Sheets

With just one file - your external style sheet - you can modify the styles of your entire website.  That's really powerful and helps keep your code organized and separate.

To link the stylesheet to the HTML file, inside the `<head>` tags, we need to add a self-closing `<link>` tag, indicating the type of relations (`rel="stylesheet"`) and the file path.  But first, let's create a css file within our css directory.

```bash

mkdir css
touch css/style.css

```

Then we can move the CSS from our internal style sheet to our external style sheet and add the file path (`href="style.css"`) to our HTML file:

```html
 <!DOCTYPE>
 <html>
   <head>
	 <title>Intro to CSS</title>
   <link rel="stylesheet" href="style.css">
   </head>
 <body>
 </body>
 </html>

```


We often have a specific folder for stylesheets, as we can have several in one application, and we're doing that now with our `/css` folder.

#### We need to create a css file

```bash
touch style.css
```

And let's add some more html to our index.html:


```html

 <!DOCTYPE>
 <html>
   <head>
	 <title>Intro to CSS</title>
   <link rel="stylesheet" href="style.css">
   </head>

   <body>
     <p>This is a paragraph element</p>

     <div>This is a DIV</div>
     <div>This is another DIV</div>
   </body>

 </html>
```


Now, let's add the CSS we had - plus some more - to our stylesheet file:

```css

body {
  background: red
}

p {
  color: orange;
}

div {

    border-width: 1px;
    border-style: solid;
    border-color: black;

}

```

Our body rule is still applied, and these new rules will change the color of all paragraph tags to have the font-color "orange" and add a 1px black border to each DIV on the page, since the selector targets the "div" elements.  Refresh your browser and check it out.

Luckily for us, CSS gives us some nice shortcuts that we'll go over throughout this lesson, and we can combine the `div` border styles into this:

```css

  border: 1px solid black;
  /*border-width: 1px;
  border-style: solid;
  border-color: black;*/
```

Notice, we can comment out CSS with ``/* your css */`.

## Differences between Classes and IDs - Demo (15 mins)

#### The Class Selector

The class selector finds elements with a specific class, and as an attribute, class allows us to target several elements that may share similarities. Note that:

- Classes are **NOT** unique
- You can use the same class on multiple elements
- You can use multiple classes on the same element
- You can select a class using `.class-name {}`

Watch me add some HTML to our index.html and then style those elements by selecting the classes associated with them:

```html
<!DOCTYPE>
<html>
  <head>
  <title>Intro to CSS</title>
  <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <p>This is a paragraph element</p>

    <div>This is a DIV</div>
    <div>This is another DIV</div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

  </body>

</html>


```

Now, for the style:

```css

body {
  background: read
}

p {
  color: orange;
}

div {
  border: 1px solid black;
}

.comments {
	font-weight: bold;
	color: #64FE2E; /* green */
}
```

If I refresh my browser, I see the updates.  The browser selects all elements on the page with the `comments` class and alters the font-weight and color.

####The ID Selector

The ID selector uses the id attribute of an HTML tag to find one specific element. We can give any name we want to our ID attribute, besides the obvious reserved words, such as tag names, etc.

- An ID is **unique** within a page.
- You should use the id selector when you want to find a single, unique element.
- In the CSS document, you use a hashtag (#) to denote an ID

How about we try it out?  Altering the HTML:

```html

<!DOCTYPE>
<html>
  <head>
  <title>Intro to CSS</title>
  <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <p>This is a paragraph element</p>

    <div>This is a DIV</div>
    <div>This is another DIV</div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <section id="dolphin">
    	I am a dolphin
    </section>

  </body>

</html>

```

And now the style:

```css

body {
  background: read
}

p {
  color: orange;
}

div {
  border: 1px solid black;
}

.comments {
	font-weight: bold;
	color: #64FE2E; /* green */
}

#dolphin {
	font-style: italic;
	color: #0040FF; /*blue*/
}
```

Sweet!

> Note: Explain what happens when more than one element is referenced with the same ID and how we'll get into specificity later.

## Style using Classes and IDs - Independent Practice (10 mins)

Using what we've done in class, open the [starter code](starter-code) provided and see how far you can get through these exercises in 10 minutes:

- make an unordered HTML list of the following animals:  

	- mouse  
	- canary  
	- penguin  
	- salmon  
	- cat  
	- goldfish  
	- dog  
	- sheep  
	- parakeet  
	- tuna  

- make all the mammals red, all the birds blue, and all the fish orange using CSS classes
- apply the following colors to the list using IDs:

    - mouse - <span style = "color: gray">gray</span>
    - canary - <span style = "color: orangeRed">orangeRed</span>
    - penguin - <span style = "color: black">black</span>
    - salmon - <span style = "color: salmon">salmon</span>  
    - cat - <span style = "color: sienna">sienna</span>
    - goldfish - <span style = "color: gold">gold</span>  
    - dog - <span style = "color: tan">tan</span>  
    - sheep - <span style = "color: steelBlue">steelBlue</span>
    - parakeet - <span style = "color: lime">lime</span>  
    - tuna - <span style = "color: purple">purple</span>

- add the following background colors to your existing classes:
    - mammal - lavenderBlush
    - bird - lightGray
    - fish - lightYellow

#### Multiple classes and multiple elements - Codealong (10 mins)

You can also chain classes together, applying several classes to one element:

Let's add:

```html

<!DOCTYPE>
<html>
  <head>
  <title>Intro to CSS</title>
  <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <p>This is a paragraph element</p>

    <div>This is a DIV</div>
    <div>This is another DIV</div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <section id="dolphin">
    	I am a dolphin
    </section>

     <p class="first second">Multiple classes</p>

  </body>

</html>

```

Then, create two classes:

```css
body {
  background: read
}

p {
  color: orange;
}

div {
  border: 1px solid black;
}

.comments {
	font-weight: bold;
	color: #64FE2E; /* green */
}

#dolphin {
	font-style: italic;
	color: #0040FF; /*blue*/
}

.first {
  font-size: 40px;
}

.second {
  color: red;
}
```

As we can imagine, the possibilities are endless. There are many properties and values to work with and many ways to target specific elements. Two pages could have the same HTML content, and yet look dramatically different due to different CSS stylesheets.

We can even use classes/IDs with elements to select and style HTML. Lets add a short unordered list:

```html
<!DOCTYPE>
<html>
  <head>
  <title>Intro to CSS</title>
  <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <p>This is a paragraph element</p>

    <div>This is a DIV</div>
    <div>This is another DIV</div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <section id="dolphin">
    	I am a dolphin
    </section>

     <p class="first second">Multiple classes</p>

     <ul>
      <li class="why" >Why a dolphin?</li>
      <li class="why" id="not">Why not?</li>
     </ul>

  </body>

</html>
```

Imagine, we wanted to particular style to apply to all of the elements from the list but wanted other particular styles to apply to each item, individually. Definitely doable. Take a look at our CSS:

```css
body {
  background: read
}

p {
  color: orange;
}

div {
  border: 1px solid black;
}

.comments {
	font-weight: bold;
	color: #64FE2E; /* green */
}

#dolphin {
	font-style: italic;
	color: #0040FF; /*blue*/
}

.first {
  font-size: 40px;
}

.second {
  color: red;
}

li {
  text-align: center
}

li.why {
  font-family: sans-serif;
}

li#not {
  font-family: serif;
}
```

Now, all our list items are centered but the top item has a different font than the bottom.



## Specificity in CSS - Intro (10 mins)

One of the most important concepts with CSS is specificity. Imagine you select an element by it's class and give it some style; then, on the next line, you select the same element by it's element name and it's ID - how does the browser know what style to apply?  Well, every element gets a score and it's this score that dictates what CSS property is applied.

[Specificity Calculator](http://specificity.keegan.st/)

Every selector has its place in the specificity hierarchy, and if two selectors apply to the same element, the one with higher specificity wins.  Overall, there are four distinct factors that define the specificity level of a given selector: inline styles, IDs, classes+attributes and elements.  You can calculate CSS specificity with CSS Specificity Calculator:

<img src="https://css-tricks.com/wp-content/csstricks-uploads/specificity-calculationbase.png" />

###Calculating specificity

<img src='https://css-tricks.com/wp-content/csstricks-uploads/cssspecificity-calc-1.png' />

*This is calculated as 113*

<img src='https://css-tricks.com/wp-content/csstricks-uploads/cssspecificity-calc-2.png' />


*This is calculated as 23*

<img src='https://css-tricks.com/wp-content/csstricks-uploads/cssspecificity-calc-4.png' />

*This is calculated as 1000*

A couple of rules to think about:

- If two selectors apply to the same element, the one with higher specificity wins
- When selectors have an equal specificity value, the latest rule is the one that counts
- When selectors have an unequal specificity value, the more specific rule is the one that counts
- Rules with more specific selectors have a greater specificity
- The last rule defined overrides any previous, conflicting rules
- The embedded style sheet has a greater specificity than other rules
- ID selectors have a higher specificity than attribute selectors
- You should always try to use IDs to increase the specificity
- A class selector beats any number of element selectors

_Taken from SmahingMagazine.com_

> Note: Read through these briefly with students but ask students to review on their own [here](http://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)


## Independent Practice - Using CSS to select class and id attributes (10 minutes)

Go back to your code from the previous independent practice problem and continue to work through these exercises:

- make the mammals bold
- make the birds italic
- make the fish underlined

- create a new unordered ordered list add a list item for each the following plants:

    - Dogwood Tree
    - Oak Tree
    - Saguaro
    - Kelp
    - Venus Fly Trap
    - Ent

- give all ul's a border with a width of 3 pixels, a color of plum, and a style of dotted. Also, give them a border radius of 5px.
- give all li's a top border of 3 pixels, a color of seagreen, and a style of solid.


## Conclusion (5 mins)

CSS can be really fun or a total nightmare. You have to remember a few rules, but once you have them remembered, it's great to see your webpage come to life as you imagined.

- Describe the differences between classes and IDs.
- Identify the popular CSS properities we used today.
- What are the use cases for inline styling vs. internal/external style sheets?



---
title: CSS Box Model and Positioning
type: lesson
duration: "1:25"
creator:
    name: Alex Chin
    city: London
competencies: HTML and CSS
---

# CSS Box Model and Positioning

### Objectives
*After this lesson, students will be able to:*

- Describe the difference between block, inline, and inline-block elements
- Adjust element spacing using padding and margin
- Create floating elements to position content removed from the standard document flow
- Explain the difference between and use cases of static, relative, fixed, & absolute positioning
- Create a page with multicolumn layout

### Preparation
*Before this lesson, students should already be able to:*

- Write basic CSS
- Write basic HTML
- Use the chrome console

> Note: Solution code for this lesson is built out as the lesson progresses.

## An Intro to The Box Model (5 mins)


All HTML elements can be considered boxes. Even if you see a circle, it's living within a box.

The CSS box model describes this principal - a box wraps around all HTML elements, and it consists of: margins, borders, padding, and the actual content.  This model allows us to place a border around elements and space elements in relation to other elements.

With CSS properties and values, it is possible to apply specific styles to each of these elements, and change the way they behave and/or display on the page.

## Box Model Demo - Codealong (5 mins)

Let's write some HTML we can come back to and use to visualize what we're talking about.

- Create an new directory called `box-model-work`
- Create html page called `index.html` with an externally linked css stylesheet called `main.css`
- Inside your html page create a "container" div holding four divs within.
- Inside our CSS page, make the container a 500px gray square containing 100px squares within that are red, blue, green, and black.

Looking at the html:

```html
<link rel="stylesheet" type="text/css" href="css/style.css">

<div id="container">
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
</div>
```

And the CSS:

```css
#container {
    height: 500px;
    width: 500px;
    background-color: gray;
}
#square1 {
    background-color: red;
    height: 100px;
    width: 100px;
}
#square2 {
    background-color: blue;
    height: 100px;
    width: 100px;
}
#square3 {
    background-color: green;
    height: 100px;
    width: 100px;
}
#square4 {
    background-color: black;
    height: 100px;
    width: 100px;
}
```

Dynamite!  Now, navigate to your dev tools and under the elements tab, hover over each of the divs.  What do you notice? A "box" is being highlighted in your browswer!

How about if we drop this code into our CSS file:


```css
* {
    border: 1px solid red !important;
}
```

Notice the body, the container, and each of the divs are surrounded by a red border.  Peak at the styles tab on the right and scroll all the way to the bottom.  You'll notice boxes within boxes - madness!

## The Box Model and its components - Intro (10 mins)

The image below illustrates the box model and what you should have seen in your dev tools:

![box-model](http://s6.postimg.org/gi8r6c341/css_box_model.png)

_From [www.theslate.org](http://www.theslate.org)_

But what do these different layers mean, and how are they relating to one another?


* **Margin** - clears an area around the border; the margin does not have a background color, it is completely transparent

* **Border** - a border that goes around the padding and content; the border is affected by the background color of the box

* **Padding** - clears an area around the content; the space between the content and the border; the padding is affected by the background color of the box

* **Content** - The content of the box, where text and images appear

#### Layers of the Box Model - Codealong (15 mins)

Let's get go into some more detail and practice with each of these elements of The Box Model.


#### Margin

The margin is the space around the element. The larger the margin, the more space between our element and the elements around it. We can adjust the margin to move our HTML elements closer to or farther from each other.

Let's start with our margins. Adjusting our margins not only moves our element relative to other elements on the page but also relative to the "walls" of the HTML document.

For instance, if we take an HTML element with a specific width (such as our `<div>` in the editor) and set its margin to `auto` - this tells the document to automatically put equal left and right margins on our element, centering it on the page.

If you want to specify a particular margin, to a particular side, you can do it like this:

```css
div {
  margin-top: /*some value*/
  margin-right: /*some value*/
  margin-bottom: /*some value*/
  margin-left: /*some-value*/
}

```
> Note: Demonstrate altering each of these values in the dev tools for the div selector.

You can also set an element's margins all at once: you just start from the top margin and go around clockwise (going from top to right to bottom to left). For instance,

```css
div {
  margin: 1px 2px 3px 4px;
}
```

You can do top-bottom and side side - let's add this to our css for now:

```css
div {
  margin: 0 auto;
}
```

#### Border

We've talked briefly about borders - the border is the edge of the element. It's what we've been making visible every time we set the border property.

Borders can be set in two ways, just like your margins and just like we've talked about previously.

Lets add some thick borders to our `<div>`'s by removing the `!important` from the `*` selector and adding:

```css
div {
  margin: 0 auto;
  border: 5px solid black
}
```

#### Padding and Content

The padding is the spacing between the content and the border. We can adjust this value with CSS to move the border closer to or farther from the content.

Padding can be set in two ways, just like your margins.

Lets add some padding to our `<div>`'s from our dev tools.  Notice, the space inside the "boxes" gets larger.  

```css
div {
  margin: 0 auto;
  border: 5px solid black;
  padding: 2px
}
```

Update your CSS file to include this.

Padding becomes more apparent when we have "stuff" inside the box. If we're talking about a `<p>` element, the "stuff" is the text of the paragraph - the __content__. Let's add some text:

```html
<div id="container">
  <p>Hi there!</p>
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
</div>
```

Open the browser, and now, give that `p` tag some padding in the dev tools:

```css

p {
  padding: 20px
}
```

Amazing!  Add those styles to your CSS file.


## Taking Up Space using Display - Intro (15 mins)

Cool, right? Each HTML element gets its own box to live in.

As you saw, the outermost box of each element went all the way across the page. This is why, until now, your HTML elements have been sitting on top of one another: by default, they take up the full width of the page.

We can change all this with the first positioning property we'll learn, the `display` property and the four values we can use: inline, block, inline-block, and none.

* An **inline** element has no line break before or after it. This makes the element sit on the same line as another element, but without formatting it like a block. It only takes up as much width as it needs (not the whole line). Inline places all your elements on a single line. The bad news is that it doesn't maintain their "box"ness

* A **block** element has some whitespace above and below it and does not tolerate any HTML elements next to it. This makes the element a block box. It won't let anything sit next to it on the page and takes up the full width.

* An **inline-block** element is placed as an inline element (on the same line as adjacent content), but it behaves as a block element. This makes the element a block box but will allow other elements to sit next to it on the same line.

* If you assign **none** as the value of the display, this will make the element and its content disappear from the page entirely!

To illustrate this, if we had this HTML:


```html
<div class="inline">
    <div class="inline">Content</div>
    <div class="inline">Content</div>
    <div class="inline">Content</div>
</div>

<div class="block">
    <div class="block">Content</div>
    <div class="block">Content</div>
    <div class="block">Content</div>
</div>

<div class="inline-block">
    <div class="inline-block">Content</div>
    <div class="inline-block">Content</div>
    <div class="inline-block">Content</div>
</div>

```

With this CSS:

```css
.inline {
display: inline;
}

.block {
display: block;
}

.inline-block {
display: inline-block;
}
```

We would end up with something like this:

![display](https://i.imgur.com/zeD1f2m.png)

> Note: Explain the styling in this image.


## Positioning - Codealong (10 mins)

Another CSS property, "position", can take `relative` or `absolute` values, among others.

A page element with "relative positioning" gives you the control to "absolutely position" children elements inside of it. This might not be obvious to everyone - that's probably because this isn't intuitive, at all. Let's look at an example.


![css position relative](https://i.imgur.com/LRd7lBy.png)

The relative positioning on the parent is what matters here. This what would happen if we forgot that:

![](https://i.imgur.com/0vGcPFL.png)

In this small example, it doesn't seem to matter much, but it really is a significant change.

⇒ The "absolutely positioned" elements are positioning themselves in relation to the body element, instead of their direct parent. So if the browser window grows, that element in the bottom left is going to stick with the browser window, not hang back inside, like it was the case in the previous example.

#### Relative Positioning

Declaring `position:relative` allows you to position the element top, bottom, left, or right relative to where it would normally occur.  Let's add some CSS and see what happens:

```css
#square1 {
    background-color: red;
    height: 100px;
    width: 100px;
    position:relative;
    top: 0;
    left: 40px;
}
```



#### Static Positioning

HTML elements are positioned static by default. A "static positioned" element is always positioned according to the normal flow of the page and are not affected by the top, bottom, left, and right properties.

Again, the default positioning for all elements is static. This means that no positioning has been applied and the elements occurs where they normally would in the document.

If we revisit our squares from earlier in class:

```css
#container {
background-color: gray;
    position: static;
    height: 500px;
    width: 500px;
}
```

You rarely explicitly declare `position:static` like this because it is the default.

#### Fixed Positioning

An element with fixed position is positioned relative to the browser window.  It will not move even if the window is scrolled, so a fixed positioned element will stay right where it is creating an effect a bit like the old school "frames" days.

Try it out:

```css
#square2 {
    position: fixed;
    width: 100%;
    height: 100px;
    background-color: blue;
    top: 0;
    left: 0;
}
```


#### Absolute Positioning

Specifying `position:absolute` _removes the element from the document_ and places it exactly where you tell it to be.

```css
#square1 {
    background-color: red;
    height: 100px;
    width: 100px;
    position:absolute;
    top: 0;
    right: 0;
}
```



##### Relative Positioning

Declaring `position:relative` allows you to position the element top, bottom, left, or right relative to where it would normally occur.

```css
#square1 {
    background-color: red;
    height: 100px;
    width: 100px;
    position:relative;
    top: 0;
    left: 40px;
}
```

## Floats and Clears - Intro (10 min)

The float property specifies whether or not a box (or an element) should float; essentially, it determines whether text will be wrapped around the element.

<p style="text-align: center">
<img src='https://cloud.githubusercontent.com/assets/40461/8234489/3b61ef02-15d4-11e5-8864-435fb6e0c3cc.png'>
</p>

Note that "absolutely positioned" elements ignore the float property as they are removed from the normal document flow.

Floated elements remain a part of the flow of the web page. This is distinctly different than page elements that use absolute positioning.

There are four valid values for the float property. "Left" and "right" float elements those directions, respectively. "None" (the default) ensures the element will not float and "inherit" which will assume the float value from that elements parent element.

#### Clear

All elements will float next to floated items until they are specifically cleared. Think about the text on the page.

<p style="text-align: center">
<img src="https://cloud.githubusercontent.com/assets/40461/8234478/287c1156-15d4-11e5-9901-ba9090a5bf70.png">
</p>

## Using position, floats, and clears to create columns - Code along (20 mins)

Now that we have the basics of relative and absolute positioning, lets create a two column layout by changing the heights; then, we'll investigate how to do this with floats and clears for a more effective approach.  

So, without clears, change the heights of square1 and square2 to 200px and absolutely position the two squares like so:


```css
#container {
    background-color: gray;
    position: relative;
    height: 500px;
    width: 500px;
}
#square1 {
    background-color: red;
    height: 200px;
    width: 100px;
    position:absolute;
    top: 0;
    right: 0;
}
#square2 {
    background-color: blue;
    height: 200px;
    width: 100px;
    position: absolute;
    top: 0;
    left: 0;
}
```

Note how our "square2" div is positioned to the top left of the container and "square1" to the top right. This was done to illustrate that absolute positioning doesn't care what order the elements appear in your html.

Also, notice how we can't see square3 or square4? They are being covered up by our absolute-positioned "square2" div (remember absolute positioning removes the element from the document).

We can reveal those missing divs by declaring their absolute position in the bottom left and right of our container:

```css
#square3 {
    background-color: green;
    height: 100px;
    width: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
}
#square4 {
    background-color: black;
    height: 100px;
    width: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
}
```

This works fine when we know the exact sizes of our elements but what if we were building something like a blog and we had text in those columns or surrounding them? We won't always know the exact amount of text or their font sizes. This is where floats can help us.

#### Floats to create multicolumn layouts

If our element sizes are variable or dynamic we can use floats to allow text/other elements to wrap around the floated element.  To illustrate this, lets first go to a favorite ipsum generator and grab four paragraphs of text.

Now, let's venture back to our html page and add this text after the closing tag of our "square2" div and before the opening tag of our "square3" div.

Your html should like this:

```html

    <div id="container">
        <div id="square1"></div>
        <div id="square2"></div>
        (4 paragraphs of ipsum)
        <div id="square3"></div>
        <div id="square4"></div>
    </div>

```

As expected our text falls behind our absolute positioned columns? Now lets make our elements aware of each other with floats.

Back in our CSS remove the absolute positioning from our "square2" div and replace it with `float:left`:

```css
#square2 {
    background-color: blue;
    height: 200px;
    width: 100px;
    float: left;
}
```

Note that our text is aware that our "square2" div wants to be as left as possible and kindly wraps it in a nice text hug.

#### Floats with clears

While floats make other elements aware of their location and get text hugs, clears make other elements aware and are told not to touch.

Lets go back to our CSS and change our "square2" div's positioning from float:left to clear: right.

`Clear` is saying "I'm not sure how much space I'm going to take but whatever it is clear off my right side" so our text respects its wishes and drops to the line below.


## Conclusion (5 mins)

- Compare the elements of The Box Model - margin, border, padding, content.
- How do floats work with clears to create a multicolumn layout?
- Compare inline-block, block, and inline.
