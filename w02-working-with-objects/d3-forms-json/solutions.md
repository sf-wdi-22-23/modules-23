**Forms & Queries** -- Solutions

## Query Parameters

#### convertToObject(query_parameter_string)
``` javascript
// var string = "a=apple&b=banana&c=cola&d=duck&e=egads&f=fancy";
function convertToObject(qp) {
    var output = {};
    if (!qp) { return output; }
    qp.split("&").forEach(function(sub_str){
        var pair = sub_str.split("=");
        output[pair[0]] = pair[1];
    })
    return output;
}
// convertToObject(string);
```

#### convertToQueryParameter(object)
``` javascript
// var object = {first: "alpha", last: "omega"};
function convertToQueryParameter(o) {
    var pairs = Object.keys(o).map(function(key){
        return key + "=" + o[key];
    });
    return pairs.join("&");
}
// convertToQueryParameter(object);
```

## Forms

####Login Form
```html
<form>
    <input type="text" name="username" placeholder="Enter your username"></br>
    <input type="password" name="password" placeholder="Enter you password"></br>
    <input type="submit" value="Login">
</form>
```

####Doomed yet?
```html
<form action="http://hasthelargehadroncolliderdestroyedtheworldyet.com" method="GET">
    <input type="submit" value="Are we doomed?">
</form>
```

####Color Search
``` html
<form action="https://duckduckgo.com" method="GET">
    <input type="color" name="q" required>
    <input type="submit" value="Search this color">
</form>
```

####Image Search
``` html
<form action="https://www.google.com/search" method="GET">
    <input name="tbm" value="isch" hidden>
    <input type="text" name="q" placeholder="search images" required>
    <input type="submit" value="Go!">
</form>
```

####Movie Search
``` html
<form action="http://omdbapi.com" method="GET">
    <input type="text" name="t" placeholder="Movie (required)" required></br>
    <input type="number" min="1900" name="y" placeholder="Year (optional)"></br>
    <input type="submit" value="Find it!">
</form>
```

####Return of the Movie Search
``` javascript
$.get("http://omdbapi.com/?t=primer", function(response_data){
    console.log("I'm back! Here's your data:")
    console.log(response_data.Plot);
});

// or

$.get("http://omdbapi.com", {t: "primer"}, function(response_data){
    console.log("I'm back! Here's your data:")
    console.log(response_data.Plot);
});

// or the more advanced syntax

$.ajax({
    method: "GET",
    url: "http://omdbapi.com",
    data: {t: "primer"},
    success: function(response_data){
        console.log("I'm back! Here's your data:");
        console.log(response_data.Plot);
    },
    error: function(){
        console.log(":(");
    }
});
```
