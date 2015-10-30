## Ruby Exercises

You may create a separate file for each of the exercises to avoid cluttering a file.

### Looping And Other Exercises

Use a loop to do  the following:

1.) Write a method called `p_times` that takes a `statement` and a `num` puts the `statement` some `num` of times to the console.

2.) Write a method called `letter_count` to count letter occurence in a string, returned as a `Hash`.

3.) Write a method called `mock_me` that `gets` some input from the terminal and puts it until the input is the word `quit` or `q`. (Be sure to remove trailing `\n`.)

4.) Write a method called `print_contacts` that takes a `hash` of `name` and `phone-number` key-value pairs and puts the `name` with the contact info.

5.) Write a method called `get_contact` that

* takes a `contacts` hash,
* prints the contacts,
* prompts the terminal for a **new** `name` and a `phone` number, 
* and then adds the `name` and `phone` as a key value pair respectively if `name` is not already a contact. 
* The `get_contact` method should `return` the `contacts` hash.

### List exercises

#### Using `Array#inject`
[API on Array#inject](http://apidock.com/ruby/Enumerable/inject)

Write a method for each exercise below that uses `Array#inject`:

1.) Write a method called `get_sum` to find the `sum` of the values in an array.

2.) Write a method called `get_max` to find the `max` of the values in an array.

3.) Write a method called `get_min` to find the `min` of the values in an array.

4.) Write a method called `reverse_str` to reverse a string.

**Challenge**: *write a method called `partial_sums` that pushes the partial sum of an array to a new list*

```
partial_sums([])
#=> [0]
partial_sums([5])
#=> [0, 5]
partial_sums([5,6,7])
#=> [0, 5, 11, 18]
```

#### Using `Array#map`
[API on Array#map] (http://ruby-doc.org/core-2.2.0/Array.html#method-i-map)

Write a method for each exercise below that uses `Array#map`:

1.)  Write a method called `multiply_by` that takes a number and returns an array of numbers multiplied by that number.

2.)  Write a method called `reverse_each` that takes an array of words and returns an array of reversed words.

3.)  Write method called `get_responses` that takes an array of questions (strings) and returns an array of responses input from the console for each question. (Hint: you will need to use `gets.chomp` and `puts` )

### Method Problems

* Write a method to compute the `factorial` of a number.
* Write a method to check if a number is a `palindrome`.
* Write a method to `reverse` a word in-place, do not use iterators, use only a while loop and indices.
* Write a method to `merge` to two sorted Arrays.
