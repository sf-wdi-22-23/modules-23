function Model(name){
  this.type  = name;
  this.data = [];
  this._id = 0;
}

Model.prototype.create = function(object, callback){
  var objectContainer = {};
  objectContainer._id = this._id++;
  objectContainer._ts = Date.now();
  objectContainer.subData = object;
  this.data.push(objectContainer);
  return callback(objectContainer);
};

Model.prototype.findByID = function(objectId, callback){
  var found;
  this.data.forEach( function (object) {
    if(object._id === objectId){
      found = callback(object);
    }
  });
  return found;
};

Model.prototype.where = function(properties){
  var output = [];
  var length = this.data.length;
  var obj;
  for (var i=0; i<length; i++){
    obj = this.data[i];
    for (var key in obj.subData){
      if (obj.subData[key] === properties[key]){
          output.push(obj);
      };
    };
  };
  return output;
};

Model.prototype.update = function(objectId, updateObject, callback) {
  var update;
  this.data.forEach( function (objectContainer) {
    if(objectContainer._id === objectId){
      objectContainer.subData = updateObject;
      update = objectContainer;
    }
  });
  return update;
};

Model.prototype.delete = function(objectId, callback) {
  var pos, marked;
  this.data.forEach( function (objectContainer, index) {
    if(objectContainer._id === objectId){
      marked = objectContainer;
      pos = index;
    }
  });
  this.data.splice(pos,1);
  return callback(marked);
};


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
// console.log("FounByID:\n", found);


/* Delete object */
var deleted = user.delete(1, function(success) {
    return success;
});
// console.log("Deleted:\n",deleted);

/* Update object properties */

var updated = user.update(2, {first_name: "Joey", last_name: "Michaels"});
// console.log("Updated:\n", updated);

/* Create object, Show continuation of id scheme after delete*/
user.create({first_name: "Billy", last_name: "Bragg"}, function(person){
    return person;
  });

console.log(user.where({first_name: "Jillian"}))


/* Display data content */
// console.log(user.data);