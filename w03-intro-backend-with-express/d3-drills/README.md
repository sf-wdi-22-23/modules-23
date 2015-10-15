# Bubble Sort!

Sorting is a common problem in interviews and in the real world (sorting books by title; sorting items by price...).

So! there are a lot of solutions. The term "algorithm" is used in software development to describe a solution to a problem that will work in all or many programming languages, without going into the specifics of coding it in any particular language. 

<a href="http://www.sorting-algorithms.com/" target="_blank">See with a bunch of different sorting algorithms in action.</a>

## Why bubble sort?  

We'll look at a few different sorting algorithms, but we're starting with bubble sort because:

 - it's simple (but slower than some more complex algorithms)
 - it performs great on already sorted data!
 - it has a cool name


## What? Bubble Sort?


Here's the basic idea of the bubble sort algoritm:
  1. start at the beginning of a list (array) of items
  2. compare the item you're looking at to the next item in the list
  3. if this item is greater than the next one, swap them
  4. move on to the next item
  5. repeat steps 1-4 until you go through the whole list without doing any swaps 


## Visualizations

From wikipedia:

![](https://en.wikipedia.org/wiki/Bubble_sort#/media/File:Bubble-sort-example-300px.gif)   

<a href="https://www.youtube.com/watch?v=lyZQPjUT5B4&t=52" target="_blank">
From Romania</a> (we recommend you watch on double speed).

## Drill!

Work with a partner.

Write on the whiteboard. No computer code allowed!

Start with pseudocode (English descriptions of what you want to do in the code).

Test your work with the input/output pairs listed below!

Create a `bubbleSort` function that takes in an array of numbers, uses the bubble sort algorithm on it, and returns the sorted array.

Here are some input/output pairs you can use to test it:

| Input | Expected Output |
| :--- | :--- |
| [0,1,2] | [0,1,2] |
| [8,5,3] | [3,5,8] |
| []  | []  |
| [9,4,7,6] |  [4,6,7,9] |

## Thought Bubbles

_Because we can only make that pun once._

1. Why is it safe to stop looping through the array after you have a full pass through without swaps?  

1. How would you change your function to sort the array in the reverse order?

1. What are some basic requirements for bubble sort to work on an input array?  Would your code on the board with an input array like `["Thursday", 47, ['a','b','c']]`? 

1. Bubble sort is known as a slower sorting algorithm for in many scenarios.   What is the best-case scenario for bubble sort? That is, what characteristic of an array causes bubble sort to do the least amount of swaps?  How many swaps would bubble sort do on one of these arrays?  

1. What is the worst case scenario for bubble sort?  (What kind of arrays cause it to do the most swaps?)  
