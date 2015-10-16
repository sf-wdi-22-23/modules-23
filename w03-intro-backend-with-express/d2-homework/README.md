# Object Mapping

We'll start working with databases tomorrow! Yay!

![](https://media.giphy.com/media/D76YOxpdvXne8/giphy.gif)

Remember how our data got reset every time we restarted our servers over the past few days? Databases help us store data *persistently* longer than we could if we just stored data in an array in our server code. That's because, usually, we leave our database on and running even when we restart our server.  

We'll see a few different types of databases over this class that store data in different ways. Our first database, MongoDB, will store data in a format that looks a lot like JSON. The other database we'll look at, PostgreSQL, will store data in a much more broken up, strictly structured way.  

The way a database stores data isn't always the most convenient way for us to work with the data.  When we want to incorporate database data into a working app, we'll add a layer between the database and our code that helps translate from raw data to objects like we're used to working with. This layer "maps" the data to objects, so it's called an Object _something_ Mapper.

MongoDB refers to its data stores as "documents," so with MongoDB we'll use an Object Document Mapper (or ODM) called Mongoose. 

But for tonight!  Let's think about what we would want from an ODM. 

## Homework!

1. Continue the toEatly lab from today. If you have showing all foods on the index, creating new foods, and deleting foods done, you're in a really good place.  We'll continue on with this tomorrow starting from <a href="https://github.com/sf-wdi-22-23/toEatly/tree/sprint-three" target="_blank">the sprint-three branch</a>, so take a look.

1. In your `2x-homework/username` directory, create a `w03-d2-data-mapper.md` file.  Include your thoughts about the following questions in that file.

1. Look at the data inside this directory's `data.js` file.  How would you model this data with JavaScript object types?

1. Imagine we're storing and working with a large amount of hobbies.  What attributes would you include on a Hobby object type?  What methods might you create for a Hobby object type to help us manage hobby data?

1. Imagine we're storing and working with a large maount of cohorts.  What attributes would you include in a Cohort object type?  What methods might you create for a Cohort object type to help us manage cohort data?

1. Think back to the lab from today and to other interactions you've had with data. Object _data_ Mappers give us tools to work with any kind of data.  What attributes might you give a generic DataObject object type?  What methods might you give a generic DataObject object type based on the ways weve been using data so far?

1. Submit your homework by pushing to the `2x-homework` repo and creating a pull request.
