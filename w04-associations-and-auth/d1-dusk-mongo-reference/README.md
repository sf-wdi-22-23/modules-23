# Reference Relationships in Mongo(ose)

| Objectives |
| :---- |
| Describe one-to-one, one-to-many, and many-to-many data relationships |
| Write mongoose schemas for referenced data |
| Build the appropriate queries for referenced data relationships using `populate()` |

#### Setup

```javascript
// pull in mongoose module with require
var mongoose = require('mongoose');

```

The above code is the standard boilerplate mongoose setup that you will see in any seed.js or Model file.

This next snippet only needs to happen once in your server-side code or models. It will usually be in your main server code (`server.js`) or in your models index (`/models/index.js`) if you have one.

```javascript
// connect to the mongoose database, `console` collection
mongoose.connect('mongodb://localhost/console');
```

When we actually want to start setting up MongoDB data, we start with the Schema:


```javascript
// giving mongoose.Schema a shorter name for convenience
var Schema = mongoose.Schema;

// set up the videogame console schema
/*  Console Schema */
var consoleSchema = new Schema({
	name: String,
	manufacturer: String,
	released: Date
});
```
The `Console Schema` describes a videogame console such as Nintendo, Sega, or XBox.


```javascript
/*  Game Schema */
var gameSchema = new Schema({
	name: String,
	developer: String,
	released: Date,
	// I'm telling consoles to EXPECT references to Console documents
	consoles: [{type: Schema.Types.ObjectId, ref: 'Console'}]
});
```
The `Game Schema` above describes an actual videogame such as Super Mario Bros., MegaMan, Final Fantasy, and Skyrim.

Note the specific code on line 7 within the [] brackets.  With the brackets, we're letting the Game Schema know that each game will have an array called `consoles` in it.  Inside the `[]`,  we're describing what kind of data will go inside a game's `consoles` array as we work with the database. In this case we are telling the Game Schema that we will be filling the `consoles` array with ObjectIds, which is the type of that big ugly `_id` that mongoose automatically generates for us.  If you forget, it looks like this: ```55e4ce4ae83df339ba2478c6```.  That's what's going on with ```type: Schema.Types.Objectid```.  When we have the code ```ref: 'Console'``` that means that we will be storing ONLY ObjectIds associated with the ```Console``` document type.  Basically, we will only be putting ```Console``` ObjectIds inside the ```consoles``` array -- not the whole console object, and not any other kind of data object.


Now that we have our schemas defined, let's compile them all into active models so we can start creating documents!

```javascript
/* Compiling models from the above schemas */
var Game = mongoose.model('Game', gameSchema);
var Console = mongoose.model('Console', consoleSchema);
```

Let's make two objects to test out creating a Console document and Game document.

```javascript
/* make a simple obect for Console document creation */
 var nin64 = {
 	name: 'Nintendo 64',
 	manufacturer: 'Nintendo',
 	released: 'September 29, 1996'
};
```

```javascript
/* make a simple object for Game document creation*/
 var zelda = {
 	name: 'The Legend of Zelda: Ocarina of Time',
 	developer: 'Nintendo',
 	release: new Date('April 27, 2000'),
 	consoles: []
};
```

Notice that consoles is empty within the Game document.  That will be filled with ObjectIds later on.

Now we will create a `Console` document using the `nin64` object we made above.  While inside the console creation callback function, we'll also create our `Game` document.  We do this inside the `Console` creation because we can easily access the newly created `nintendo64` object this is available to us as a callback return in line 3.  

After we create the `Game` document, we push the `nintendo64` console document into the `zeldaGame` consoles array.  Since we already told the Game Schema that we will only be storing ObjectIds instead of actual `Console` documents in the `consoles` array, mongoose will convert `nintendo64` to it's unique `_id` .

