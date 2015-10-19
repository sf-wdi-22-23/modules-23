# Create Posts: Back End

1. What route does the server code use to create a new post? Does this follow RESTful routing?

2. Is it clear from the code or comments what data the server expects to get with this request? Where in the request does it get that data?  

3. Test the route with Postman. Is it working as expected?

4. What happens in the following scenarios:
	- The request body is missing one of the attributes the post schema includes.
	- The request body has extra attributes that a post doesn't include.
	- The request body has the right attributes, with empty strings.

5. How is the code in the route handling errors that might occur during the database query?  Would you suggest a different or additional strategy?


6. How would you refactor the back-end code that enables users to create posts? Some specifics to watch out for:
	- Did you find anything not working as intended?
	- Is the code organized in a sensible way?
	- Are variables named well, and is code indented in a way that is readable?
	- Are there comments that help you understand what each file or chunk of code is doing?

