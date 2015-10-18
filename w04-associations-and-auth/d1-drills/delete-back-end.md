# Delete Posts: Back End


1. What route does the server code use to delete a new post? Does this follow RESTful routing conventions?  

2. How does the server know *which* post to delete?

3. Test the route with Postman. Is it working as expected? What happens if the post you are trying to delete doesn't exist?

4. How is the code in the route handling errors that might occur during the database operations?  Would you suggest a different or additional strategy?

5. What mongoose method(s) did the developer use to take care of removing the post from the database? What is one alternative? What are the advantages and disadvantages of doing it the way the developer chose?

6. How would you refactor the back-end code that enables users to delete posts? Some specifics to watch out for:
	- Did you find anything not working as intended?
	- Is the code organized in a sensible way?
	- Are variables named well, and is code indented in a way that is readable?
	- Are there comments that help you understand what each file or chunk of code is doing?