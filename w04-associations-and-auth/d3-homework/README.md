# Project 1 Planning

## [Requirements](https://github.com/sf-wdi-22-23/modules/tree/master/w04-associations-and-auth/project-1)

### Getting Ideas

Think about problems you know of - things that suck or are broken in the world.

Could you build something that could grow into a solution? Try to do one thing well and then iterate.

Examples of applications that do one thing well:
- [Question Cookie](http://www.questioncookie.com/) - allows fast voting moderation
- Facebook Messenger - allows easy communication between individuals or groups
- Twitter - lets people share their thoughts quickly
- [Maps with Friends](maps-with-friends.herokuapp.com) - lets you track friends by putting markers on a map

### User stories

Outline your core user stories and divide them into sub-stories. For example, this story:

**As a user, I want to create a profile for my dog**

Might consist of these steps:

- Wireframe what a profile page will look like
- Create an EJS template for a profile page
- Write a server route to serve the profile page
- Create a schema for a dog, defining desired attributes, e.g., name, age, favorite chew toy, etc.
- create a page / form / route to create a new user in database
- Serve profile page populated with information from database

Use your own Trello board to track your progress and keep you focused. Make each card a user story, and mark it with a time estimate. For a more accurate estimate, double the time you think it will take.

Add comments to your cards as you progress and complete features – by the end of your project you'll have a living log of 'gotchas' you debugged and things you learned about the process of developing an app iteratively.

### Wireframes

Sketch out the core pages of your app. What will they look like? How they will work, both on page-load and when affected by AJAX?

The more time you spend on this step, the easier it will be to structure your HTML. Well-structured HTML will make implementing your CSS, figuring out what routes go where, and how to manipulate the DOM easier.

### Object Models

Use an entity relationship diagram (schema) to plan out the Models, their relationship(s), and properties.

* Will your application have many models or only a few (or one)?
* How will they interact with each other?
* What attributes (properties) will they have, and what kind of data types (string, integer, collection, etc.) will they use?

### Scope

Software development is about managing complexity. It's easy for code to become a tangled web of tightly coupled functions or data structures ([callback hell](http://callbackhell.com/), anyone?) if you aren't diligent and vigilant in your decision making.

The same applies to the scope of your project. If you're always looking at the top of the mountain, you will trip on the rocks in front of you.

![iterative-design](./iterative-design.png)

Figure out the absolutely smallest thing you can do, and do that thing. Not the next immediate thing, but the simplest possible implementation of your app. If that means that the entire functionality of your app consists of logging in, displaying all of a user's photos from their Instagram account, and logging out, that is totally great.

Don't think so? Check out the [requirements](). It's all there: your own Node/Express API serving EJS templates to your client, two models that are associated with each other, AJAX, an external API call, authentication, etc. See? You did it!

**Example Scope**

My app (using the Google Maps API) will allow users to add markers to a map, displaying a friend's name and city in a sidebar. My stretch goal is to move the sidebar info into individual info-windows on each marker that display when clicked.

To help break out your scope, you'll want milestones.

### Milestones

Milestones provide checkpoints for the progress of your sprint – they give you a way to check in with yourself about how much headway you've made. Listing each feature reminds you what is done / pending, but makes it convenient for estimating the number of hours/days for a feature.

Note: each milestone will likely be made of several user stories, and contain elements of the technical requirements.
Example milestones:

**Milestones**

- [ ] project planning complete (wireframes, user stories, etc.)
- [ ] Hello World achieved
- [ ] Save and render data from database using a form
- [ ] authentication (sign up, log in, logout) working
- [ ] API call to <External API HERE> being saved in/served from database
- [ ] client styling (CSS) complete
- [ ] app deployed to Heroku

### Feasibility

Before you get started, you'll want to do some research to see if what you're looking to do is possible. Some areas that you might want to investigate, depending on your app's desired functionality are:

- Reading documentation to see what data you can request from your API of choice. Is it JSON? XML? Is all the information you want included in the response? Will you need to make several different requests to the API?
- Verifying that you can successfully request data from your API using [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en) or [cURL](http://conqueringthecommandline.com/book/curl#cid23)
- Researching something you want to use that hasn't been taught in class yet, like an external module/library, data store, etc.

**DO NOT start coding before each of the above is clearly outlined and approved by an instructor.**

### REMEMBER to build "outside-in"

Start with the basics of your view:

- [ ] an index.html file with static data directly in the file
- [ ] create a template based on the structure in the html
- [ ] use the template to display dynamic data stored on the client
- [ ] move the data to the server and get it with a GET call to a route on the server
- [ ] move the data to your database

Once you have an index page populated with data from the database, try to:
- [ ] make a route for a show page (a page for a specific instance of a model)
- [ ] make a button that allows you to delete a specific instance of a model
- [ ] add a page where you can edit your model (or do it on the show page with AJAX)


## Conclusion

Have fun and ask questions!
