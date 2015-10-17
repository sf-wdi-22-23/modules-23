## Exercises

### Base Exercises

1. What are three examples of times when you would use embedded association pattern?
1. What are three you would use a reference association pattern?

The following challenges are psuedo code. Write a method for example.

Here's an example where **Monsters have many Broods**:

1. Write a monster#create route

  ```js
    app.get('/monsters', function(req, res) {
      Monster.create({ name: "Frankenstein" }, function (err, monster) {
        res.status(200).json(monster);
      })
    })
  ```

1. Write a brood#create route

  ```js
    app.post('/monsters/:id/broods', function(req, res) {
      Monster.findById(req.params.id, function(err, monster) {
        var brood = req.body.brood;
        monster.brood.push(brood);
        monster.save(function(err) {
          res.status(200).json(brood);
        });
      })
    })
  ```

**Embedded: Users have many Tweets**
1. Write a user#create route
1. Return an array of all the users
1. Return an array of all tweets of a specific user
1. Create a new tweet that belongs to a user (who's id is in the `req.params.id`)
1. Delete a tweet that belongs to a user (make sure to build the route to include the user and the tweet's id's - see example above)
1. Update a tweet that belongs to a user (ditto on their id's!)

### Stretch

1. Add a Comment model to your Microblog app and embed comments in the posts.
