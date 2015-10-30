# Arrays, Hashes, & Blocks

### Objectives

- Use basic array methods including count, first, and last
- Iterate through arrays with map and each
- Use the appropriate data collection for a situation: hash vs. an object 
- Get and set values for specific hash key
- Get a list of all keys in a hash

### Preparation

- Recall the differences between use-cases and definitions for arrays & hashes 
- Name the equivalent of a hash in JS
- Iterate on, get information out of, and put information into arrays & JS objects

## Intro (5 mins)

Because you'll be using arrays & hashes so, so much in your time as a developer, we want to get you up to speed with how to work with them.

For these Ruby data collections, you'll be reminded of similar ideas in JS. That's fantastic. Anytime you can draw on that connection to help yourself guess at what methods might exist, or even just what to Google, you'll be in good shape.

## Working with Arrays - Demo (20 mins)

Just as a refresher – what are arrays for? What do they do? **They're for holding a collection of values**, that's it.

#### Making Arrays, Adding to Arrays

So, let's start simple – we make arrays in Ruby the same as we did in JS. Nothing unexpected here.

```ruby
numbers = [1,2,3,4] # I'm obviously an array
```

Then, once you've created an array, how do you imagine you add to an array?

```ruby
numbers.push 5 # dun, dah nun dun dun dun, push it
# => [1,2,3,4,5]
```

Similarly, we've got another old favorite – the shovel.

```ruby
numbers << "six" # there no shovel puns to see here
# => [1,2,3,4,5,"six"]
```

#### Removing From Arrays

Now, obviously it's possible to mix data types (Ruby does not care), but why would we want to? That'll be weird. Let's get rid of one.

```ruby
numbers.delete "six" # give it the value you want to get rid of
# => [1,2,3,4,5]
```

#### Useful Array Miscellany

There are so many great array methods - here are a few you'll probably use from time to time.

```ruby
# how many values are there?
numbers.length # => 5, of course

# just as you'd expect, get's the value at nth index
# remember, and indexes start at 0!
numbers[3] # => 4

# a handy method equivalent to numbers[0]
numbers.first
# also a handy method equivalent to numbers[numbers.length-1]
numbers.last

# and what if we need to rearrange? so useful!
numbers = [3,2,4,1,5]
numbers.sort # [1,2,3,4,5]
numbers.sort.reverse # => [5, 4, 3, 2, 1]
```

#### You'll be trying this soon, but first – iterating!

Now the good stuff – looping through our array and doing something with each value.

**How did we iterate over an array in JS?** It was pretty convoluted:

```js
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
};
```

We can do for loops in Ruby, too, but we've got something _much_ nicer:

```ruby
numbers.each do |number|
  puts "i am number #{number}"
end

# i am number 1
# i am number 2
# i am number 3
# i am number 4
# i am number 5

```

Isn't that just so incredibly readable?

#### Extra Detail: Dem Blocks Tho!

That `do`/`end` thing you're messing with is called a _block_, and it just runs the code in between, almost like a little function without a name - like anonymous functions in JavaScript or lambdas in Python.

You'll see blocks all the time, and you'll use `.each` like it's your job. It just loops through each value in your array and assigns a local variable (that you decide) to each object. You come up with what you want it called in the "pipes", aka those tall neighbors surrounding the variable: `|a_variable_of_my_choosing|`.

To make it super clear: if `numbers` is a variable holding `[1,2,3,4,5]`, then `numbers.each` will go through each number and do _something_ to each variable. It's sort of as if the code is doing this:

```ruby
# numbers.each do |number|
#   puts "i am number #{number}"
# end

number = 1
puts "i am number #{number}"

number = 2
puts "i am number #{number}"

number = 3
puts "i am number #{number}"

number = 4
puts "i am number #{number}"

number = 5
puts "i am number #{number}"
```

Oh, and for best practice, always try to name`|a_variable_of_my_choosing|` the singular tense of the array you're iterating over: ```numbers.each do |number|``` or ```articles.each do |article|```

Of course, the beauty of loops is that we don't have to write all that out.

