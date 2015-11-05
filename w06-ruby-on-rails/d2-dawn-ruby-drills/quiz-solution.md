## Workflow, UX, and Psuedo Coding Quiz: SOLUTION

**UX and Workflow**

1. Write a brief and complete user narrative for you're favorite user interaction with any web application or mobile app.

  I'm Rosie the Lyft Requester. I'm going to work so I open my lyft app. I confirm the default starting point of my current location: at home. I tap on my work place to set that as the destination and tap to request the Lyft. I see a loading screen and I get pinged when a driver is on her way.

1. Describe in your own words what it means to build an application 'outside-in'.

  To build code outside-in means to start with what is first to the user and work towards what is first to the computer. Generally this means making the template, then the server, then the models and database. It is best to design and build code that is user friendly. The user experiences the templates first and then the client and backend code are meant to serve the template correctly.

1. Name three of your favorite and most effective debugging techniques.

  * Analyzing error messages
  * Setting a break point
  * logging to the console
  * experimenting in the console or terminal

**PROJECT 1 Review**
1. Write very honestly what workflow process you actually did for Project 1. Feel free to break it up by day.  
1. Write what workflow you wish you had done and what you will strive to do in future projects.
1. Recall a problem you had or are having with your project 1 and write a sample stackoverflow.com question. Remember to include
  1. What you're trying to accomplish
  1. What you've tried already
  1. What error you are receiving or problem you are having
  1. Relevant, brief code samples

    I am using bower-rails with a rails 4 + AngularJS website to load client-side packages and am having trouble with heroku. I've added the path to my application.rb file but the bower_components are not available in my asset pipeline.
    ```
        config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components')
    ```
    When I push to heroku:

      ```
           -----> Preparing app for Rails asset pipeline
           Running: rake assets:precompile
           ...
           rake aborted!
           Sprockets::FileNotFound: couldn't find file 'angular'
           (in /tmp/build_e660cd4b8a3168401ec4da7e261784fe/app/assets/javascripts/application.js:18)
      ```
    I'm using the Bowerfile, and bowerrails does not create a bower.json file.

**Resourcefulness**

1. Although you might know nothing about Python, imagine you've been asked by your employer or client to find the best Django module for doing authentication. (Django is like Rails but built in python). Pick the Django module you'd use and list the pros and cons of why to use or not use it and why you think it is the best.

  I would choose to use Django REST framework's Authentication patterns because it looks like a full featured and integrated solution. It is recommended on djangopackages.com as used by over 130 people and it has 4,800 github stars, 322 watchers, and 1,500 forks. If we want social authentication, I'd recommend python social auth. It also has great github stats and is recommended in a few blogs to work with Django REST framework.
