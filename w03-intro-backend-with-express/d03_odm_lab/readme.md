# Mongoose and ODM's

Objectives|
-----|
|Explain the difference between MongoDB and Mongoose
|Explain the difference between SQL and NOSQL databases
|Build a simple ODM implementation that stores Javascript objects

### da·ta·base
noun.

a structured set of data held in a computer, especially one that is accessible in various ways.

## What is MongoDB?
### MongoDB is a NoSQL database.
 - NoSQL is a class of database management systems (DBMS) that do not follow all of the rules of a relational DBMS and cannot use traditional SQL to query data.
 - It stores data in a database using nested documents and objects, rather than the rows and columns of a traditional database

<img src="http://dataconomy.com/wp-content/uploads/2014/07/SQL-vs.-NoSQL.png">

## Express with MongoDB

### You can use Express with MongoDB without Mongoose. But it is not nice. 

Lines of code to connect to MongoDB WITHOUT Mongoose: 11

Lines of code to connect to MongoDB WITH Mongoose:    2

Example: https://github.com/awhit012/pure-mongo

Additional Resources:

mongoDB-node repo: https://github.com/mongodb/node-mongodb-native

express hello-word: http://expressjs.com/starter/hello-world.html


## What is an ODM?
An ODM (Object-Document Mapper) is a tool that lets you query and manipulate data from a non-relational database using an object paradigm.

Kind of like a librarian that knows a bunch of things, so you don't have to.

## Express with Mongoose

### Let's create another Express app that connects to MongoDB, but this time using Mongoose.

TODO: step-by-step instructions (with some code samples)

My solution: https://github.com/awhit012/mongoose-express-demo

Additional Resources:
  Mongoose Quick Start: http://mongoosejs.com/docs/3.5.x/docs/index.html

## Exercises:
### Building an ODM!

#### Mongoose is not magic! Its just a JavaScript Library! It has built in methods so you can do this:

```
  var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

  var url = 'mongodb://localhost:27017/myproject';

  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
      db.close();
    });
  });
```

with this:

```
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/test');
```

Nice right!

Not only that, but you can also do this:

```
  var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);f
      console.dir(docs);
      callback(docs);
    });
  }
```

with this:

```
  this.Kitten.find({}, function(err, kitten){
      console.log(kitten)
    });
```

This is the beauty of Mongoose's built-in functions.
TODO: need to change this because the current solution / exercise does not ask for a where function
Yesterday we whiteboarded a `where()` function similar to Mongoose's `where()`. Today we are going to work on building a Model class that has a `where()` function, as well as a few more.

### Get started building your own Mini-Mongoose!
TODO: fix these links after merging
Dive into the [exercise.md](https://github.com/sf-wdi-22-23/modules/blob/d03_odm_lab/w03-intro-backend-with-express/d03_odm_lab/exercise.md) file and have fun!

See the [solution.js](https://github.com/sf-wdi-22-23/modules/blob/d03_odm_lab/w03-intro-backend-with-express/d03_odm_lab/solution.js) if you need help.
