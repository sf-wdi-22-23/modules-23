# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SF WDI 22/23 - Project One


## DESCRIPTION

It's time to put everything that you've learned in the past month together! For the first project you will use your knowledge of front and back-end web development to produce an awesome web application that can be used by friends, family or any of the other billions of people who use the Internet. The type of web application you create is your choice.

**The objective of this project is to:**

* Apply the skills you've learned by building a web application from the ground up.
* Demonstrate mastery of topics covered during this course so far.

You will each need to turn in an individual project, but you will move faster and learn more if you take time to work together and pair program with other students.

## PLANNING & DELIVERABLES

### Project plan deliverables:

**You must review the following with your instructional team BEFORE you start to code.**  

* **Scope.** What are you planning to build? What do you reasonably think you can implement in the time period?
* **User stories.** What features will your app have? Set up your project and user stories in [Trello](https://trello.com).
* **Wireframes.** Sketch out what each of your pages will look like and how they will work. Consider making a _paper prototype_ to demonstrate and/or test key user interactions.
* **Object Models.** Draw out the models and any associations for your project in an entity relationship diagram (ERD).
* **Milestones.** What are major steps to completing the project?
* **Feasibility Check.** If you are using an external API, make sure you can get that data. If you are using a new tool, go through its getting started tutorial. We will ask to see your results.

**See more details about these deliverables in the <a href="https://github.com/sf-wdi-22-23/modules/blob/master/w04-associations-and-auth/d3-homework/README.md" target="_blank">project planning homework document</a>.**


### Completed project deliverables:

* Link to Heroku hosted project, with core and 3 flex technical requirements complete
* Link to source code on GitHub
* A `README` with the following:
  * `Description`: A paragraph-long elevator pitch of your project
  * Another Link to project hosted on Heroku
  * Wireframes
  * `User Stories`, `Site Flow`, or equivalent
  * An Entity Relationship Diagram
  * APIs used
  * Libraries used
  * Wishlist / Future Development

## TECHNICAL REQUIREMENTS

### Core Technical Requirements

**Your app should have all of the following:**

* **Express API** Implement a server-side JSON API with Express.
* **RESTful Routes** Design the routes in a <a href="http://restfulrouting.com/mappings/resources" target="_blank">RESTful</a> manner.
* **MongoDB** Persist data with at least two models in a Mongo Database.
* **AJAX** Leverage your server-side Express API to fetch JSON data asynchronously to the client-side.
* **jQuery** Use jQuery to manipulate the DOM and listen for events on the client-side.
* **Server-Side HTML Templating** Render your HTML views with data using EJS templating.
* **Cookies or Sessions** Save some data in cookies or sessions.
* **Visual Design** Leverage Bootstrap to kick-start your UI and UX.
* **Custom Styling** Go beyond Bootstrap with styles and/or animations customized for your app. 
* **Heroku** Deploy your app to Heroku.  Ensure no app secrets are exposed. __Do not commit secret keys to GitHub!__

### Flex Technical Requirements

**Your app should have 3 of the 4 following options:**
* **External API** Use an external API to integrate rich data into your app.
* **Model Relationship** Create a one-to-many or many-to-many relationship between two models using either embedded or referenced data.
* **Authentication** Enable users to sign up, log in, and log out. (Note: This covers the core sessions or cookies requirement.)
* **Data Validation** On the client side, don't let users submit blank forms -- and give them a visible error message explaining why they weren't allowed to submit. You can do this by hand or with a library like <a href="http://jqueryvalidation.org/" target="_blank">jQuery Validate</a>. In your database, use mongoose's validations for at least one attribute for each of your schemas (see <a href="http://mongoosejs.com/docs/validation.html" target="_blank">mongoose validation docs</a> and/or this <a href="https://masteringmean.com/lessons/196-Introduction-to-Mongoose-Model-Validation-and-Middleware" target="_blank">outside tutorial's</a> validaton section). You can meet this requirement with just mongoose's built-in validations, but you could also take it further with custom validations.


## Ideas for Further Exploration

If you want to push yourself and learn something new, optionally consider doing some of the following with your app. *Please talk to an instructor* beforehand.

* **Search** Build a form that allows users to search your data, based on attributes.
* **Authorization** Create and implement rules that prevent users from seeing/editing/deleting content that belongs to other users. Start with one rule; the specifics are up to you. For example, a good challenge could be saying users cannot delete a post (or other resource) if it is not theirs.  (Note: This requires authentication.)
* **Testing** Test your code with an automated testing library (<a href="testing.md" target="_blank">here's a resource for mocha and chai</a>).
* **Email** Send emails with express-mailer.
* **Payments** Add payments with stripe.com. 
* **Web-Scraping** Use a web-scraper to collect data from a website that doesn't have an API. Example technologies include <a href="http://casperjs.org" target="_blank">Casper</a> or <a href="https://www.kimonolabs.com" target="_blank">Kimono</a>.
* **Web Sockets** Create an open, real-time connection between your server and client (e.g. live chatting) with a tool like <a href="http://socket.io/" target="_blank">Socket.io</a>.
* **Client-side HTML Templating**  Refactor your *client-side code* to use a templating library like Handlebars, Mustache, underscore's `_.template`, or another.
* **Whatever else you can think of!**
 


## DEADLINES

* **Thursday, October 22nd by 12:30pm** - **REQUIRED**:  Submit your project proposal to an instructor and make a Kanban board for it using Trello. Before beginning work on your project, your project idea, the scope of your project, and your other planning deliverables must be checked-off by an instructor. 

* **Friday, October 30th, 10:00am** - Project due and presentations!  (Submission instructions and presentation details will be posted next week.)


## SOURCES OF HELP/SUPPORT

- the internet (the docs, tutorials, stack overflow, the module notes)
- working with your classmates in Slack
- working with your classmates in person (tear down that wall!)
- instructor/student standups every morning at 10:00AM 
- scheduled 1:1s for each student throughout the project
- breakout lessons on selected topics as needed **[Go Here](http://www.questioncookie.com/BreakOutTopics) to suggest and vote on breakout topics!**
- instructors and DiRs available in the classroom each weekday (but not all of them, all the time)
- evening and weekend TAs

## GROUPS 

Each student will have an assigned instructor, which splits us into three informal groups per class. Your instructor will approve your project, lead your morning standups (with the rest of your group), meet with you for 1:1s, and give you feedback after the project. Outside of those structured activities, you're welcome to work with other instructors, the DiRs, and students from any group you'd like!

### WDI 22

**ALEX**  
Angelo  
Dani  
Josh  
Riley   
Uriel  
Will  

**BEN**  
Brian  
Jamey  
Jennifer  
Laura E.  
Matt  
Racha  

**BRIANNA**     
Chris  
Francesca    
Laura B.    
Margaux   
Mikey    
Sam    

###WDI 23

**BRAUS**  
Annie  
Jeehye  
Breana  
Scot  
Brendan   
Emily K.  

**JULIANA**  
Isom  
Eric  
John B.  
John C.  
Emily A.  
Jorge  
Natasha  

**MATT**  
Ling  
Meredith  
Michael  
Noel  
Roy  
Zain  
