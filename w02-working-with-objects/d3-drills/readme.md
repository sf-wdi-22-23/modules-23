### HTML Strings - [solution](https://github.com/sf-wdi-22-23/modules/blob/d3-drills/w02-working-with-objects/d3-drills/solutions.md)

For the following challanges, please use this [data object](https://gist.github.com/awhit012/63fa69eb5241da9fe678).

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
