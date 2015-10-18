# Delete Posts: Front End 

1. How does a user delete a post? Is it obvious from the user interface that posts can be deleted?

2. What file is the HTML for the delete button in? Where is the delete button HTML specifically?  

3. What event listener is sending the AJAX request to delete a post? What element is it attached to, and what kind of event is it listening for?  

4. Does the AJAX request go to the proper RESTful route? What data does the AJAX request send? (How does the code know *which* post do delete?)

5. What does the front-end code do with the response that the server sends back? Can you tell from the front-end code or comments what the developer expects the response to look like?

6. Does the post get deleted from the page before or after the AJAX request finishes? Is a separate AJAX request made from the front-end to show the resulting set of posts?  What are the advantages and disadvantages of doing it this way?

7. Which if any custom functions in the front-end JavaScript control the behavior of the delete button(s)? Do you like the extent to which this code is encapsulated?

8. Does the front-end code use custom-made object oriented JavaScript (a constructor + prototype)? What are the advantages of doing it the way the developer chose? What are advantages of the other approach?

9. How would you refactor the front-end code that enables users delete posts? Some specifics to watch out for:
	- Did you find anything not working as intended?
	- Is the code organized in a sensible way?
	- Are variables named well, and is code indented in a way that is readable?
	- Are there comments that help you understand what each file or chunk of code is doing?


