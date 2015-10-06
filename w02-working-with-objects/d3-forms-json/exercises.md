**Forms & Queries** -- Exercises

Please clone and use this [blank template](https://github.com/sf-wdi-22-23/blank_template) as your starting point.

### Query Parameters -- [solutions](solutions.md)

0. Create a function that converts a string into an object, using the following principle:  
    - A `=` separates a `key` on the left from a `value` on the right.
    - An `&` separates key-value pairs from each other.
    - The string may not contain spaces.

Here's how your conversion function should work:

```
var qp = "first=alpha&last=omega";
convertToObject(qp); // {first: "alpha", last: "omega"}
```

Keep in mind that the string could be very long:

```
var qp = "a=apple&b=banana&c=cola&d=duck&e=egads&f=fancy";
```

Bonus: create the reverse function:
```
var o = {first: "alpha", last: "omega"};
convertToQueryParameter(o); // "first=alpha&last=omega";
```

###Forms -- [solutions](solutions.md)
For the following exercises, please ONLY use html.

0. **Login Form**. Create an html `form` with two inputs: one for a username (named "username"), the other for password (named "password") (normally you don't see your password when you type it, so make sure it's blocked out!). What happens when you click submit?

1. **Doomed Yet?** Create an html `form` that, on submit, sends the user to "hasthelargehadroncolliderdestroyedtheworldyet.com". Hint: what's the form action? Bonus: Can you change the submit button to say "Are we doomed?".

2. **Color Search**. Create an html `form` that contains the html5 color-picker input (named "q"). When the user picks a color and clicks submit, redirect them to, e.g. "https://duckduckgo.com/?q=%2300fa91".

3. **Image Search**. Create an html `form` that has an action of "https://www.google.com/search" and contains three inputs:  
    - a hidden input with a name of "tbm" and a value of "isch".
    - a (required) text input with a name of "q", and a default value of "http status cats".
    - a submit button

    You should end up here: "https://www.google.com/search?tbm=isch&q=http+status+cats"

4. **Movie Search**. Create an html `form` that searches for movies on the OMDB API by title and by year. You will need to take care to use the correct query parameters. The only way to find out what they are is to [read their documentation](http://omdbapi.com/#usage).

6. Stretch: **Return of the Movie Search**. It's great that we can find find data about movies using the Open Movie Database, but it's not very helpful having all that data *somewhere else*. It would be awesome if we could "pull in" that data and use it on our webpage. It's time to learn about AJAX! Your goal is to figure out how to use [jQuery's `get` method](api.jquery.com/jQuery.get/) to request information (JSON) about the movie "Primer". Can you console.log the movie description? HINT: start by hitting the endpoint directly, then figure out how to "drill down" through the json object to get to the data you want.
