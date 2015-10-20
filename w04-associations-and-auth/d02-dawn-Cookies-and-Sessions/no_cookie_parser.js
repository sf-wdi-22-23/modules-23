var express = require("express");
var app = express();

app.get("/", function (req, res) {

  // write the HTTP Cookie to the Response Header
  res.set({
    "Set-Cookie": "message=hello"
  });

  res.send("Hello World");
});

app.listen(3000, function () {
  console.log("UP AND RUNNING");
});