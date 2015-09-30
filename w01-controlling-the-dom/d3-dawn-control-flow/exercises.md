#Control Flow Exercises

## Boolean Expressions and Truthy Values

1. What is the outcome of the following expressions?

  * true || false
  * false && false
  * true && false
  * (false || true) && true
  * false && ((true || false) && (false || true))

1. Which of the following are truthy values? (hint: try `if("abc"){console.log("I'm truthy!")}` in the JS console)
  * 1
  * 0 
  * 3.14159
  * "abc"
  * ""
  * Array 
  * []
  * Object
  * {}

1. What is the outcome of the following expressions?
  *  true && 6
  *  0 || "hi"
  *  ["a","b","c"] || "123"
  *  {"key":"value"} || false

## Conditionals!


1. Jimmy loves roller coasters, but there are a bunch of rules (ugh!) for riding:

For starters, it costs 5 tokens. Here's how we might code that:

```
var tokens = 3; // Jimmy's tokens

// Can he ride?
if ( tokens >= 5 ) {
    console.log("Step right up!");
} else {
    console.log("Sorry, you can't ride")
}
```
Edit the code above to check the following additional Requirements:

1. Must be at least 4ft tall    
2. Must be at least 12 years old  
3. Replace the prevoius rule: now riders under 12 must be accompanied by an adult  
4. (If the boss isn't looking, you can sneak in!)  
5. Riders with a park pass get in free.

## Loops!

2. Log to the console "This is awesome!" 25 times.

Create a new variable that is an array of 4 phrases: `"Howdy there"`, `"OMG"`, `"javascript"`, and `"Pair Programming"`.

5. Loop over the array and log each phrase to the console.
 
