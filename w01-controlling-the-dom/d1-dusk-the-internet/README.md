#The Internet
| Objectives |
| :--- |
| Describe the difference between a client and a server and how they interact. |
| Use the Chrome Developer Tools to explore and manipulate the elements. |

## What is the internet?
Millions of devices connected globally...

![theinterwebs](https://mountpeaks.files.wordpress.com/2012/03/1069646562-lgl-2d-4096x40962.png)

## Clients and Servers
Clients (ex. your computer) make requests to servers and servers send back responses. This is a really important mental model to have. Throughout this course, we'll be learning to write code that lives either on the client or on the server and it's important to know where it is.

![client-server](client-server.png)

Servers respond with `HTML`, `CSS`, `Javascript`, and/or pure data. Browsers have been created to know what to do with the code that servers send back.

Requests to servers are usually made in browsers but can also be made with `curl` requests in your terminal.
```
curl www.google.com
```

## Challenges

#### Basic Challenges
  1. Go to your favorite website.
  4. Hit `command + option + i`
  5. You are now in the Elements tab of the Chrome Developer Tools. Click through the other tabs and explore!
  6. Back in the Elements tab, make some CSS changes using the Inspect Elements tool. Take a screenshot so you can show your work to a friend!

#### Stretch Challenges
  1. Go to the Console tab of the Chrome Developer Tools.
  2. Type `4 + 4` in the console, and hit `enter`.
  3. Now, type `hello world` - what does that return?
  4. Try it again, but this time with quotes, `"hello world"`. Much better!

## Tonight's Homework
  1. Make sure you have a GitHub account and have successfully pushed your fundamentals project.
  2. Make sure you have the `subl` command set up so you can open Sublime from your Terminal

    * For **Sublime Text 2**, type this in your terminal:

    ```
    ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
    ```

    * For **Sublime Text 3**, type this in your terminal:

    ```
    ln -s "/Applications/Sublime Text 3.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
    ```

    * If you're having problems getting `subl` set up, try reading [this](http://stackoverflow.com/questions/16199581/opening-sublime-text-on-command-line-as-subl-on-mac-os) or [this](http://ashleynolan.co.uk/blog/launching-sublime-from-the-terminal).

  3. Read at least one article from **The Internet** section in the further readings listed below.
  4. Create a directory (folder) somewhere on your computer called `wdi-day-1`.
  5. Inside that directory, create an `index.html` file, and write three interesting things you learned or questions you have from the reading you chose in part 3.
  6. Create a new repo on GitHub called `wdi-day-1`, and push your `index.html` file to that remote repo.
  7. Think of a "passion project" that you're excited to work on either as one of your formal projects or after the class. Write one paragraph about the project in a `passion_project.html` file inside `wdi-day-1` and push that as well.
  7. Submit the link to your GitHub repo in the [homework submission form](https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform).

## Further Reading

#### The Internet
  * [How the Internet Works in 5 Minutes [VIDEO]](https://www.youtube.com/watch?v=7_LPdttKXPc)
  * [How does the internet work?](http://computer.howstuffworks.com/internet/basics/internet.htm)
  * [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction)

#### Words of Wisdom
  * [Things I Wish Someone Had Told Me When I Was Learning How to Code](https://medium.com/@cecilycarver/things-i-wish-someone-had-told-me-when-i-was-learning-how-to-code-565fc9dcb329)
  * [On Being a Junior Developer](http://mattsencenbaugh.com/on-being-a-junior-developer)
  * ["I don’t understand"](http://bjk5.com/post/38101106878/i-dont-understand)

#### Tech News
  * [Hacker News](https://news.ycombinator.com/)
  * [Product Hunt](http://www.producthunt.com/)
