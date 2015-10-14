# Mini-Mongoose: Building your own ODM

## Overview

In this exercise you will be implementing your own version of Mongoose in order to understand how an object-document-mapper (ODM) works under the hood. This exercise will consist of building a constructor function and adding several functions that mimic Mongoose's functionality to the constructor's prototype.

1.  Create an object constructor called Model.
  - The model will have these properties:
    - has a parameter called `name`
    - has a property `type` that is assigned the parameter `name`
    - has an empty array named data
    - has an identification number `_id` assigned to 0.

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
   ```

2. Add a create method to Model's prototype which:
    - has the parameters `configObj` and `callbackFunc`
    - creates a variable object_container that has an empty object assigned to it.  This object will house your passed-in object as well as other meta-data we will generate
    - Give our objectContainer a property '_id' and assign to it our Model's '_id'
    - Increment our Model's '_id' property after assigning it.
    - Give our object-container a 'timeStamp' property with the current date assigned to it
    - Push our objectContainer into our Model.data array
    - Lastly this function calls our callback. Our callback should simple return any object passed-in as an argument

    ```js
    // add create function as property to Model prototype, passing an object for configuration and a callback function
    Model.prototype.create = function(configObj, callbackFunc) {
      // set an empty object as your objectContainer (what is this meant to be? Better name?)
      var objectContainer = {};
      // define subData property of objectContainer, set it to passed in object
      objectContainer.subData = configObj;
      // define a property of '_id' on objectContainer, assign value of configObj's '_id' property
      objectContainer._id = configObj._id;
      // increment the Model instance's '_id' property by 1
      this._id++;
      // define the timestamp property of the objectContainer, assign it to
      objectContainer.timestamp = new Date() || Date.now(); // do we want to the Unix timestamp?
      // add the objectContainer to our the Model instance's data array
      this.data.push(objectContainer);

      return callback(objectContainer);
    }
    ```

3. Add a findById method to Model's prototype which:
    - has the parameters 'objectId' and 'callback'
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Returns the matching object within a callback call
    <br><br>
    ```js
    // define function as property 'findById' on Model prototype, passing objectId (an integer, and a callback function)
    Model.prototype.findById = function(objectId, callback) {
      // set var found for later use;
      var found;
      // iterate over data array of Model instance
      this.data.forEach(function(object) {
        // if the current object being iterated over has an _id matching the objectId
        if (object._id === objectId) {
          //found to the result of the callback function
          found = callback(object);
        }
      })
      // return found object
      return found;
    }
    ```

3. Add a update method to Model's prototype which:
    - has the parameters `object_id`, `update_object`, and `callback`
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Updates that matching object's data property
    - Returns the matching object within a callback call
    <br><br>

    ```js
    // define function as property 'update' on Model prototype, passing objectId (an integer, and a callback function)
    Model.prototype.update: function(objectId, updateObject, callback) {
        // define 'update' for later use
        var update;
        // iterate over data array of Model instance
        this.data.forEach(function (objectContainer) {
          // if the objectContainer currently being iterated over
          // has an '_id' that matches the objectId
          if(objectContainer._id === objectId){
            // set that objectContainer's subData property to the updateObject
            objectContainer.subData = updateObject;
            // set update to be the objectContainer
            update = objectContainer;
          }
        });
        // return the update
        return update;
    }
    ```

  - destroy:
    - Method that has the parameters `object_id`, and `callback`
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Removes the matching object from the Model `data` array
    - Returns the matching object within a callback call

    ```js
    Model.prototype.delete: function(objectId, callback) {
        // set variables for later use
        var position, marked;
        // iterate over data array of Model instance
        this.data.forEach(function (objectContainer, index) {
          // if the current objectContainer being iterated over
          // has an '_id' equal to the objectId
          if(objectContainer._id === objectId){
            // set marked to the objectContainer and position to the index
            marked = objectContainer;
            position = index;
          }
        });
        // splice one item from the array at the index of position
        this.data.splice(position,1);
        // return marked object using callback
        return callback(marked);
    }
    ```

4. STREEEEETCHHHHH
  - hook up your new hand-made database to some routes using Express and EJS to render templates of your data retrieved from the database
  - check out this tutorial on how to https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-introduction?series=how-to-write-an-open-source-javascript-library
  - and/ or this blog post: https://quickleft.com/blog/creating-and-publishing-a-node-js-module/
  - create a nodeJS module that is downloadable via npm install, just like Mongoose is.
