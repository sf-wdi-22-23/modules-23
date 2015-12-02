# Depth First Search

Depth First Search is another algorithm that searches through (potentially) every node in a graph. Like with Breadth First Search, we can search for many keys, search by criteria that aren't based on keys, keep track of depth. 

**Depth First Search chooses a start node and "visits" all the nodes in the graph by following each path as far (as deep) as it can before going to the next path.**  In a tree, we pick the root as the start node (surprise!).

Depth First Search follows an "always go left" path like some people use to systematically solve mazes. 

![depth first search animation](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

Breadth First Search used a queue (first in is first out) to keep track of which nodes to visit next.  Depth First Search, at least in its iterative form, uses a stack (first in is last out).

Depth First Search can be done recursively, or iteratively with a stack. The iterative version translates more easily to graphs that might have loops (after you see both versions, think about why that is).


## Exercises: Depth First Tree Search

1. In English, describe how you would use depth first search to determine whether any node in a tree has a given key. Your algorithm should assume you have a tree data structure and that you can access each node's key its array of children. (Do not assume it's a binary search tree.) You should also assume you're given a target key to match.


1. On the whiteboard, pseudocode a depth first search function. As usual, assume you have a tree data structure that allows the following operations:
	
	* given a tree/node `my_tree`, get the root of the tree with `my_tree`
	* given a tree/node, get the key of the node with `.key`
	* given a tree/node, get the children of the node with `.children`

	Once you finish your pseudocode, check it versus the pseudocode in [the solutions](solutions.md).


1. Copy the starter code in either `tree.js` or `tree.rb`.  You'll see these files now have blanks and informal "tests" for depth first search.  Fill in the depth first search function in one of these files with actual code code. Run `node tree.js` or `ruby tree.rb` to see the informal tests work on your file.

	Note: The Ruby solution only has an iterative version.  The JavaScript solution has an iterative and a recursive version. To see the output from only the recursive version in the Terminal, use `node tree-solution.js recursive`. For iterative only, use `node tree-solution.js iterative`. 
	
1. How would you use depth first search to print out all of the words in a trie?

1. When would you use depth first search, and when would you use breadth first search?
