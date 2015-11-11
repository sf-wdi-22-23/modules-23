
# Using recursion to solve a practical problem
#### Creating a ruby method to convert numbers to English words

*Why should we care about this?* Great question. Recursion is a powerful tool in programming, so powerful it is used by life itself!

When a plant grows, it does so by cell division. However each cell first needs to know if it has enough energy to do so! If there is not enough energy, it will conserve its energy to sustain itself. This process can be modeled **extremely vaguely** in the following recursive ruby function:

```ruby
def mitosis available_energy
  if available_energy > MINIMUM_ENERGY_REQUIREMENT
    divide
    available_energy -= ENERGY_COST
    mitosis available_energy
  end 
end
```

![](http://www.wired.com/wp-content/uploads/2015/07/Wired-Yes-4-Flower-Timelapse_006.gif)

<hr>

## Fibonacci: A quick example. 

#### It's only natural to teach the example of generating fibonacci numbers using recursion because they are **defined recursively**
By definition, the first two numbers in the Fibonacci sequence are either 1 and 1, or 0 and 1, depending on the chosen starting point of the sequence, and each subsequent number is the sum of the previous two.

Check out an iterative and recursive solution [here](fibonacci.rb).

<hr>

## An integer to English word converter!

Our goal is to pass in an integer to our function and have it return the correct English words as follows:

`in_words 32 //=> "thirty two"`

`in_words 1508 //=> "one thousand five hundred eight"`


#### White-boarding! Spend 10 minutes with a partner on a whiteboard. Don't worry about using recursion yet! Break down the problem into its simplest tasks. 
Make it work first for numbers under:
- 10
- 20
- 100

#### Reflection and discussion:

Necessary Data: 
- What data do you need to make this work? 
- What structure makes the most sense to you for holding this data? Why?
  - String? Array? Hash? Strings in arrays nested in hashes converted to binary?

Strategy: 
- This is a drill on recursion, obviously. Was there anything in your code that tipped you off that recursion might be a good solution?
- Any recursive algorithm contains two parts:
  1. A Base Case, or end goal
  2. A process in which the task at hand is reduced towards that end goal
- What would be our base case? What is our process?

#### Red Green Refactor
  
  Using the data structure provided in our [numbers_to_words.rb file](numbers_to_words.rb), get as many tests passing as you can

#### Further Reading

[The Bastard's Book of Ruby - Recursion](http://ruby.bastardsbook.com/chapters/recursion/)

[A video explaining recursion](https://www.youtube.com/watch?v=72hal4Cp_2I) #pro-tip: watch videos on 1.5x or 2x speed. 
