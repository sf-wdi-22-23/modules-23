

## Exercises

To run mongoose commands in terminal:

1. `cd ~/dev`
1. `mkdir w04-d1-dusk`
1. `cd w04-d1-dusk`
1. `touch server.js` --> this is where your mongoose code will go
1. `npm install mongoose`
1. to run: `nodemon server.js` --> this takes you to the node console

Assemble the code in the README into your `server.js` file and refactor it to create your own models that use referenced documents.  Be creative and make it interesting and relevant (easier said than done.)  Create at least 5 'top-level' documents (in my case, five games) and at least 3 referenced documents (in my case, three consoles).  Demonstrate the ability to display the documents with just an ObjectId for the referenced documents.  Finally, call populate() on a query and demonstrate the **full** referenced documents as I did above with the Legend of Zelda: Ocarina of Time and the Nintendo 64.  
