function Model(name){
  this.type  = name;
  this.data = [];
  this._id = 0;
}


// ZOMG! This is a JavaScript pattern you may not have seen. 
// Don't freak out. It is the same as doing this:
// Model.prototype.aMethod = function(object, callback){
  // ...
// }
// for each method. 


Model.prototype = {

    create : function (object, callback){
        var objectContainer = {};
        objectContainer._id = this._id++;
        objectContainer._ts = Date.now();
        objectContainer.subData = object;
        this.data.push(objectContainer);
        return callback(objectContainer);
    },

    findByID : function(objectId, callback){
        var found;
        this.data.forEach( function (object) {
          if(object._id === objectId){
            found = callback(object);
          }
        });
        return found;
    },

    update : function(objectId, updateObject, callback) {
        var update;
        this.data.forEach( function (objectContainer) {
          if(objectContainer._id === objectId){
            objectContainer.subData = updateObject;
            update = objectContainer;
          }
        });
        return update;

    },

    delete : function(objectId, callback) {
        var pos, marked;
        this.data.forEach( function (objectContainer, index) {
          if(objectContainer._id === objectId){
            marked = objectContainer;
            pos = index;
          }
        });
        this.data.splice(pos,1);
        return callback(marked);
    }
}

/* Instantiate Model object */
var user = new Model("user");

/* Create objects */
[
  {first_name: "Mister", last_name: "Robot"},
  {first_name: "Stanley", last_name: "Steemer"},
  {first_name: "Action", last_name: "Bronson"},
  {first_name: "Jillian", last_name: "Murphy"},
  {first_name: "Nichole", last_name: "DeJarden"}
].forEach( function(person) {
  user.create(person, function(person){
    return person;
  });
});


/* Find object by id */
var found = user.findByID(3, function(success) {
    return success;
});
console.log("FounByID:\n", found);


/* Delete object */
var deleted = user.delete(1, function(success) {
    return success;
});
console.log("Deleted:\n",deleted);

/* Update object properties */

var updated = user.update(2, {first_name: "Joey", last_name: "Michaels"});
console.log("Updated:\n", updated);

/* Create object, Show continuation of id scheme after delete*/
user.create({first_name: "Billy", last_name: "Bragg"}, function(person){
    return person;
  });


/* Display data content */
console.log(user.data);