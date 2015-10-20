# Hiding API Keys in Express

## To start, clone this [project]('https://github.com/sf-wdi-22-23/api_keys_app'):
- `git clone https://github.com/sf-wdi-22-23/api_keys_app w04-d2-drills`
- `cd w04-d2-drills`
- `npm install`

### Setting up and Hiding a secret API key in a ```.env``` file

1. We are going to use a handy npm module called [dotenv]('https://www.npmjs.com/package/dotenv'). Run ```npm install dotenv --save```
1. Run ```touch .env``` to create a `.env` file. This file is where you will define **Development Environment Variables** and **Secret Variables** using the syntax ```NAME=VALUE```. Add a SECRET_API_KEY variable with some key-like thing assigned to it. We're going to be using the Food2Fork API.

  .env
    ```
    FOOD_API_KEY=599b7fbb65bf34c008d4903dd396bf5c
    ```
2. Since your `.env` file has secrets (!), it shouldn't get checked in to your git. Type `git status` and notice that your  new `.env` file is listed as `untracked`. Add `.env` to your `gitignore` and run `git status` again. Notice that `.env` is not listed anymore!

### Accessing ```.env```

1. In your `server.js`, load the `dotenv` module and use process.env.YOUR_VARIABLE as the syntax

  server.js
  ```js
  //require the module
  require('dotenv').load();

  var FOOD_API_KEY = process.env.FOOD_API_KEY;
  //this should log your secret key!
  console.log(FOOD_API_KEY);
  ```

1. Run your server (`nodemon`) to make sure that your `FOOD_API_KEY` is getting logged.


### Get API data from your server
1. We'll be using the [npm request package]('https://www.npmjs.com/package/request').
  ```
  npm install request --save
  ```
1. Add to `server.js`

  ```js
  var request = require('request');
  ```
1. Get data from Food2Fork
  ```js
  var foods;

  request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q=chocolate', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // This API sends the data as a string so we need to parse it. This is not typical.
      foods = JSON.parse(body).recipes;
    }
  });
  ```
1. Send the foods data to your client in the `res.render`

### Adding it to your `index.ejs`
1. Display this data in your view

  ```html
  <% for(var i=0; i<foods.length; i++) { %>
    <div class="col-sm-6 col-md-4">
      <div class="thumbnail">
        <img src="<%=foods[i].image_url%>">
        <div class="caption">
          <h3><%=foods[i].title%></h3>
        </div>
      </div>
    </div>
  <% } %>
  ```
1. YAYYYYY

### Bonus: check out the [dotenv docs](https://www.npmjs.com/package/dotenv). Take a look at their .env example and think about the variables they have in there and Google what they are for.
