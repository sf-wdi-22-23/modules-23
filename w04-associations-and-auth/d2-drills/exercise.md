# Hidding API Keys in Express

## You can do these steps on an existing Express project you have, or start a quick new node project to test this out (without express):
- make new dir
- cd into new dir
- npm init
- git init
- touch index.js

### Setting up and Hiding a secret API key in a ```.env``` file

1. We are going to use a handy module called 'dotenv'. Run ```npm install dotenv --save```
1. Create a ```.env``` file in the root folder of your project. This file is where you will define **Development Environment Variables** and **Secret Variables** using the syntax ```NAME=VALUE``` Add a SECRET_API_KEY variable with some key-like thing assigned to it:

  .env
    ```
    SECRET_API_KEY=02934umr092j09mrjj0ije2390msek
    ```
2. Add a ```.gitignore``` file to your project also in the root folder, add ```.env``` to it and save it.
3. run ```$ git status``` and you will see .gitignore is added to your project but you will not see ```.env``` because you do not want to save it to github.

### Accessing ```.env```

1. load the module and use process.env.YOUR_VARIABLE as the syntax

  server.js
  ```js
  //require the module
  require('dotenv').load();

  var API_KEY = process.env.SECRET_API_KEY;
  //this should log your secret key!
  console.log(API_KEY);
  ```

2. Now ```API_KEY``` will be equal to your the SECRET_API_KEY in your config .