And a bonus tip: `do`/`end` is functionally the same as `{`/`}`, so you'll see both. The curly braces are for when you want to keep it on one line, but it does not matter.
```ruby
# totally the same
numbers.each do |number|
  puts "i am number #{number}"
end

# totally the same
numbers.each {|number| puts "i am number #{number}"}
```

## Arrays - Independent Practice (10 minutes)

Alright, practice time. Quick solo challenge, we'll be setting a timer for 10 minutes!

- Given the following list of student names, **iterate over them**, **prepending** "A+ " if their name includes an "A" in it. Make a new array if you need to
- Then, **sort the students** so that A+ students come first
- Next, **select just the students with A+** in their names. Look it up in the Ruby docs if you need to.
- Finally, **count how many A+ students you have**

```ruby
students = ['Suzy', 'Daniel', 'James', 'Mary', 'Phillip', 'Siegfried']
```

## You're Ready to Move On to Hashes - Codealong (20 mins)

We use hashes constantly. Hashes, like JS objects, are a great way to store related data of all different kinds, in a way that's super readable.

The key to hashes is that they always house key/value pairs. **The key describes the properties, the value is the information relating to or describing the property.**

#### Creating a Hash

To see it in action, let's pick something random in the room and try to describe it.

> **Note:** just to prove hashes can hold all kinds of great data, let's see how many different data types we can describe our object with!

For example, let's describe a fan in the room.
```ruby
fan = {
  type: 'freestanding',
  blades: 5,
  speeds: ['low', 'medium', 'high'],
  rotating: false,
  height: {
    measurement: 100.4,
    unit: 'cm'
  }
}
```

Nice! Good work.

Now, based on what you know about how JS objects work, how would you guess we grab data out of here? Let's say we want to know how many blades it has.

```ruby
fan[:blades] # => 5
```

#### Symbols Are For Memory

> _"Hold up, what's the colon? In JavaScript, we'd use ``fan['blades']``, why does that not work?"_ - Roughly half the classroom, in their brains

Well, young padawans, that's because our keys up above are symbols, not strings.

Symbols are basically just like strings, except they save computer memory.  Every string you create is unique and takes up space on your computer, even if they're the same value! When we're busy looking up key/value pairs, we don't want to be wasting memory - we want it to be fast!

Let's watch:

```ruby
"Your Name".object_id
#=> a number

"Your Name".object_id
#=> a different number

:your_name.object_id
#=> a number

:your_name.object_id
#=> the same number!
```

Symbols on their own don't do much, but they work great as keys. There are two ways to write them:
```ruby
{
  # from older ruby versions, still totally work
  :the_old_way => 'some value',

  # from newer ruby versions, which is just shorter
  the_new_way: 'some value'
}
```

Either are fine; you'll see both a lot. Use the "new way" one if you can help it, just cuz it's nice.

For the record, strings as keys _are_ possible – we just try not to use them.

#### Adding to our hash

Real quick – what if we forgot a key/value pair, or want to add one in after the fact?

```ruby
fan[:color] = 'silver'

# {
#   type: 'freestanding',
#   blades: 5,
#   speeds: ['low', 'medium', 'high'],
#   rotating: false,
#   height: {
#     measurement: 100.4,
#     unit: 'cm'
#   },
#   color: 'silver'
# }
```

#### Guess how to get rid of a key/value pair?

Given we just learned to do this with arrays, it's okay to be unsurprised.

```ruby
fan.delete :color
# remember, parentheses are optional!
```

## Hashes - Independent Practice (10 minutes)
Now you try it!

- Partner up! Together and **by hand with markers on the desk**, describe your computer as a hash. Use any data types you can think of, cuz hash values can be anything!
- When you're done, each of you, independently **open your computer, write it out in IRB**. Try getting each key out, adding in new ones, and deleting ones just for fun.
- In your hashes, try to:
  - Include one key value with the value as an array 
  - Include one key value with the value as another hash (look to the fan hash from earlier!)
- Remember, use the "new way" of creating hashes, if you remember how!

## Conclusion (5 mins)

- How do you get the 4th item of an array?
- How do you get a value out of a hash?
- How do you add a value to a hash? What about an array?
