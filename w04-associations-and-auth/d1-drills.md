# Team Refactor Drill  

## Motivation (3 minutes) <!-- starts at 9:17 -->

In the real world, web developers often work on code that theyd didn't write originally. Today, we're goind to look at code that will be foreign to most of you and think about how to improve it -- code created by one of you!

## Volunteer Seeking (5 minutes) <!-- starts at 9:20 -->

Volunteer to have your code refactored by the class! Our volunteer will spend the drill time answering questions from other groups if necessary.


<img src="https://media.giphy.com/media/sXv0vaA4331Ti/giphy.gif" alt="begging gif">


## Site Tour (10 minutes)  <!-- starts at 9:25 -->

1. Fork and clone our starter code so you have a local copy.

1. Start up the site in the browser.  

1. Check out how the site works in the browser. Watch the Chrome Dev Tools console for client-side log messages and the Terminal for server-side log messages.

## Refactor Teams (20 minutes)  <!-- starts at 9:35 -->

We'll divide into working groups of three people to look at six different parts of the code. **We do not expect you to implement all the changes you suggest.**  

VIEW FUNDAMENTALS
SERVER AND DATABASE FUNDAMENTALS
CREATE POSTS: FRONT END
CREATE POSTS: BACK END
DELETE POSTS: FRONT END
DELETE POSTS: BACK END



### View Fundamentals

1. In the browser, if we right click and "view source" we see HTML.  Where is the main HTML file being served from? What is the route, and what is the file on our server that determines how the HTML looks when we start the server?

1. What is determining the styling for the site? What outside CSS libraries or files are included? Where are custom styles?  How are these connected to the HTML? 

1. What is determining the front-end JavaScript for the site? What outside JavaScript libraries or files are included? What file has the custom JavaScript front-end code? How are these connected to the HTML? What are the costs and benefits of connecting the JavaScript in this part of the HTML?

1. Which parts of the server code determine how the data will be displayed on the site's home page?

1. How would you refactor the front end HTML, CSS, and JS? Some specifics to watch out for:
	- Is the code organized in a sensible way?
	- Are variables named well, and is code indented in a way that is readable?
	- Are there comments that help you understand what each file or chunk of code is doing?
	- Did you find anything not working as intended?


1. User experience is its own field of study, but developers should put some thought into it.  
	- If you were a new user approaching this site, would you know what it does? Could you find existing posts (if any?) Would you identify the new post form and/or delete buttons as things you could interact with?
	- Is the site's interface zany, fun, minimalistic, confusing? Share questions or constructive comments your group has about the experience of using the site.

### Server and Database Fundamentals


1. What file contains most of the JavaScript that controls the server? How is it organized? Is it clear where the code does the following things:
	- start the server
	- require modules
	- configure the app and middleware
	- define routes

1. Where is the connection to the mongoose database made?  

1. What file(s) contain the database code? How are those files related?  Where does the code do the following things:
    - create a schema for posts
    - create a model for posts

1. How is the database code connected to the server code?

1. Is there seed data? If there is, how is it connected to the server or database code? 

1. How would you refactor the server and database code? Some specifics to watch out for:
	- Did you find anything not working as intended?
	- Are there modules `require`d in files that don't use them?
	- Is the code organized in a sensible way?
	- Are variables named well, and is code indented in a way that is readable?
	- Are there comments that help you understand what each file or chunk of code is doing?
	- Is the database getting many copies of any seed data? (If so, how would you fix this?)



### Create Posts: Back End

1. What route does the server code use to create a new post? Does this follow RESTful routing?

1. Is it clear from the code or comments what data the server expects to get with this request? Where in the request does it get that data?  

1. Test the route with Postman. Is it working as expected?

1. What happens in the following scenarios:
	- The request body is missing one of the attributes the post schema includes.
	- The request body has extra attributes that a post doesn't include.
	- The request body has the right attributes, with empty strings.

1. How is the code in the route handling errors that might occur during the database query?  Would you suggest a different or additional strategy?


1. How would you refactor the back-end code that enables users to create posts? Some specifics to watch out for:
	- Did you find anything not working as intended?
	- Is the code organized in a sensible way?
	- Are variables named well, and is code indented in a way that is readable?
	- Are there comments that help you understand what each file or chunk of code is doing?

### Create Posts: Front End

1. Where is the HTML code for the new post form?  Where is the JavaScript?

1. What event listener is sending the AJAX request for a new post? What element is it attached to, and what kind of event is it listening for?

