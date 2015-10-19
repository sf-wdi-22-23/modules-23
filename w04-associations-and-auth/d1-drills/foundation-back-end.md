# Foundation: Back End 

1. What file contains most of the JavaScript that controls the server? How is it organized? Is it clear where the code does the following things:
	- start the server
	- require modules
	- configure the app and middleware
	- define routes

2. Where is the connection to the mongoose database made?  

3. What file(s) contain the database code? How are those files related?  Where does the code do the following things:
    - create a schema for posts
    - create a model for posts

4. How is the database code connected to the server code?

5. Is there seed data? If there is, how is it connected to the server or database code? Is the database getting many copies of any seed data? (If so, how would you fix this?)

6. How would you refactor the server and database code? Some specifics to watch out for:
	- Did you find anything not working as intended?
	- Are there modules `require`d in files that don't use them?
	- Is the code organized in a sensible way?
	- Are variables named well, and is code indented in a way that is readable?
	- Are there comments that help you understand what each file or chunk of code is doing?
