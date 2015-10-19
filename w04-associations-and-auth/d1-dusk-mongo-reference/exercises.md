

# Exercises

### Setup
To run mongoose commands in terminal:

1. `cd ~/dev`
1. `mkdir w04-d1-dusk`
1. `cd w04-d1-dusk`
1. `touch server.js` --> this is where your mongoose code will go
1. `npm install mongoose`
1. to run: `nodemon server.js` --> this takes you to the node console

### Base Exercises

1. Assemble the code in this module's README into your `server.js` file and refactor it to create your own models that use referenced documents. Be creative and make it interesting and relevant (easier said than done).
1. Create at least 5 'top-level' documents (in my case, five games) and at least 3 referenced documents (in my case, three consoles).
1. Demonstrate the ability to display the documents with just an ObjectId for the referenced documents.
1. Finally, call `populate()` on a query and demonstrate the **full** referenced documents as in the README with the Legend of Zelda: Ocarina of Time and the Nintendo 64.  

### Stretch Exercises

1. Add another model to your code to create a multi-tiered structure.
1. Incorporate both embedded and referenced models.
1. Add a Tag model to your Mircoblog app and reference them in your posts. 

### Tips:

* Use `.remove` or `.findOneAndRemove` if your database gets cluttered.

* This `server.js` file might not work exactly because of the *asynchronous* nature of the database operations we're doing.  (They can finish in any order -- test this out with console logs in every callback.) Still, each individual snippet of code will be something we can incorporate into our server code later.