1. What does the front-end code do with the response that the server sends back? Can you tell from the front-end code or comments what the developer expects the response to look like?

1. How is the new post displayed on the page? Does the new post get displayed before or after the AJAX request for the new post finishes? Is a separate AJAX request made from the front-end?  What are the advantages and disadvantages of doing it this way?

1. What happens in the following scenarios:
	- You don't fill in one of the new post blanks before submitting.
	- You don't fill in any of the new post blanks before submitting.

1. Which if any custom functions in the front-end JavaScript control the behavior of the new form? Do you like the extent to which this code is encapsulated?

1. Does the front-end code use custom-made object oriented JavaScript (a constructor + prototype)? What are the advantages of doing it the way the developer chose? What are disadvantages?


1. How would you refactor the front-end code that enables users to create posts? Some specifics to watch out for:
	- Did you find anything not working as intended?
	- Is the code organized in a sensible way?
	- Are variables named well, and is code indented in a way that is readable?
	- Are there comments that help you understand what each file or chunk of code is doing?


<!-- 1. Stretch: What happens if you submit the form with this information in one of the fields:

	```js
	content: <script type='text/javascript'>alert('uh oh!');</script>
	```

	![what the hell was that](https://media.giphy.com/media/aywM2B5Z2q7Pq/giphy.gif)

	That was a <a href="https://www.owasp.org/index.php/XSS" target="_blank">cross-site-scripting (xss) attack</a>!  We won't go over how to fix it in class yet, but it's good to be aware of. -->


### Delete Posts: Front End

1. How does a user delete a post? Is it obvious from the user interface that posts can be deleted?

1. What file is the HTML for the delete button in? Where is the delete button HTML specifically?  

1. What event listener is sending the AJAX request to delete a post? What element is it attached to, and what kind of event is it listening for?  

1. Does the AJAX request go to the proper RESTful route? What data does the AJAX request send? (How does the code know *which* post do delete?)

1. What does the front-end code do with the response that the server sends back? Can you tell from the front-end code or comments what the developer expects the response to look like?

1. Does the post get deleted from the page before or after the AJAX request finishes? Is a separate AJAX request made from the front-end to show the resulting set of posts?  What are the advantages and disadvantages of doing it this way?

1. Which if any custom functions in the front-end JavaScript control the behavior of the delete button(s)? Do you like the extent to which this code is encapsulated?

1. Does the front-end code use custom-made object oriented JavaScript (a constructor + prototype)? What are the advantages of doing it the way the developer chose? What are disadvantages?

1. How would you refactor the front-end code that enables users delete posts? Some specifics to watch out for:
	- Did you find anything not working as intended?
	- Is the code organized in a sensible way?
	- Are variables named well, and is code indented in a way that is readable?
	- Are there comments that help you understand what each file or chunk of code is doing?


### Delete Posts: Back End


1. What route does the server code use to delete a new post? Does this follow RESTful routing conventions?  

1. How does the server know *which* post to delete?

1. Test the route with Postman. Is it working as expected? What happens if the post you are trying to delete doesn't exist?

1. How is the code in the route handling errors that might occur during the database operations?  Would you suggest a different or additional strategy?

1. What mongoose method(s) did the developer use to take care of removing the post from the database? What is one alternative? What are the advantages and disadvantages of doing it the way the developer chose?

1. How would you refactor the back-end code that enables users to delete posts? Some specifics to watch out for:
	- Did you find anything not working as intended?
	- Is the code organized in a sensible way?
	- Are variables named well, and is code indented in a way that is readable?
	- Are there comments that help you understand what each file or chunk of code is doing?

## Group Refactor (20 min)  <!-- starts at 9:55-10:00 -->


Let's come back together and walk through the code, group by group, making some changes!

VIEW FUNDAMENTALS
SERVER AND DATABASE FUNDAMENTALS
CREATE POSTS: FRONT END
CREATE POSTS: BACK END
DELETE POSTS: FRONT END
DELETE POSTS: BACK END

We can also keep in mind some larger-scale considerations, like:
	- Some refactoring decisions will affect multiple groups.
	- Is the same code copied and pasted in many areas of the project? Could this be condensed into a helper function so that there's only one location to debug/update?
	- Do the routes the client is sending requests to match the routes the server is prepared to respond on?
	


 <!-- ends at 10:15-10:20 (because it will take time to regroup after splitting out) -->