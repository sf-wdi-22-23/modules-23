# Express Mongoose

#Attack of the Mongo(ose)DB!

| Learning Objectives |
|:---|
| Compare and Contrast an SQL with a noSQL database
| Create a custom Schema and subsequent Model using the Mongoose library
| Execute basic CRUD actions with the the console/REPL
| Demonstrate the ability to create and modify embedded objects within top level objects in a noSQL database

<!-- ##First things first:  Install Party!

We need to use brew to install our new **MongoDB** database system!

From the console:

```
brew install mongodb
```

Now we need to create a directory for **MongoDB** to save and store data.

From the console: 

```
sudo mkdir -p /data/db
```

Let's ensure that the folder permissions allow us to read and write to our newly made directory.

From the console:

```
sudo chown -R $USER	/data/db
```

 -->
##Terminology:
- **RDBMS**: (Relational Database Management System)  
 
- **SQL**: (Structured Query Language) a special-purpose programming language designed for managing data held in a RDBMS  
  
- **noSQL**: Document databases pair each key with a complex data structure or object known as a document. Documents can contain many different key-value pairs, or key-array pairs, or even nested documents.

- **Schema**: Similar to an object constructor, a Schema is a diagram or blueprint for what every object in the noSQL database will contain.  Here's an example of a simple Address Book noSQL database schema:  

	```javascript
		var AddressBookSchema = new Schema({
		    firstName: String,
		    lastName: String,
		    address: String
		    phoneNumber: Number,
		    email: String
		    professionalContact: Boolean
		});
	```
*With the above Schema, we can expect all of our Address Book entries would have a first name, last name, address, and email address in the form of Strings.  We can count on the phoneNumber to always be accepted, stored, and returned as a number.  Lastly, the boolean value of Professional Contact will always be a `true` or `false`*

- **Model**: A model is a Schema that has been 'activated' with real data and is performing actions such as reading, saving, updating, etc.

##Schema vs. Model

>"In mongoose, a schema represents the structure of a particular document, either completely or just a portion of the document. It's a way to express expected properties and values as well as constraints and indexes. A model defines a programming interface for interacting with the database (read, insert, update, etc). So a schema answers "what will the data in this collection look like?" and a model provides functionality like "Are there any records matching this query?" or "Add a new document to the collection". ""

-[Peter Lyons Apr 8 '14 at 23:53](http://stackoverflow.com/a/22950402)



##RDBMS vs noSQL
A great analogy from a fellow StackOverflow:
> "NoSQL databases store information like you would recipes in a book. When you want to know how to make a cake, you go to that recipe, and all of the information about how to make that cake (ingredients, preparation, mixing, baking, finishing, etc.) are all on that one page.
> 
> SQL is like shopping for the ingredients for the recipe. In order to get all of your ingredients into your cart, you have to go to many different aisles to get each ingredient. When you are done shopping, your grocery cart will be full of all the ingredients you had to run around and collect.
> 
> Wouldn’t it be nicer if there was a store was organized by recipe, so you could go to one place in the store and grab everything you need from that one spot? Granted you’ll find ingredients like eggs in 50 different places, so there’s a bit of overhead when stocking the shelves, but from a consumer standpoint it was much easier/faster to find what they were looking for."  

-[mgoffin, Jan 20 '13 at 19:15](http://stackoverflow.com/questions/14428069/sql-and-nosql-analogy-for-the-non-technical/14428221#14428221)  


##Getting started with our own database!
####Caution: At this point, I urge you to simply read and absorb the information provided to see the basic patterns of creating and implementing databases.  You do not need to create a new node project to successfully learn from tonight's readings.  We'll go over this at a comfortable pace tomorrow :)

Head over to our app folder and we will install Mongoose via npm.   Mongoose is a Object-relational mapping middleware that enables us to easily model objects and interact with MongoDB.  

From the console:  

```
npm init
npm install --save mongoose
```

We need to make sure MongoDB is running.  From the console, enter this command: 

```
mongod
```
*Mongodb's secret servers will run in the background, so we don't have to worry about anything for right now.*

Go into your node repl, by typing `node` into bash.

Let's require mongoose and connect to our database.

```javascript
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
```

Pro Tip: press tab in node to see all global variables

###Modeling

Let's create `Book` model. A `Book` has a few different characteristics: `title`, `author`, and `description`.

To create a `Book` model we have to use a Schema:

```javascript
var Schema = mongoose.Schema;
var BookSchema = new Schema({
    title: String,
    author: String,
    description: String
});
```
and finally create the model

```javascript
var Book = mongoose.model('Book', BookSchema);
```

[Here is a link to all of the different datatypes we can use in a Schema](http://mongoosejs.com/docs/schematypes.html)

###Create -- Building and Creating Documents

A MongoDB *Document* is the entry of data stored in MongoDB; Documents are analogous to JSON objects but exist in the database in a more type-rich format known as BSON (binary-JSON).

If you want to build up a new `Book` you can just do the following:

```javascript
var book = new Book({title: "Alice's Adventures In Wonderland"});
```

Then you can play with it.

```javascript
book.author = "Lewis Carroll";
```

This is called *building as you're playing* with an object that can be saved to the database, but doesn't exist there yet.

Once you're done building you can save the book.

```javascript
book.save()
```

If you want to build & save in one step you can use create.

```javascript
Book.create({title: "The Giver"}, function (err, book) {
  console.log(book);
});
```


###Read

We can find books by author:

```javascript
  Book.find({author: "Lewis Carroll"}, function (err, books) {
    console.log(books);
  });
```

We can find ALL the books as follows (note that a pair of empty curly braces signals that we want EVERYTHING returned / no filtering):

```javascript
Book.find({}, function(err, books){
  console.log(books);
});
```

Try out some of the other find methods.

```javascript
.findOne();
.findById();
```
Reference the docs for more info on what you can do with Mongoose Models


###Destroy
Removing a Document is as simple as Building and Creating.

Using the remove method:

```javascript
Book.remove({ title: "The Giver" }, function(err, book) {
    if (err) { return console.log(err) };
    
    console.log("removal of " + book.title + " successful.")
});
```
Other removal methods include: 

```javascript
findByIdAndRemove();
findOneAndRemove();
    
```

##Further suggested readings:
[Mongoose official site](http://mongoosejs.com/index.html)
[MongoDB official site](https://www.mongodb.org/)
[Friendly Australian explains RDBMS vs noSQL](https://www.youtube.com/watch?v=XPqrY7YEs0A)
[Google I/O: Battle of the Backends: SQL vs noSQL](https://www.youtube.com/watch?v=rRoy6I4gKWU)	

