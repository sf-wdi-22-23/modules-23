# Binary Search - Ruby edition!

Binary search is a type of search method used to find the position of a target item in a sorted array.

```ruby
def binary_search(array, target)
  # your code here
end

sample = [0, 1, 3, 5, 8, 13, 21]
target = 1

binary_search(sample, 1)
#=> 2 (the index it is located at in the sample array)
```

The binary search algorithm begins by comparing the target value to the value of the middle element of the sorted array.

```ruby
low = 0
high  = array.length - 1
#=> 6
mid = (low + high) / 2)
#=> 3
```

If the target value is equal to the middle element's value, then the position is returned and the search is finished.

```ruby
array[mid] == target
#=> 5 == 1
#=> false
```

If the target value is less than the middle element's value, then the search continues on the lower half of the array; or if the target value is greater than the middle element's value, then the search continues on the upper half of the array.

```ruby
array[mid] > target #=> 5 > 1
# true
# Yep, move to lower half

array[mid] < target #=> 3 < 1
#=> false
# This condition won't occur because it is false
```

This process continues, eliminating half of the elements, and comparing the target value to the value of the middle element of the remaining elements - until the target value is either found (and its associated element position is returned), or until the entire array has been searched (and "not found" is returned).

[Source Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)

## A real-life example

Searching for a name in a telephone book using binary search - https://study.cs50.net/binary_search (an awesome introduction to binary search).

## Exercise

Pair off students. Have one student from each pair pick a number between 1 and 100. Have the other student start at 50 and attempt to guess the first student's number. The first student can provide feedback of "higher", "lower", or "correct" to help guide the second student to the chosen number.

After this real-life demo, students will:
- pseudocode their plan for implementing a binary search
- swap solutions with another pair of students and exchange feedback
- write their own binary search solutions


**Stretch**

1. Implement a recursive solution (instead of iterative).

1. Implement a solution for an array of names (strings).

<!-- 1. Refactor the string search to alphabetize and capitalize first and last initials

1. Implement a solution that handles non-unique data sets. ```// no solution provided``` -->


### Sample Data

```ruby
prime_numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541]

# string arrays to sort:
months = ["Jan", "Feb", "mar", "Apr", "May", "Jun", "jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

wdi_22_enrollment = ["Angelo", "Dani", "Jennifer", "Mikey", "sam", "Laura E.", "Chris", "Margaux", "Uriel", "Josh", "Francesca", "Racha", "Brian", "Jamey", "Laura B.", "Riley", "Matt"]

wdi_23_enrollment = ["Ling", "Annie", "John", "Meredith", "Breana", "Randee", "Michael", "Brendan", "Vince", "Emily A.", "Jeehye", "Emily K.", "Jorge", "Eric", "Natasha", "Scot", "Zain", "Isom", "Noel", "Roy"]

# combined, with typos:
wdi_combined_enrollment = ["Angelo", "dani", "Jennifer", "Mikey", "Sam", "Laura e.", "Chris", "Margaux", "uriel", "Josh", "Francesca", "racha", "Brian", "Jamey", "Laura B.", "Riley", "Matt", "Ling", "Annie", "John", "Meredith", "Breana", "Randee", "michael", "Brendan", "vince", "Emily A.", "Jeehye", "Emily k.", "jorge", "Eric", "Natasha", "Scot", "Zain", "Isom", "Noel", "Roy"]

```


## Solutions
[Solutions](https://github.com/sf-wdi-22-23/modules/blob/master/w06-ruby-on-rails/d3-drills/solutions.rb)

### Further Reading

- [Big O Notation cheatsheet](http://bigocheatsheet.com/)
- [Carnagie Mellon University - Binary Search](http://www.cs.cmu.edu/~15110-f12/Unit05PtB-handout.pdf)
- [Rob Bell - beginner's guide to Big O notation](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
