# Tree Traversal

Traversing a tree just means visiting each node once.  We've seen two algorithms that traverse trees: breadth first and depth first search. There are many more. A reason to traverse a tree is to print out a list of all its nodes.  Another common reason is to "flatten" the tree into an array. We'll lose some of the information from a tree when we flatten it, but sometimes that's okay.

Today, you'll dive deeper into depth first search, using it to flatten a binary tree in three different ways.  You can flatten any tree; we're just using binary search trees today because one of the traversals will output a sorted array.  Today's solutions will prefer the recursive version of depth first search.

### Three Ways to Traverse a Tree

**Pre-order traversal** prints a node  (or adds it to the flattened array version) **before** recursively printing the nodes beneath it. 

**Post-order traversal** prints a node **after** recursively printing the nodes beneath it. 

**In-order traversal** recursively prints a node's **left** child subtree, then prints the node **itself**, then recursively prints the **right** child subtree. 

From wikipedia:
	* Pre-order traversal while duplicating nodes and edges can make a complete duplicate of a binary tree. It can also be used to make a prefix expression (Polish notation) from expression trees: traverse the expression tree pre-orderly.
	* In-order traversal is very commonly used on binary search trees because it returns values from the underlying set in order, according to the comparator that set up the binary search tree (hence the name).
	* Post-order traversal while deleting or freeing nodes and values can delete or free an entire binary tree. It can also generate a postfix representation of a binary tree.

## Exercises: Tree Traversal

1. In English, describe how you would use recursion to flatten a binary search tree into a sorted array of keys.  (Which type of traversal will work?)
	


1. On the whiteboard, pseudocode a function to turn a binary search tree into a sorted array. You have a binary tree data structure with the following methods:
	
	* given a tree/node `my_bst`, get the root of the tree with `my_bst`
	* given a tree/node, get the key of the node with `.key`
	* given a tree/node, get the left child of the node with `.left`
	* given a tree/node, get the right child of the node with `.right`


1. Copy the starter code in either `rb/binary_search_tree.rb` or `js/binary_search_tree.js`. Fill in the `to_arr` function with code that will convert the tree into a sorted array. Run `node binary_search_tree.js` or `ruby binary_search_tree.rb` to see the informal test work on your file.
	
1. Write another function to do post-order traversal.

1. Write another function to do pre-order traversal.

1. Celebrate trees!

