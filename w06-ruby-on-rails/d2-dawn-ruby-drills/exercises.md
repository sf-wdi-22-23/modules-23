## How to use gems in irb

Gems in Ruby are a lot like node modules. Say you want to use a gem like "Awesome Print" to make your printing of objects and strings colorized and indented?

1. First install the gem on your computer: ```$ gem install awesome_print```
2. Now just require it at the top of your file or in irb and then use it according to its documentation.
  ```ruby
  require 'awesome_print'
  a = ["value1", "value2", "value3"]
  ap a
  ```
[Ruby Toolbox](https://www.ruby-toolbox.com/)


##Basic Challenges

**Challenge Set 1: Let's have a HTTParty!**

4. Let's have an [HTTParty](https://github.com/jnunemaker/httparty)!

5. Install the httparty gem ```$ gem install httparty```.

6. Now require it in a new ruby script file, and use it to call an album search on the word "White" to the spotify API.

7. Can you require both ```httparty``` and ```awesome_print``` to have the output look nice? (remember just require awesome_print and then use ```ap``` instead of ```p```)

5. In the same file, can you write a loop that returns an array of the album names from your search? (Use `conf.echo = false` in your method to prevent the method "echoing" the whole array result at the end).

**Challenge 2: Awesome Gems**
1. Find 3 gems you think are cool and try to use them in your own scripts. ([Ruby Toolbox](https://www.ruby-toolbox.com/)) has a lot of great gems listed, though you might have to hold off on incorporating Rails gems.

**Challenge 3: Guessing Game**
Create a program that asks the user to guess a number between 1 and 100.  Once the user guesses a number, the program should say higher or lower, or report that the number was correct.  The user should continue to make guesses until the correct number is found.  Also, once the user guesses correctly, the program should print the number of guesses needed to arrive at the correct answer. Below is sample output:

   ```
   Guess a number between 1 and 100
   50
   The number is lower than 50.  Guess again!
   25
   The number is lower than 25.  Guess again!
   13
   The number is higher than 13.  Guess again!
   20
   The number is lower than 20.  Guess again!
   17
   The number is higher than 17.  Guess again!
   18
   The number is higher than 18.  Guess again!
   19
   You got 19 in 7 tries!
   ```
(Remember to use `gets.chomp` to take in user input from the terminal.)

**Challenge 4: Spotify Album Search In Terminal**

1. Make a method that takes in user input to make a Spotify API album search and desplays the result with `awesome_print`
1. Can you have the method ask for artist or album or both?
