# Welcome To Ruby
## Control Flow and Methods

| After this module, you can phone your friends and tell them you can: |
|:--- |
| Identify control flow patterns and functions in Ruby |
| Apply control flow to create command line applications |
| Apply methods in ruby to solve problems |


### Ruby vs. JS Patterns

Review some of the differences between Javascript and Ruby:

Methods
  * [JavaScript and Ruby](http://agentcooper.io/js-ruby-comparison/).

Control Flow
  * [Ruby](http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Control_Structures)
  * [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

### Some Abstractions

#### Javascript Function vs. Ruby Method

Compare this javascript and ruby code:

```js
// JS

var posts;

posts.forEach(function(post) {
  console.log(post.title);
});

function functionName(arg1, arg2) {
  var sum = arg1 + arg2;
  return sum
}

function functionWithoutParams() {
  // code
}

functionName(arg1, arg2);
functionWithoutParams();
```

```ruby
# ruby

@posts.each do |post|
  puts post.title
end

def method_name(arg1, arg2)
    sum = arg1 + arg2
    return sum
end

def method_without_params
  # code
end

method_name(arg1, arg2)
method_without_params
```

Now compare these two controllers and create post route, one written in Express and one in Rails:

```js
// ExpressJS server.js

var Post = require('../models/post.js')
  , User = require('../models/user.js')

module.exports = function(app) {
  //CREATE POST
  app.post('/api/posts', function (req, res) {
    var post = new Post(req.body);
    post.user = req.session.userId;
    User.findById(req.session.userId, function (err, user) {
      if (err) { return console.log(err) }
      post.rsvps.push(user);
      post.save(function (err) {
        if (err) { return res.send(err) };
        res.status(201).json(post);
      });      
    })
  });
}
```

```ruby
class PostsController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :show]

  # POST /trips
  # POST /trips.json
  def create
    @post = current_user.trips.new(trip_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to post_path(@post), notice: 'Post was successfully created' }
        format.json { render json: @post, status: :created, location: @post }
      else
        format.html { render action: "new" }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end
end

```

###### Observations on Ruby Methods and Javascript Functions

Javascript:

  * Anonymous: `function (param1, [..param2, [...]]){...}`,
  * Named: `function Name(param1, [..param2, [...]]){...}`
  * Uses lexical scope
  * Used as values
  * require explicit return
  * all `params` are optional

Ruby:

  * uses `def`
  * Do not capture scope
  * Not used as values
  * optional parameters must be specified
  * implicitly returns last evaluation
  * block
    * used with `.each`, `.map`, et cetera
    * captures scope

[Further Reading on Blocks](http://mixandgo.com/blog/mastering-ruby-blocks-in-less-than-5-minutes)

#Intro to Ruby

#### Define a method

```ruby
# announce you are creating a method with 'def'
def say_hello
  # all logic and action within belongs to the method
  puts "Hello"
# end your method defniition with 'end'
end

# call the method 'say_hello'
say_hello
```

#### Define a method with a parameter

```ruby
def say(something)
  puts something
end

say('hello')

say 'hello'
```

If you don't have code that needs to use method result immediately, Ruby allows to specify parameters omitting parentheses:

```ruby
# calling method, not using parentheses
results = method_name parameter1

# You need to use parentheses if you want to work with the result immediately.
# e.g., if a method returns an array and we want to reverse element order:
results = method_name(parameter1).reverse
```

#### Define a method that operates on two parameters
```ruby
def add_numbers(first, second)
  puts first + second
end

add_numbers(1,2)
add_numbers 1, 2
```

#### Printing and returning are different
```ruby
def add_numbers_quietly(first, second)
  first + second
end

add_numbers_quietly(1,2)
add_numbers_quietly 1, 2
```

#### Methods in Ruby always return the value of the last evaluated expression
```ruby
def implicitly_return_5
  if true
    5
  end
end

implicitly_return_5
```

* What was the value of the if statement?
* `status_of_world = if 1 == 2 then "messed up" else "a-o-k" end`
* `result = 1 == 2 ? "wuh oh" : "phew"`


#### Parameters can have default values

```ruby
def say(something = "Hello")
  puts something
end

say # prints "Hello"
say "Goodbye" # prints "Goodbye"
```
#### Recursion: methods can call themselves

```ruby
def recurse(depth)
  if depth > 0
    puts "Spiraling down..."
    recurse(depth - 1)
    puts "Spiraling up..."
  else
    puts "Bottom of the rabbit hole"
  end
end

recurse(5)
recurse 5
```

## The biggest difference from javascript

#### Functions have locally scoped variables
The following code wont work. Why?

```ruby
foo = 1

def do_stuff
  foo += 1
  bar = 1
  puts foo
  puts bar
end

do_stuff

puts foo
puts bar
```

The problem is the ruby is locally scoped. Meaning that a function only has access to its variables and the variables it defined inside of itself.

```ruby
foo = 1

def do_stuff
  foo = 1
  foo += 1
  bar = 1
  puts foo
  puts bar
end

do_stuff

puts foo
puts bar

def do_stuff2(x)
  foo = x
  foo += 1
  bar = 1
  puts foo
  puts bar
end

puts do_stuff2(foo)
```

[Ruby Method Calls In Depth](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Method_Calls)


### Further Reading

* [Tutorialspoint Ruby Quick Guide](http://www.tutorialspoint.com/ruby/ruby_quick_guide.htm)
* [Ruby Hash in Detail] (http://ruby-doc.org/core-2.2.0/Hash.html)
* [RubyMonk Library](https://rubymonk.com/learning/books/1-ruby-primer)
* [Online IRB Environment] (http://joshnuss.github.io/mruby-web-irb/)
