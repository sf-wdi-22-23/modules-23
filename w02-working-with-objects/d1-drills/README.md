# Week 2 Drills

### Extending Kyrel
It's time to dig a little deeper into the guts of kyrel. Refer to the <a href="https://github.com/sf-wdi-22-23/kyrel" target="_blank">kyrel code</a>, especially `kyrel.js` and `index.html`. You can test your code in the dev tools console on the <a href="http://sf-wdi-labs.github.io/kyrel/" target="_blank">live kyrel game</a>. 

The following functionality doesn't exist in the current implementation of the game. Let's add it!

0. isEmpty method - [solution](solutions.md#isempty)
    
    Create a utility method called `isEmpty` that checks the current cell for any color and returns a boolean.

1. moveRight(n) and moveLeft(n) methods - [solution](solutions.md#moverightn)
    
    By default, `moveRight` and `moveLeft` move the kyrel one cell at a time. Modify both methods so that they take an integer as an argument, representing the number of times to move in that direction. (Make sure that the default behavior continues to work too!)

2. move method - [solution](solutions.md#movedirection-times)
    
    Refactor your solution to #2 above. Your goal is to create a generic `move` method that takes two arguments: the direction of movement, and the number of steps/movements to take: e.g. `move("r", 4)`.

