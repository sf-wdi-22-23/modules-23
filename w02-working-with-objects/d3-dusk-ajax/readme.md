# Practicing AJAX

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

You're about to write a lot of AJAX-backed JavaScript using jQuery that will complete our little Gif app.

Make use of the fantastic Giphy api: 
http://api.giphy.com/

Check out the documentation here: 
https://github.com/Giphy/GiphyAPI

Your task is to use your JS skills to show the 25 top trending gifs from Giphy on YOUR page. 

BONUS points if you can include a search bar that returns 25 gifs from Giphy based on the search. HTML forms in action!

## Exercise

#### Requirements

- Implement a jQuery AJAX client for a simple REST service
- GET data from an external API and render it to your page.

#### Starter Code

- Clone the Blank Template from here: https://github.com/sf-wdi-22-23/blank_template
- You will be using this a lot! Once you clone it, lets rename that folder "Giphy-Lab"

#### Thinking Like An Engineer

As we get into more complicated problems, we need to start thinking more and more like engineers. Engineers break down large problems into the smallest possible parts, and tackle each small part one at a time. 

This is one of the major skills for web development!

Here's some steps to follow to help get you in this mindset:

1. Skim the docs! https://github.com/Giphy/GiphyAPI
	- Pay extra attention to the sections we will be using, 
		- trending: https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint
		- search: https://github.com/Giphy/GiphyAPI#search-endpoint
		- Also note the ever-important API Key situation (We will be using the Public Beta API key): https://github.com/Giphy/GiphyAPI#public-beta-key 
	- Don't spend much time on this. You will go back to figure out things as they come up. 

2. Test the API out using 'curl'!
	- In your console type 'curl' + the url you want to hit. 
	- Try http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC
	- What did you get back? It looks like a mess! But that is because it isn't meant to come back human-readable. Its just an Object!

3. Crack open your blank template. We first want to write JavaScript that returns that same object we got back using curl when we open our index.html! BUT HOW DO I AJAX!!??
	- Skim this explanation of AJAX using jQuery: http://www.sitepoint.com/use-jquerys-ajax-function/
	- Pay extra attention to the example. Think about what you would change to GET the data you want from the URL you want. 

4. Start playing in your base.js file. You want an Ajax call to fire when your page has loaded, so you won't be putting your ajax in an on.click!
	- Don't try to do everything at once! First try to log the data to the console! Then work on logging specific data you want. What do you need to get the gifs to actually load on the page? There is a bunch of stuff in this data object, and this is actually not a trivial question. 
	- Once you narrowed that down, THEN you want to build HTML strings like we did in the drill this morning. 
	- First log those strings to the console, and make sure they look like you think they sould. THEN append them into the DOM!
	- Don't forget about your friend the javaScript 'debugger' keyword. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger

5. Can you bonus? Get a little search box to make a different AJAX call to the search URL. 
	- Does a search box button have a default action? What do we want do with that?
	- Are we just appending more and more gifs to the dom? Do we need to clear previous gifs before loading more?
	- OMG are you making a one page app using AJAX like a boss? Yes. Yes you are. 

	<img src="http://giphy.com/gifs/party-excited-birthday-YTbZzCkRQCEJa">


#### Deliverable

Take a screenshot of your app and post it to Funny Biz! 

## Additional Resources

- [http://youmightnotneedjquery.com](http://youmightnotneedjquery.com/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
- [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
- [The Official Doughnut API](https://www.doughnuts.ga/)
