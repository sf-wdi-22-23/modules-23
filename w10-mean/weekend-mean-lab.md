# MEAN Weekend Lab

We've been learning the MEAN stack piece by piece. Now its time to put things all together!

![house building timelapse gif](http://i.kinja-img.com/gawker-media/image/upload/s--tifDfh_5--/zthbtt8fo50b8kzc2qxg.gif)

## The Goal

The goal of this project is to build a two resource MEAN app without authentication. Besides that, it is pretty much up to you what you build. Here are some suggestions:

* A Stack Overflow Clone - A Question and Answer platform
* A Microblog with Comments
* A "Yelp of" - Create reviews about anything - yoga studios, online stores, baby toys, you name it.
* A flash card app for studying, with Decks of flash cards

Please feel free to work in pairs or small groups, but everyone should have their own copy of the code. 

## Some Patterns

So you you want to build a two resource app in MEAN stack - first thing's first - **MAKE A PLAN**.

Where should you start? Start with a seed project - probably one of the ones we started with in class.

Ok, you've got your seed project cloned, bower installed, npm installed, and nodemon-ed. Eggcellent! What next?

Some things to think about:

* Write user narratives, draw wireframes, and draw a schema diagram. (There are no projects too small to do these crucial steps of software development).
* Make a step-by-step plan for what you are going to work on. Make a sub-plan for each step with the steps you'll take to do that.
* Work outside-in, starting with your angular app's route, template, and controller. 
* Use Angular to do stuff (not jQuery).
* Try mocking your data in your angular app before connecting to your server. You can prototype an angular app and then connect it to its server via `$http` or `$resource`.
* Use services with `$resource` to  easily access  your server's RESTful routes.
* Just the express server to serve your Angular app properly before you transition to using data from your database.
* Review mongoose and express docs as you make your models and associate them.
* Follow convention over configuration. Check and see if there is a convention, an npm module, or a directive out there to do what you want to do.

## Stretch Challenges

If you finish your two resource CRUD app, add another feature. Perhaps review the [ui-bootstrap](https://angular-ui.github.io/bootstrap/) directives and add one. (no accordians) :P Or experiment more with CSS animations and `ng-class`.

## ** ^^ Feel Free to Pair ^^**
