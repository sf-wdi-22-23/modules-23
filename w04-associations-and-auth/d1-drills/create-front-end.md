# Create Posts: Front End

1. Where is the HTML code for the new post form?  Where is the JavaScript?

2. What event listener is sending the AJAX request for a new post? What element is it attached to, and what kind of event is it listening for?

3. What does the front-end code do with the response that the server sends back? Can you tell from the front-end code or comments what the developer expects the response to look like?

4. How is the new post displayed on the page? Does the new post get displayed before or after the AJAX request for the new post finishes? Is a separate AJAX request made from the front-end?  What are the advantages and disadvantages of doing it this way?

5. What happens in the following scenarios:
	- You don't fill in one of the new post blanks before submitting.
	- You don't fill in any of the new post blanks before submitting.

6. Which if any custom functions in the front-end JavaScript control the behavior of the new form? Do you like the extent to which this code is encapsulated?

7. Does the front-end code use custom-made object oriented JavaScript (a constructor & prototype)? What are the advantages of doing it the way the developer chose? What are advantages of the other approach?


8. How would you refactor the front-end code that enables users to create posts? Some specifics to watch out for:
	- Did you find anything not working as intended?
	- Is the code organized in a sensible way?
	- Are variables named well, and is code indented in a way that is readable?
	- Are there comments that help you understand what each file or chunk of code is doing?


<!-- 9. Stretch: What happens if you submit the form with this information in one of the fields:

	```js
	content: <script type='text/javascript'>alert('uh oh!');</script>
	```

	![what the hell was that](https://media.giphy.com/media/aywM2B5Z2q7Pq/giphy.gif)

	That was a <a href="https://www.owasp.org/index.php/XSS" target="_blank">cross-site-scripting (xss) attack</a>!  We won't go over how to fix it in class yet, but it's good to be aware of. -->
