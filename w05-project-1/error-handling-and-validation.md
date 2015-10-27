# Handling Errors, Validating and Normalizing Data

## Why?

![stuff happens](http://40.media.tumblr.com/tumblr_lm2sw9iGyT1qd9qa2o1_1280.jpg)

## Data Validation

### Client-Side Validation

The first line of defense for keeping data clean and avoiding user generated errors is to validate that the proper data and data types are being entered by your users. You can roll your own client-side validation with some easy javascript, or use [jQuery validate](http://jqueryvalidation.org/).

##### jQuery Validate Example

Try this out in an html file.

```html
<script src="
https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.min.js"></script>

<form id="login">
  <input name="email" type="email" class="required">
  <input name="password" type="password" class="required">
  <button type="submit">Login</button>
</form>

<script>
  $('#login').validate();
</script>
```

**Exercise**: add jQuery validate to your project and validate the required fields of at least one form.

### Server-Side Validation & Data Normalization

The second line of defense is to put requirements in your database to reject malformed data. We accomplish this using [Mongoose's Validation options](http://mongoosejs.com/docs/validation.html).

###### Normalization: Setters and Getters

```js
function toLower (v) {
  return v.toLowerCase();
}

var UserSchema = new Schema({
  email: { type: String, set: toLower }
});
```

```js
function obfuscate (cc) {
  return '****-****-****-' + cc.slice(cc.length-4, cc.length);
}

var AccountSchema = new Schema({
  creditCardNumber: { type: String, get: obfuscate }
});
```

###### Validaton: Type

```js
var Dude = new Schema({
    createdAt: { type: Date, default: Date.now }
})
```

###### Validation: min/max, regex, required, select

```js
var Person = new Schema({
    // min/max
    age: { type: Number, min: 5, max:100 },
    // Regex
    name: { type: String, validate: /[a-z]/ },
    // Required
    email: { type: String, required: true },
    // Don't send normally
    password: { type: String, required: true, select: false }
})
```

###### Validation: Custom

```js
var toySchema = new Schema({
  color: String,
  name: String
});

var Toy = mongoose.model('Toy', toySchema);

Toy.schema.path('color').validate(function (value) {
  return /blue|green|white|red|orange|periwinkle/i.test(value);
}, 'Invalid color');
```


### The Err Object

Each validation option will let you know what went wrong in the `err` object as the first argument of any Mongoose method.

```js
var toy = new Toy({ color: 'grease'});

toy.save(function (err) {
  // err is our ValidationError object
  // err.errors.color is a ValidatorError object

  console.log(err.errors.color.message) // prints 'Validator "Invalid color" failed for path color with value `grease`'
  console.log(String(err.errors.color)) // prints 'Validator "Invalid color" failed for path color with value `grease`'
  console.log(err.errors.color.type)  // prints "Invalid color"
  console.log(err.errors.color.path)  // prints "color"
  console.log(err.errors.color.value) // prints "grease"
  console.log(err.name) // prints "ValidationError"
  console.log(err.message) // prints "Validation failed"
});
```


### Responding To The Client

```js
// Server-Side
app.post('/posts', function (req, res) {
  var post = Post.new(req.body)
  post.save(function (err) {
    if (err) {
      res.send(400, {err: err.errors})
    } else {
      res.send(201, {post: post})
    }
  })
})
```

### Showing and Hiding the Alert

```html
<div class='alert' id='alert' style="display:none;"></div>
```

```js
function alertHandler(msg, type) {
  $('#alert').addClass(type).text(msg).fadeIn();
  setTimeout(function() { $('#alert').fadeOut().text('').removeClass(type); }, 4000);
}
// Client
var post = $(this).serialize();
$.post('/posts', post)
  .success(function (data) {
    //
    var msg = "Post saved!"
    alertHandler(msg, 'alert-success')
  })
  .error(function() {
    var msg = "There was a problem saving your post. Please try again.";
    alertHandler(msg, 'alert-danger')
  });
```

**Exercise**: Setup a schema level validation and handle the error in your ajax `error()` function. Can you put your alert in the upper right corner of the page?
