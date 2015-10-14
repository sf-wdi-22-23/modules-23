1.  Create an object constructor called Model.
  - The model will have these properties:
    - a parameter called `name`
    - a property `type` that is assigned the parameter `name`
    - an empty array named data
    - an identification number `_id` assigned to 0.

2. We need to add a create method to Model's prototype to store objects in our Model. This method should:
    - have the parameters `object` and `callback`
    - create a variable object_container that has an empty object assigned to it.  This object will house your passed-in object as well as other meta-data we will generate
    - Give our object_container a property '_id' nd assign to it our Model's '_id'
    - Increment our Model's '_id' property after assigning it.
    - Give our object-container a 'timeStamp' property with the current date assigned to it
    - Push  our object_container into our Model.data array
    - Lastly this function calls our callback. Our callback should simple return any object passed-in as an argument. This can be done using an anonomous function in our method call. for example:
    ```
        user = new Model("user");
        user.create({first_name: "Mister", last_name: "Robot"}, function(result){ return result})
    ```

3. Add a find_by_id method to Model's prototype which:
    - has the parameters 'object_id' and 'callback'
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Returns the matching object within a callback call
    <br><br>

2. Add a where method like similar to what we made in drills which:
    - has a parameter 'properties' that looks will look like this: {first_name: "Jillian"}
    - has a parameter 'callback' that takes a function
    - iterates over this.data instead of a passed in array
    - returns an array of objects that match the properties passed in passed into a call back like this: return callback(output)

3. Add a update method to Model's prototype which:
    - has the parameters `object_id`, `update_object`, and `callback`
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Updates that matching object's data property
    - Returns the matching object within a callback call
    <br><br>
  - destroy:
    - Method that has the parameters `object_id`, and `callback`
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Removes the matching object from the Model `data` array
    - Returns the matching object within a callback call

4. STREEEEETCHHHHH
  - check out this tutorial on how to https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-introduction?series=how-to-write-an-open-source-javascript-library
  - and/ or this blog post: https://quickleft.com/blog/creating-and-publishing-a-node-js-module/
  - create a nodeJS module that is downloadable via npm install, just like Mongoose is. 