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

## What is an ODM?
An ODM (Object-Document Mapper) is a tool that lets you query and manipulate data from a non-relational database using an object paradigm.

Kind of like a librarian that knows a bunch of things, so you don't have to.
Similar to jQuery, Mongoose provides an adds a number of helper methods. Where jQuery adds methods for interacting with the DOM, Mongoose adds methods for interacting with a Mongo Database. 

## Exercises:
### Building an ODM!


Yesterday we whiteboarded a `where()` function similar to Mongoose's `where()`. Today we are going to work on building a Model class that has a `where()` function, as well as a few more.

### Get started building your own Mini-Mongoose!

TODO: fix these links after merging

Dive into the [exercise.md](https://github.com/sf-wdi-22-23/modules/blob/d03_odm_lab/w03-intro-backend-with-express/d03_odm_lab/exercise.md) file and have fun!

See the [solution.js](https://github.com/sf-wdi-22-23/modules/blob/d03_odm_lab/w03-intro-backend-with-express/d03_odm_lab/solution.js) if you need help.
