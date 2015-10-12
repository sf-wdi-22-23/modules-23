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
 - It stores data in a database using nested documents and objects, rather than the rows and collumns of a traditional database

<img src="http://dataconomy.com/wp-content/uploads/2014/07/SQL-vs.-NoSQL.png">

## Express with MongoDB

### Lets get a quick express app together and connect it to MongoDB. 
- It should:
  - Run an app.js file which:
  - establishes a connection with MongoDB
  - Be able to add items to the database
  - be able to log all items in the database

My solution: https://github.com/awhit012/pure-mongo

Additional Resources: 

mongoDB-node repo: 

    https://github.com/mongodb/node-mongodb-native
express hello-word: 
    
    http://expressjs.com/starter/hello-world.html




## What is an ODM?
An ODM (Object-Document Mapper) is a tool that lets you query and manipulate data from a non-relational database using an object paradigm.

Kind of like a librarian that knows a bunch of things, so you don't have to.

## Express with Mongoose

### Lets create another express app that connects to MongoDB but this time using Mongoose. 

My solution: https://github.com/awhit012/mongoose-express-demo

Additional Resources: 
  Mongoose Quick Start: http://mongoosejs.com/docs/3.5.x/docs/index.html



## Exercises:
### Building an ODM!

#### Mongoose is not magic! Its just a JavaScript Library! It has built in methods so you can do this:

'''

  var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

  var url = 'mongodb://localhost:27017/myproject';

  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
      db.close();
    });
  });

'''

with this:

'''
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/test');
'''

Nice right!

Not only that, but you can also do this:

'''
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
'''

with this:

'''
  this.Kitten.find({}, function(err, kitten){
      console.log(kitten)
    });
'''

This is the beauty of Mongoose's build in functions. 

Yesterday we whiteboarded a where function like Mongoose's where. Today we are going to work on building a Model class that has a where functions, as well as a few more. 

Look in the exercise.md file in this directory. 

See the solution.js if you need help. 



