# Mini-Mongoose: Building your own ODM

## Overview

In this exercise you will be implementing your own version of Mongoose in order to understand how an object-document-mapper (ODM) works under the hood. This exercise will consist of building a constructor function and adding several functions that mimic Mongoose's functionality to the constructor's prototype.

### Base Challenges

**Create an object constructor called Model**

  1.  Define a function called Model. The model will have these properties:
      - has a parameter called `name`
      - has a property `type` that is assigned the parameter `name`
      - has an empty array named data
      - has an identification number `_id` assigned to 0.
  2. Create a function called `returnThis` which takes a parameter `object`. Have the callback return the passed-in object.

   ```js
   // constructor function with name parameter
   function Model(name) {
     // property 'type' assigned to parameter 'name'
     this.type = name;
     // property 'data' assigned to empty array
     this.data = [];
     // property '_id' assigned to 0
     this._id = 0;
   }

   console.log(Model); // [Function: Model]
   console.log(Model.prototype); // {}

   // callback function we can use to return an object
   // this is similar to how Mongoose operates
   function returnThis(object) {
     return object;
   }
   ```

**Add a create method to the Model's prototype:**

  1. Define a `create()` function as a property on the Model's prototype which accepts the parameters `configObj` and `callbackFunc`. The `configObj` is the Javascript object literal that will be used to build the new instance of `Model` and `callbackFunc` is a function that will be called later.
  2. Defines a variable `objectContainer` that has an empty object assigned to it.  This object will house your passed-in object as well as other meta-data we will generate.
  3. Give `objectContainer` a property `_id` and assign to it our Model's `_id` incremented by 1.
  4. Assign the `objectContainer`'s `subData` property to the `configObj`.
  5. Give our `objectContainer` a `timeStamp` property with the current date assigned to it. *Hint: use the Date constructor*
  6. Push our `objectContainer` into our Model.data array.
  7. Lastly this function returns our callback. Our callback should simply return any object passed-in as an argument.

    ```js
    // add create function as property to Model prototype, passing an object for configuration and a callback function
    Model.prototype.create = function(configObj, callbackFunc) {
      // set an empty object as your objectContainer (what is this meant to be? Better name?)
      var objectContainer = {};
      // define a property of '_id' on objectContainer
      // assign objectContainer's '_id' property to the Model's `_id` property (incremented!)
      objectContainer._id = this._id++;
      // define subData property of objectContainer, set it to passed-in configObj
      objectContainer.subData = configObj;
      // define timestamp property of objectContainer, assign it to new instance of Date object
      objectContainer.timestamp = new Date();
      // add the objectContainer to the Model instance's data array
      this.data.push(objectContainer);
      // return the output of the passed-in callback executing
      return callbackFunc(objectContainer);
    }
    ```

**Add a `findById` method to the Model's prototype:**

  1. Define a `findById()` function as a property on the Model's prototype which accepts the parameters `objectId` (an integer) and `callback` (a function to be called later).
  2. Iterate over the Model's `data` array for a matching object that has the same `objectId`.
  3. Return the matching object using the passed-in callback.
    <br><br>
    ```js
    // define function as property 'findById' on Model prototype, passing objectId (an integer, and a callback function)
    Model.prototype.findById = function(objectId, callback) {
      // iterate over data array of Model instance
      this.data.forEach(function(object) {
        // if the current object being iterated over has an _id matching the objectId
        if (object._id === objectId) {
          // return the matching result using the callback function
          return callback(object);
        }
      })
    }
    ```

**Add a update method to the Model's prototype:**

    1. Define an `update()` function as a property on the Model's prototype which accepts the parameters `objectId`, `updateObject`, and `callback`
    2. Iterate over the Model's `data` array for a matching object that has the same `objectId`.
    3. Update the matching object's subData property by assigning it to the passed-in `updateObject`.
    4. Return the matching object within a callback call.
    <br><br>

    ```js
    // define function as property 'update' on Model prototype, passing objectId (an integer, and a callback function)
    Model.prototype.update: function(objectId, updateObject, callback) {
        // iterate over data array of Model instance
        this.data.forEach(function(object) {
          // if the object currently being iterated over
          // has an '_id' that matches the objectId
          if(object._id === objectId){
            // set that object's subData property to the updateObject
            object.subData = updateObject;
            // return the updated objectContainer using callback function
            return callback(objectContainer);
          }
        });
    }
    ```

**Add a destroy method to the Model's prototype:**

  1. Define a `destroy()` function as a property on the Model's prototype which takes the parameters `objectId`, and `callback`.
  2. Iterate over the Model's `data` array for a matching object that has the same `objectId`.
  3. Remove the matching object from the Model `data` array.
  4. Return the matching object within a callback call.

    ```js
    Model.prototype.delete: function(objectId, callback) {
        // set variables for later use
        var position, marked;
        // iterate over data array of Model instance
        this.data.forEach(function(object, index) {
        // object is the item currently being iterated over
        // index is that item's position in the data array

        // if the current object being iterated over has an '_id' equal to the objectId
          if(object._id === objectId){
        // set marked to the object and position to the index
            marked = object;
            position = index;
          }
        });
        // splice one item from the array at the index of position
        this.data.splice(position, 1);
        // return marked object using callback
        return callback(marked);
    }
    ```

4. STREEEEETCHHHHH
  **Hook up your new hand-made database to some routes using Express and EJS to render templates of your data retrieved from the database**
  1. Spin up an Express app using `npm init` and `npm install`
  2. Write routes that correspond to each of your Model constructor's functions
  3. Use what you know of routing params, query strings, or body parser to populate EJS templates with the appropriate information from the queried object

  - check out this tutorial on how to https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-introduction?series=how-to-write-an-open-source-javascript-library
  - and/ or this blog post: https://quickleft.com/blog/creating-and-publishing-a-node-js-module/
  - create a nodeJS module that is downloadable via npm install, just like Mongoose is.
