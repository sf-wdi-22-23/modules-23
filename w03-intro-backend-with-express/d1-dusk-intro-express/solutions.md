**Express Routing** -- Solutions

The following solutions assume that the following boiler-plate is present in the `index.js` server code:

``` javascript
var express = require("express");
var app = express();

// SOLUTION HERE

var port = 3000;
app.listen(port, function(){
  console.log("Server Running at localhost:3000/")
});
```

### Pick A Color
``` javscript
app.get("/color/:choice", function(req, res){
  var choice = req.params.choice;
  res.send("Your color is: " + choice);
});
```

### Which Taco -- Indexing a Collection

``` javascript
    
var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];
               
var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

app.get("/taco/:index", function(req, res){
  var index = req.params.index;
  var selection = tacos[index] || "Sorry, that's not a taco option";
  res.send( selection );
});

app.get("/burger/:index", function(req, res){
  var index = req.params.index;
  var selection = burgers[index] || "Sorry, that's not a burger option";
  res.send( selection );
});
```

### The Number Guessing Game 

Using `params` ("localhost:3000/pick-a-number/100"):
``` javascript
var correct_number = 7;

app.get("/pick-a-number/:num", function(req, res){
  var num = req.params.num;
  if (num === correct_number){
    res.send("Nailed it!");
  } else if (num > correct_number){
    res.send("Too High!")
  } else {
    res.send("Too Low")
  }
});
```

Using `query` ("localhost:3000/pick-a-number?num=100"):

``` javascript
var correct_number = 7;

app.get("/pick-a-number", function(req, res){
  var num = req.query.num;
  if (num === correct_number){
    res.send("Nailed it!");
  } else if (num > correct_number){
    res.send("Too High!")
  } else {
    res.send("Too Low")
  }
});
```

### Calculator app -- Using Query Parameters

``` javascript
app.get("/add", function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  var total = x+y;
  res.send( total );
});

app.get("/multiply", function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  var total = x*y;
  res.send( total );
});
```

