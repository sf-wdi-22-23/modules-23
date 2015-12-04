# String Matching

## Introduction  (10 minutes)

  You know that handy `command f` thing where you can search a page? This uses a **string matching algorithm** to find the word you are searching for in a block of text!
  In this module, we are going to explore string matching, create our own algorithm, and work on optimizing it.

  Our string matching algorithm will:
  1. Take two strings, a longer string representing the text to be searched, and a shorter string representing the pattern we are looking for.

  1. Return the **index** of where the pattern **starts** in the longer string.

  For example in Ruby:

  `match_string "hello", "Oh, hello. How are you?"`

  And in JavaScript:
  `matchString("hello", "Oh, hello. How are you?")`

  should both return:

  `4`

## Brute Force (10 minutes)

  When you have a problem like this, the best way to start is usually by attempting a 'brute force' approach, and then optimizing from there.
  A brute force approach check every single possibility, not caring about the computational costs.

  In this case 'checking every possibility' means something like this:

  1. Compare the first letter of the pattern to the first letter of the text. // "h" != "O"
  2. Compare the second letter of the pattern to the second letter of the text. // "e" != "h"
  3. Keep comparing until you get to the end of "hello"
  4. Move the pattern over one space and repeat...
  1. Compare the first letter of the pattern to the second letter of the text. // "h" != "e"
  5. Repeat this whole process until we found our match and return the index.

  There might be a couple of inefficiencies that jump out at you right away, but don't worry about that for now.

## Activity 1: Pseudocode your brute force solution in pairs on the whiteboards. (15 minutes)

## Discussion and Implementation (10 minutes)

## Activity 2: Brainstorming (10 minutes)

  Get together in small groups and discuss ways to make this better.

  Think about:

  1. Edge Cases:
    - What should happen if the pattern is not found?
    - What about if the pattern is LONGER than the text?
    - What if one of the arguments isn't a string?
  2. Time Optimization:
    - Every comparison takes time! Our computers are very fast, but what if we were searching the > 1000 page book "Infinite Jest" for this quote: “You can be shaped, or you can be broken. There is not much in between. Try to learn. Be coachable. Try to learn from everybody, especially those who fail. This is hard. ... How promising you are as a Student of the Game is a function of what you can pay attention to without running away.”
  3. Space Optimization:
    - How much memory is this taking up? We are probably doing fine on this, but we don't wan't our optimization to create a zillion copies of an array or anything like that.

## Activity 3: Update your pseudocode! (15 minutes)

## Activity 4: Explanation of High-Level Optimization

  String matching has been worked on for decades and the best optimizations are marvels of coding creativity and efficiency.

  Let's go over a basic implementation of the Harspool Algorithm.

