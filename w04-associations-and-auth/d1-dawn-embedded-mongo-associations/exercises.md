## Exercises

### Base Exercises

1. What are three examples of times when you would use embedded association pattern?
1. What are three you would use a reference association pattern?

The following challenges are psuedo code. Write a method for example.

Here's an example where **Monsters have many Broods**:

1. Write a route to create a new Monster.

  ```js
    app.get('/monsters', function(req, res) {
      var monster = req.body.monster;
      Monster.create(monster, function (err, monster) {
        res.status(200).json(monster);
      });
    });
  ```

1. Write a route to create a new Brood that belongs to a Monster.

  ```js
    app.post('/monsters/:id/broods', function(req, res) {
      Monster.findById(req.params.id, function(err, monster) {
        var brood = req.body.brood;
        monster.brood.push(brood);
        monster.save(function(err) {
          res.status(200).json(brood);
        });
      });
    });
  ```

In the following challenges imagine that **Users have many Tweets**

1. Write a route to create a new User.
1. Return an array of all the users.
1. Return an array of all tweets of a specific user.
1. Create a new tweet that belongs to a user (who's id is in the `req.params.id`).
1. Delete a tweet that belongs to a user (make sure to build the route to include the user and the tweet's id's - see example above).
1. Update a tweet that belongs to a user (ditto on their id's!).

### Stretch

1. Add a Comment model to your Microblog app and embed comments in the posts.
1. Add [validations](http://mongoosejs.com/docs/validation) to both the `Question` and `Answer` models. Both the question `text` and answer `content` should be [required](http://mongoosejs.com/docs/api.html#schematype_SchemaType-required).
1. In your API routes to create and update questions, respond with an error if the required validation is not met. **Hint:** Send back the <a href="http://mongoosejs.com/docs/validation#validation-errors" target="_blank">validation error</a> from Mongoose. Also, take a look at this <a href="http://expressjs.com/guide/error-handling.html" target="_blank">guide to Express error-handling</a>.
