# Exercises

### Setup

We'll run our mongoose commands in the terminal, then save them in a `mongoosePractice.js` file. The `mongoosePractice.js` file might not work exactly if we just run it with `node mongoosePractice.js` because of the *asynchronous* nature of the database operations we're doing. But each individual snippet of code will be something we can incorporate into our server code later.

To run mongoose commands in Terminal:

1. `cd ~/dev`
1. `mkdir w04-d1-dusk`
1. `cd w04-d1-dusk`
1. `npm install mongoose`
1. `node` --> this takes you to the node repl

	... once in the node repl:

1. `var mongoose = require('mongoose');`
1. `mongoose.connect('mongodb://localhost/console');`   
	note: when you're done, `mongoose.disconnect();`

To save the commands in a file:

1. `touch mongoosePractice.js` --> this is where your mongoose code will go
1. to run: `node mongoosePractice.js` --> this runs the file for and shows any console logs

### Base Exercises

1. Assemble the code in this module's README into your `mongoosePractice.js` file and refactor it to create your own models that use referenced documents. Remember - the file may not work if you run it in order because the queries are asynchronous.  Test each snippet in the console. Be creative and make your models interesting and relevant (easier said than done).
1. Create at least 5 'top-level' documents (in my case, five games) and at least 3 referenced documents (in my case, three consoles).
1. Demonstrate the ability to display the documents with just an ObjectId for the referenced documents.
1. Finally, call `populate()` on a query and demonstrate the **full** referenced documents as in the README with the Legend of Zelda: Ocarina of Time and the Nintendo 64.  