```javascript
 Console.create(nin64, function(err, nintendo64){
 	if(err) {return console.log(err);}
 	Game.create(zelda, function(err, zeldaGame) {
 		if(err) {return console.log(err);}
 		zeldaGame.consoles.push(nintendo64);
 		zeldaGame.save();
 		console.log('Game success: \n' + zeldaGame);
 	});
 })
```
This is the result after executing the code we've written thus far:

```javascript
{ __v: 0,
  name: 'The Legend of Zelda: Ocarina of Time',
  developer: 'Nintendo',
  _id: 55e4eb857d6157f4d41a2981,
  consoles: [ 55e4eb857d6157f4d41a2980 ] }

```
What are we looking at?

	- Line 1: `__v` represents the number of times the document has been accessed

	- Line 2: The name property of the Game Document we have created.

	- Line 3: The developer property of the Game Document we have created.

	- Line 4: The unique `_id` created by Mongoose for our Game Document.

	- Line 5: The consoles array with a single `ObjectId` that is associated with our Console Document.

Lets print out the Console Document `nintendo64` to make sure the `ObjectId` in consoles matches the `_id` we see for this game:

```javascript

 Console.findOne({_id: "55e4eb857d6157f4d41a2980"}, function (err, foundConsole){
 	 if(err) {return console.log(err);}
 	 console.log(foundConsole);
 });

{ _id: 55e4eb857d6157f4d41a2980,
    name: 'Nintendo 64',
    manufacturer: 'Nintendo',
    released: Sun Sep 29 1996 00:00:00 GMT-0700 (PDT),
    __v: 0 }

```

Sure enough, the only `ObjectId` from the game's `consoles` array matches the Console Document `_id` we created!.  What's going on?  The Game Document consoles has a single `Objectid` that contians the '*address*' or the '*location*' where it can find the Console Document if and when it needs it.  This keeps our Game Document small, since it doesn't have to have so much information packed into it.  When we need the Console Document data, we have to ask for it explicitly. Until then, mongoose is happy to show just the `ObjectId` associated with each console in the game's `consoles` array.

## The `populate()` method

When we want to get full information from a Console Document we have inside the Game Document consoles array, we use the method call ```.populate()```.  

```javascript
Game.findOne({ name: 'The Legend of Zelda: Ocarina of Time' })
	.populate('consoles')
	.exec(function(err, game) {
 		if(err){return console.log(err);}
 		console.log(game);
 		console.log("/nI love " + game.name + " for the " + game.consoles[0].name);
 	});
```
Let's go over this method call line by line:

	- Line 1: We call a method to find only **one** Game Document that matches the name: `The Legend of Zelda: Ocarina of Time`.

	- Line 2: We ask the consoles array within that Game Document to fetch the actual Console Document instead of the `ObjectId` referencing that Console Document

	- Line 3: When we use `find` without a callback, then `populate`, like here, we can put a callback inside an `.exec()` method call. Technically we have made a query with `find`, but only exectued it when we call `.exec()`.

	- Lines 3-5: If we have any errors, we will log them.  Otherwise, we can display the entire Game Document **including** the populated consoles array.

	- Line 6 demonstrates that we are able to access both data from the original Game Document we found **and** the referenced Console Document we summoned.  

This is the actual output from the above `findOne()` method call:

```javascript
{ _id: 55e4eb857d6157f4d41a2981,
  name: 'The Legend of Zelda: Ocarina of Time',
  developer: 'Nintendo',
  __v: 1,
  consoles:
   [ { _id: 55e4eb857d6157f4d41a2980,
       name: 'Nintendo 64',
       manufacturer: 'Nintendo',
       released: Sun Sep 29 1996 00:00:00 GMT-0700 (PDT),
       __v: 0 }
   ]
}
I love The Legend of Zelda: Ocarina of Time on the Nintendo 64

```

Now, instead of seeing **only** the `ObjectId` that pointed us to the `Console` document, we can see the **entire** `Console` document.  Notice that the `Console` document's `_id` is exactly the same as the `ObjectId` that was previously referencing it. They are one in the same!  
