#Ruby <3's OOP

##Learning Objectives
By the end of lesson, students will be able to...

* Distinguish between objects & classes in Ruby
* Initialize classes
* Define attributes & instance methods
* Distinguish between instance and class variables

##Hashes (10m)

Let's create a new Hash

* Hashes are simple key value stores.

**Challenge:**
How can I organize my data using key/value pairs in Ruby? Like so:

```ruby
{:name=>"Napoleon", :fav_food=>"steak", :skills=>["archery", "combat", "egg farming"]}
```

##Objects (10m)

* Everything in Ruby is an Object; however, we almost never use plain vanilla Objects because there are more sophisticated implementations of them such a `String`, `Integer`, and `Hash`.

**Challenge:**
How can we prove that the Hash we just created inherited from `Basic Object`?

###Class Inheritance Tree

![Class inheritance](http://i.stack.imgur.com/rvcEi.png)

##Classes (10m)

**Challenge:**
How do we create a class in Ruby?

Goal: Let's create a Car that goes "Vroom" when it's first *initialized*

*Refresher: Classes are datatypes used to create more data. They are analogous to constructors in JavaScript.*

##Attributes (10m)

What should we do if we want to set attributes on the car, such as a paint color and year?

**Challenge:**
Enable this code...

```ruby
fiat = Car.new
fiat.color = "hot pink"
fiat.color
=> "hot pink"
```

*Hint: Use `attr_accessor`.*

*Bonus: Don't use `attr_accessor`*

##Methods (10m)

**Challenge:**
How would we create an instance method for Car named `color?`, which tests whether the color matches what is passed in?

```ruby
alpha = Car.new
alpha.color = "orange"
alpha.color?("blue")
=> false
alpha.color?("orange")
=> true
```

*Hint: define a new method with the `def` keyword inside the class*

##Initialization & Instance Variables (10m)

**Challenge:**
What If I want to set the color of the car at the moment I'm creating it? How could I enable code like this?

```ruby
lambo = Car.new("red")
lambo.color
=> "red"
```

*Hint: Create an instance variable with `@`*

##Class Variables (10m)

What if I wanted a running counter for all the cars I've ever created? Enable the code: `Car.total` which outputs the total number of all cars ever created.

*Hint: Create a class variable with `@@` to store the count and use the `self` keyword to add a class method*

*Note: Class variables are used much more infrequently than instance variables*

## Quick Review (15m)

Think, pair, share...

  * What is a class?
    - What is an attribute?
    - What is a method?
  * What is the difference between:
    - an instance variable,
    - a class variable
  * Why do we use classes?
  * What is inheritance?

## Inheritance (25m)

Given an `Vehicle` class that contains the method `accelerate` & attribute `speed`..

```ruby
class Vehicle
  attr_accessor :speed
  def initialize
  	@speed = 0
  end
  def accelerate(speed)
  	@speed += speed
  end
end
```

**Challenge:**
How can I create both `Car` and `Motorbike` classes while being DRY and not duplicating the method `accelerate` in each?

## Exercise: The Animal Kingdom

Humans are still animals after all. In this exercise, you'll define:

  1. An `Animal` class, with the following:
    * Properties:
      * `kind`: A string that holds the type of animal
    * Instance Methods:
      * `eat`: Takes a parameter `food` to eat and prints out a message that the animal is eating `food`
      * `sleep` & `wake`: These two methods should NOT be passed any arguments. Instead, they will set an instance variable `@state` to the string `"asleep"` or `"awake"` respectively.

  2. A `Person` class, with the following characteristics:
    * Inherits from `Animal`
    * Automatically sets `@type` to `"person"`
    * Adds 3 new instance vars:
      * age
      * gender
      * name
    - Also, people aren't cannibals! Make sure your `Person` class *overrides* the existing `eat` method (in `Animal`) so that a `Person` cannot eat a `"person"`

**BONUS:**

* People can speak, and it's good to be polite. Add an instance method called `greet` that prints out a person's name, age, and gender in the following format: "Hi, I'm Teddy. I'm a person, and I'm 156 years old." (Hint: look up how to interpolate strings in Ruby)
 * Add a `class variable` that keeps track of all the people you create.
