# Interview Prep - Merge Sort

## Divide and conquer

Have you ever been overwhelmed by a big problem? Try and think of a time when you felt like there wasn't a way to complete everything in the time available; maybe you've had hours of homework across multiple subjects and wondered how you'll ever finish before dawn.

Consider how you might break this huge problem into smaller pieces. In the homework example, our huge problem might be that we have two essays to complete, one problem set, and a handful of other assignments.

As a first step, we can divide our big problem of having too much homework into individual assignments. In this way, we can focus on the problem set first and avoid being completely overwhelmed by the essays and other assignments we still have to complete.

Taking it a step further, we might break our medium sized problem (one really long problem set) into individual problems. In this way, we can focus on one problem at a time without being overwhelmed by the problems we haven't gotten to yet.

If the problems in the set are difficult, you will probably end up breaking each individual problem into smaller pieces as well.

[![Divide and conquer](https://s3.amazonaws.com/ka-cs-algorithms/divide_conquer_1_step.png)](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms)

## Revisiting Recursion

If our small problems look similar, this should be a hint that we might want to use recursion.

In a recursive implementation, we first solve for the simplest version of the problem (the base case). Then, we write our function in such a way that it calls itself -- the problem should get smaller with each recursive function call. Once the problem can't get any smaller, we have reached the base case.

[![Divide and conquer (complex)](https://s3.amazonaws.com/ka-cs-algorithms/divide_conquer_3_steps.png)](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms)

## Sorting Things

If you were given an array of 10 random numbers, how would you sort them in ascending order?

Arrays in Ruby have a [`#sort`](http://ruby-doc.org/core-2.2.0/Array.html#method-i-sort) method. If we have access to a Ruby runtime we can treat this as a small problem and simply call the built-in `Array#sort` method.

Without a Ruby runtime, we'd be on our own. We'd have to think of sorting arrays as a big problem and come up with an implementation ourselves.

## Algorithm Design

Sorting algorithms might seem like a contrived example because most languages have built-in functionality for sorting. When building web apps, we generally avoid re-inventing the wheel by reusing functionality that the language or framework provides.

Sorting algorithms are a popular interview topic because they force candidates to take a very disciplined approach. The seemingly simple problem of sorting an array of integers quickly becomes complex when you don't have access to `Array#sort`. Just explaining the steps involved can give the interviewer a lot of insight into your abilities as a problem solver.

## Sorting Recursively

There are many ways to sort an array of numbers. Each have their pros and cons in terms of time complexity, space complexity, readability, etc.

Today, we'll focus on a recursive solution called merge sort.

### Why Merge Sort?
Merge sort is the first powerful sorting algorithm that you will encounter in the wilds of the real world (baked into Safari and Firefox.)  It uses an extremely efficient application of the 'Divide and Conquer' concept to lists of elements.  We worked on Bubble Sort previously, now let's up our game and work on Merge Sort!

Merge Sort works on the basic principal of dividing your list into sub-lists (recursively) until your sub-lists are of length one or zero.  Once your sub-lists are at that size, you merge with a neighboring sub-list.  When you merge them, you merge them in ascending or descending order, depending on your implementation.  

![Merge Sort visualization](https://webdocs.cs.ualberta.ca/~holte/T26/Lecture6Fig6.gif)


## Challenge: Write your own Merge Sort

There are TWO functions that work together to accomplish a Merge Sort:

-  A `merge_sort` function that:
  - takes an `array` as a parameter
  - assigns `first_half` to the result of merge_sort called on an array created from a range of elements from the start of the array up to but not including the midpoint of the array
  - assigns `second_half` to the result of merge_sort called on an array created from a range of elements starting from the midpoint of the array to the end of the array
  - calls a `merge` function, which takes two arrays, `left` and `right`, as parameters

  ```ruby
  def merge_sort(array)
    # find midpoint of array
    mid = array.length / 2
    # assign left to range of first element up to but not including midpoint
    # assign right to range from midpoint to end, including last element
    merge(left, right)
  end
  ```

  Example of creating arrays with ranges:
  ```ruby
  foo = [1,2,3,4,5]
  bar = foo[0..2]
  #=> [1, 2, 3]
  bar = foo[0...2]
  #=> [1, 2]
  baz = foo[2..-1]
  #=> [3, 4, 5]
  ```

*Note:* The `merge_sort` function **is recursive**. Don't forget your base case!

-  A `merge` function that:
  - assigns `results` to an empty array
  - takes two arrays, `left` and `right` as parameters
  - compares the first elements of the two arrays **until** either of the input arrays are empty
  - pushes the smaller element from the compared arrays into the `results` array

    *Hint:* this should remove the element from its original array and add it to the results array
  - returns the `results` array, concatenated with the two input arrays

```ruby
def merge(left, right)
  results = []
  # until left or right is empty:
  # if first element of left is less than or equal to first element of right
  # Array#shift first element of left into results
  # else
  # Array#shift first element of right into results
  # end
  results + left + right
end
```

*Note:* The merge function **is not recursive**.

Create a `merge_sort` that will sort a list of student names from this class!

```ruby
wdi_22_23  = ["Angelo", "Dani", "Jennifer", "Mikey", "Sam", "Laura E.", "Chris", "Margaux", "Uriel", "Josh", "Francesca", "Racha", "Brian", "Jamey", "Laura b.", "Riley", "Matt", "Ling", "Annie", "John", "Meredith", "Breana", "Michael", "Brendan", "Vince", "Emily A.", "Jeehye", "Emily K.", "Jorge", "Eric", "Natasha", "Scot", "Zain", "Isom", "Noel", "Roy"]
```

## Solution
[solution](./merge_sort.rb)


## Stretch Challenges

  - What's another way to sort an array?
  - Compare the two approaches
    - Which one is faster for a given input? (time complexity)
    - Which one has more space complexity?

    **Resource**: [Benchmarking Code in Ruby](http://rubylearning.com/blog/2013/06/19/how-do-i-benchmark-ruby-code/)
