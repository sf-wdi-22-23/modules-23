# Forms -- Solutions

### Base Exercises
1. **Login Form**
```html
<form>
    <input type="text" name="username" placeholder="Enter your username"></br>
    <input type="password" name="password" placeholder="Enter you password"></br>
    <input type="submit" value="Login">
</form>
```

1. **Doomed yet?**
```html
<form action="http://hasthelargehadroncolliderdestroyedtheworldyet.com" method="GET">
    <input type="submit" value="Are we doomed?">
</form>
```

1. **Color Search**
``` html
<form action="https://duckduckgo.com" method="GET">
    <input type="color" name="q" required>
    <input type="submit" value="Search this color">
</form>
```

1. **Image Search**
``` html
<form action="https://www.google.com/search" method="GET">
    <input name="tbm" value="isch" hidden>
    <input type="text" name="q" placeholder="search images" required>
    <input type="submit" value="Go!">
</form>
```

1. **Movie Search**
``` html
<form action="http://omdbapi.com" method="GET">
    <input type="text" name="t" placeholder="Movie (required)" required></br>
    <input type="number" min="1900" name="y" placeholder="Year (optional)"></br>
    <input type="submit" value="Find it!">
</form>
```

### Stretch Exercise
1. **Return of the Movie Search**

``` js
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
