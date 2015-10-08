### HTML Strings - [solution](https://github.com/sf-wdi-22-23/modules/blob/d3-drills/w02-working-with-objects/d3-drills/solutions.md)

For the following challanges you are going to use the template from https://github.com/sf-wdi-22-23/blank_template

2. From the template repo copy the url to clone it (will be on the right hand side)
3. In your terminal, go into your dev folder and type 'git clone' + paste the link
4. Open this up in Sublime
5. Paste the data object into the JS file.
6. Type your solution into the document.ready method.
8. You should console.log your solutions 
7. Run your file by opening your index.html page in Chrome
8. Rejoice!


0. As a warmup, try to output the following values:
    * the name of the course
    * the first student's id and full name
    * the number of students in the class
    * a list of github usernames

1. Create a function `buildGithubLink` that transforms a single student's info into an html string, with the following format:

	```
	<a href="https://github.com/torvalds">Linus Torvalds</a>
	```

2. Using the function you just built, create a function called `renderGithubLinks` that takes an array of students and adds their github links to the page.

Extra points if you use built-in Array methods like `forEach`, `map`, and `join` and only insert into the DOM once.
