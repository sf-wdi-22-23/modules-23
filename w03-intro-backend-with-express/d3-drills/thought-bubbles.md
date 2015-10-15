# Thought Bubbles

_Haha! We made that pun twice!_

1. Why is it safe to stop looping through the array after you have a full pass through without swaps?  

  > You always swap when two elements are out of order relative to each other.  If we go through the whole array and don't have to swap, it means nothing was out of order. So the whole thing was sorted!

1. Can your function handle inputs that have multiple copies of the same value?

	> The sample solution does, because it only swaps if the values are out of order. Two of the same value will just end up next to each other.

1. How would you change your function to sort the array in the reverse order?

	> Do the swap if `arr[i] < arr[i+1]` instead of when `arr[i] > arr[i+1]`. 

1. What are some basic requirements for bubble sort to work on an input array?  Would your code on the board with an input array like `["Thursday", 47, ['a','b','c']]`? 

	> The values that we're swapping have to be comparable. JavaScript doesn't let us compare those different data types with `<` or `>`, so our sample solution won't work with that input. (And it makes sense not to; that's okay!)

1. Bubble sort is known as a slower sorting algorithm for in many scenarios.   What is the best-case scenario for bubble sort? That is, what characteristic of an array causes bubble sort to do the least amount of swaps?  How many swaps would bubble sort do on one of these arrays?  

	> The best case scenario input for bubble sort is an array that's already sorted. It will only do one pass through a sorted array, and it will never do any swaps. 

1. What is the worst case scenario for bubble sort?  (What kind of arrays cause it to do the most swaps?)  

	> The worst case scenario input for bubble sort is an array that's in reverse order. It has to make every single possible pass through the array, making multiple swaps to "bubble" every item up.