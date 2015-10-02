# Week 1 Drills

For this week's drills we will be playing a game called "Kyrel".

In this game, you will be given a row and asked to transform it into a different row. For instance, you might be given a row with five empty cells  and asked to draw a blue dot in the right-most cell. Since you always start in the left-most cell (the default starting position), you'll need to move before you can draw.

### Methods
The following special methods are available for traversing/transforming the row:
* `moveRight();`
* `moveLeft();`
* `useGreen();`
* `useBlue();`
* `draw();`
* `erase();`
* `onGreen();`
* `onBlue();`

### Example Problem
Write a program which draws a green circle at the end of the row.

``` javascript
    moveRight();
    moveRight();
    moveRight();
    moveRight();
    useGreen();
    draw();
```

This would result in the following transformation:
```
 ['.', '.', '.', '.', '.'] // start row (initial state)
 ['.', '.', '.', '.', 'g'] // end row (end state)
```

- 'b' means a "blue" dot
- 'g' means a "green" dot
- '.' means an empty cell

## Rules
* You must always begin in the left-most cell. This is your default starting position.
* You cannot fall off the board / row. If you try to move past the last cell, you just remain in the same cell.
* You must choose a color before you can draw.
* You do not need to erase before drawing -- you can overwrite a cell's color.

## Goals
* Abstract the problem. Does your solution work for only a specific case, or does it work for all cases?
* "Don't repeat yourself" -- See a lot of repetition in your code? Maybe it's time to refactor.
* Be efficient. How many steps do your instructions take? How does the number of steps compare to the number of cells in the row? (What if the row got longer!?)

## Kyrel Challenges

### Day 1 Challenges -- intro to commands

0. turn_3rd_cell_blue - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/turn_3rd_cell_blue.js)

    start:  ['.', '.', '.', '.', '.']   
    finish: ['.', .', 'b', '.', '.']  

1. erase_3rd_cell - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/erase_3rd_cell.js)

  start:  ['b', 'b', 'b', 'b', 'b']  
  finish: ['b', 'b', '.', 'b', 'b']  

2. every_other_erase - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/every_other_erase.js)

  start:  ['b', 'b', 'b', 'b', 'b']  
  finish: ['b', '.', 'b', '.', 'b']  

3. every_other_blue - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/every_other_blue.js)

  start:  ['g', 'g', 'g', '.', '.']  
  finish: ['g', 'b', 'g', 'b', '.']  

4. move_start_to_finish - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/move_start_to_finish.js)

  start:  ['b', '.', '.', '.', '.']  
  finish: ['.', '.', '.', '.', 'b']  

  start:  ['g', '.', '.', '.', '.']  
  finish: ['.', '.', '.', '.', 'g']  

  start:  ['.', '.', '.', '.', '.']  
  finish: ['.', '.', '.', '.', '.']  

### Day 2 Challenges -- basic for loops & conditionals

0. all_blue - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/all_blue.js)

  start:  ['.', '.', '.', '.', '.']  
  finish: ['b', 'b', 'b', 'b', 'b']  

1. all_first_color - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/all_first_color.js)

  start:  ['b', '.', '.', '.', '.']  
  finish: ['b', 'b', 'b', 'b', 'b']  

  start:  ['g', '.', '.', '.', '.']  
  finish: ['g', 'g', 'g', 'g', 'g']  

2. n_in_a_row - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/n_in_a_row.js)

  start:  ['.', '.', '.', '.', '.']  
  finish: ['b', 'b', '.', '.', '.']  \(given n is 2)  
  finish: ['b', 'b', 'b', '.', '.']  \(given n is 3)  

3. every_even_erase - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/every_even_erase.js)

  start:  ['b', 'b', 'b', 'b', 'b']  
  finish: ['.', 'b', '.', 'b', '.']  
  
4. every_odd_erase - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/every_odd_erase.js)

  start:  ['b', 'b', 'b', 'b', 'b']  
  finish: ['b', '.', 'b', '.', 'b']  


### Day 3 Challenges -- More Loops

Before you get started on today's exercises, **please download the [Kyrel App](https://github.com/sf-wdi-22-23/kyrel)**, either by cloning it, or downloading the zip file.

0. every_even_erase - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/every_even_erase.js)

  start:  ['b', 'b', 'b', 'b', 'b']  
  finish: ['.', 'b', '.', 'b', '.']

2. every_n_erase - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/every_n_erase.js)

  start:  ['b', 'b', 'b', 'b', 'b']  
  finish: ['b', 'b', 'b', '.', 'b']  \(given n is 4)  
  finish: ['b', 'b', 'b', 'b', '.']  \(given n is 5)  

3. move_the_blue_dot_one_to_the_right - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/move_the_blue_dot_one_to_the_right.js)

  start:  ['.', '.', 'b', '.', '.']  
  finish: ['.', '.', '.', 'b', '.']  
  
  start:  ['g', 'b', '.', '.', 'g']  
  finish: ['g', '.', 'b', '.', 'g']  
  
4. delete_before - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/delete_before.js)

  start:  [ 'g', 'b', '.', '.', '.' ]    
  finish: [ '.', 'b', '.', '.', '.' ]    

  start:  [ 'g', 'b', 'b', '.', 'b' ]    
  finish: [ '.', '.', 'b', '.', 'b' ]  


### Day 4 Challenges -- advanced loops & conditionals

0. bleed_right - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/bleed_right.js)

  start:  ['.', '.', 'b', '.', '.']  
  finish: ['.', '.', 'b', 'b', 'b']  

1. invert_colors - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/invert_colors.js)

  start:  ['b', 'g', 'g', 'b', 'b']  
  finish: ['g', 'b', 'b', 'g', 'g']  

  start:  ['b', '.', 'g', '.', 'b']  
  finish: ['g', '.', 'b', '.', 'g']  

2. pull_blues_right - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/pull_blues_right.js)

  start:  ['b', '.', 'b', '.', '.']  
  finish: ['.', '.', '.', 'b', 'b']  

3. pull_blues_left - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/pull_blues_left.js)

  start:  ['b', 'g', 'g', 'b', 'b']  
  finish: ['b', 'b', 'b', 'g', 'g']  

4. reverse_row - [solution](https://github.com/sf-wdi-22-23/kyrel/tree/master/challenges/solutions/reverse_row.js)

  start:  ['b', 'g', 'g', '.', 'g']  
  finish: ['g', '.', 'g', 'g', 'b']  
