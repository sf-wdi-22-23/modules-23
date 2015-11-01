## Low Stakes Workflow, UX, and Psuedo Coding Quiz

Concepts:
* Psuedocode
* Schema wireframing
* Workflow including iteration, agile development, outside-in development
* Troubleshooting and debugging
* Project 1 Workflow

1. Code imaginary instructions to make a peanut butter and jelly sandwich in ruby and javascript.
1. Write a brief and complete user narrative for you're favorite user interaction with any web application or mobile app.
1. Write a comment for each line of the following code for what it does (if you don't know what some code does, try your best to guess):
  ```js
  app.post('/api/zoinks', auth.ensureAuthenticated, function (req, res) {
    var zoink = new Zoink(req.body);
    zoink.user = req.userId;
    User.findById(req.userId, function (err, user) {
      if (err) { return res.send({ err: err }) }
      zoink.rsvps.push(user);
      zoink.save(function (err) {
        if (err) { return res.send({ err: err }) };
        res.status(201).json(zoink);
      });      
    })
  });
  ```
1. Describe in your own words what it means to build an application '(r)outside-in'.
1. Although you might know nothing about Python, imagine you've been asked by your employer or client to find the best Django module for doing authentication. How would you go about finding it? (Django is like Rails but built in python)
1. Go find what you judge is the best Django module for authentication, list the pros and cons of why to use or not use it and why you think it is the best.
1. Name three of your favorite and most effective debugging techniques.

**PROJECT 1 Review**
1. Recall a problem you had or are having with your project 1 and write a sample stackoverflow.com question. Remember to include
  1. What you're trying to accomplish
  1. What you've tried already
  1. What error you are receiving or problem you are having
  1. Relevant, brief code samples
1. Write very honestly what workflow process you actually did for Project 1. Feel free to break it up by day.  
1. Write what workflow you wish you had done and what you will strive to do in future projects.
