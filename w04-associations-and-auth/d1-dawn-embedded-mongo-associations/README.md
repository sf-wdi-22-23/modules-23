# Intro to Document-Based Associations

| Objectives |
| :--- |
| Describe the difference between "Embedded" and "Reference" associations |
| Use an "Embedded" pattern to associate resources with Mongoose |
| Create, update, and delete data for the nested resource |

As pre-reading for this lesson please reference this [Mongo Relationships Reading](https://github.com/sf-wdi-22-23/modules/blob/master/w03-intro-backend-with-express/d4-weekend-lab/mongo-relationships.md)

## Mongoose Data Relationships

**Embedded Data** is directly nested inside of other data. Each record has a copy of the data.

**Referenced Data** is stored as an id inside other data. The id can be used to look up the information. All records that reference the same data look up the same copy.

There are trade-offs between *efficiency* and *consistency* depending on which type of data relationship you choose.

## Embedded Data Example: To-Do Lists

Imagine you have a database of todo `Lists`, each with many `Todos`. Since todos only belong to one list, you could use embedded data to store todos inside the list they belong to. If you needed to update or delete a todo, you would first need to find the associated list, then the todo to update or delete.

```js
// List model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    // require Todo model
    Todo = require('./todo');

var ListSchema = new Schema({
  name: String,
  // embed todos in list
  todos: [Todo.schema]
});

var List = mongoose.model('List', ListSchema);
module.exports = List;
```

```js
// Todo model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TodoSchema = new Schema({
  text: String,
  completed: Boolean
});

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
```

### Route to Create Embedded Data

```js
// create todo embedded in list
app.post('/api/lists/:listId/todos', function (req, res) {
  // set the value of the list id
  var listId = req.params.listId;

  // store new todo in memory with data from request body
  var newTodo = new Todo(req.body.todo);

  // find list in db by id and add new todo
  List.findOne({_id: listId}, function (err, foundList) {
    foundList.todos.push(newTodo);
    foundList.save(function (err, savedList) {
      res.json(newTodo);
    });
  });
});
```

### Route to Update Embedded Data

```js
// update todo embedded in list
app.put('/api/lists/:listId/todos/:id', function (req, res) {
  // set the value of the list and todo ids
  var listId = req.params.listId;
  var todoId = req.params.id;

  // find list in db by id
  List.findOne({_id: listId}, function (err, foundList) {
    // find todo embedded in list
    var foundTodo = foundList.todos.id(todoId);
    // update todo text and completed with data from request body
    foundTodo.text = req.body.todo.text;
    foundTodo.completed = req.body.todo.completed;
    foundList.save(function (err, savedList) {
      res.json(foundTodo);
    });
  });
});
```

### Route to Delete Embedded Data

```js
// delete todo embedded in list
app.delete('/api/lists/:listId/todos/:id', function (req, res) {
  // set the value of the list and todo ids
  var listId = req.params.listId;
  var todoId = req.params.id;

  // find list in db by id
  List.findOne({_id: listId}, function (err, foundList) {
    // find todo embedded in list
    var foundTodo = foundList.todos.id(todoId);
    // remove todo
    foundTodo.remove();
    foundList.save(function (err, savedList) {
      res.json(foundTodo);
    });
  });
});
```
