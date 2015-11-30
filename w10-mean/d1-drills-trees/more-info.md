# Reference

Some notes on graphs and trees, including terminology.


## Graphs

In computer science, graphs are collections of **vertices** or **nodes**, which usually store or represent some data, and **edges**, which connect the nodes. Each edge connects two nodes together.  If you think of nodes as airports, edges would be the flight paths between them.  Here are some use cases for graphs:

* graph databases
* relationships among users in a social network
* links between pages on a website
* finding a route between two locations
* planning the order of classes to take based on prerequisites 

A sequence of edges is called a "path".

<!--<img src="images/paths.jpg" width="300px">-->

## Trees

Trees are a special kind of graph with some extra rules about their nodes and edges. First, every tree has a unique, special start node called the "root" node. 
(We usually draw trees vertically with the "root" node at the top of the tree.)Second, each node in a tree can only ever have one "parent". This means there's only ever one direct path from any node to the root of the tree.  One classic example of a tree is a file sytem, where directories contain other directories and/or files. The `/` directory is called the "root" directory because it's literally the root of the computer's directory tree.  Here are a few other example use cases of trees:

* **the DOM tree**
* comment trees (where users can comment on comments)
* data compression algoritm trees (Huffman coding)
* single-elimination tournaments 
* parser trees or syntax trees that help a computer interpret human-readable code
* the way calculators compute order of operations

The edges in a tree are sometimes referred to as "branches".  Nodes of the tree that do not have any children are called "leaves" because no branches lead away from them. The length of the longest path from the root to a leaf is called the tree's "height".

<img src="images/tree_terms.jpg" width="300px">


Tree data structures adopt language from family trees. If an edge in a tree connects two nodes, the one closer to the root is the "parent", and the other is a "child".  From the perspective of a single node, some other nodes will be on the path between that node and the root. These are the node's "ancestors." Other nodes might be children of the  node, or children of the node's children. These are called the node's "descendants."  Nodes that share the same "parent" can be called "siblings," but that's rarer.


## Trees to Know for the Job Search

### Balanced Binary Search Trees

Balanced Binary Search Trees (balanced BSTs) are trees, binary trees, binary search trees, and balanced trees.  

#### Binary Trees

The most common types of trees for interviews are "binary trees," which allow each node to have up to 2 children. We say each node can have a "left child" and a "right child."  The left child can be considered the root of a "left subtree", and the right child can be considered the root of a "right subtree".

#### Binary Search Trees

Binary search trees add on an extra restriction to binary trees. In each node's left child subtree (if it has one), all nodes will will have keys *less* than the original node's key.  In each node's right child subtree (if it has one), all nodes must have a **greater** key than the original node itself. Left is less!


<img src="images/bst.jpg" width="300px">


#### Balanced Trees

Balanced trees are another basic variant of trees. A "balanced" tree has a height about as low as it can possibly be while still holding all its nodes.  There are different definitions of exactly how to balance a tree, but you can tell a tree is balanced if all of the "missing children" (areas where another node could be attached but isn't) are either at the very bottom level of the tree or just one level higher. For binary trees, being balanced means the height is `O(log`<sub>`2`</sub>`(n))` (or just `O(log(n))`), where `n` is the number of nodes in the tree.  

#### And finally... Balanced Binary Search Trees

Balanced binary search trees combine the balanced structure requirement with the node key requirement of binary search trees.  If an interview question asks about a tree, it's probably a balanced binary search tree. Ask your interview to clarify, though, whether the tree is balanced and whether it is a binary search tree. 


#### Why Are Binary Search Trees Even a Thing?

Below you'll find a table of speeds of common operations for a few of the data structures we've seen: unsorted arrays, sorted arrays, hashes, and binary search trees. The big O notation in the table shows the amortized worst case run time. You may not have a lot of context for big O yet, so before we jump into the main table here's an example. 

Twitter handles hundreds of millions of tweets each day.  (Computers can halde about a billion operations per second, but an algorithm usually requries more than one operation to handle each input.)  If Twitter has an <i>O</i>(<i>n</i>) algorithm that somehow processes all these tweets in about 40 seconds, changing to an <i>O</i>(log&nbsp;<i>n</i>) algorithm could reduce that time to just over 5 seconds (that kind of savings adds up!). An <i>O</i>(<i>n</i>&nbsp;log&nbsp;<i>n</i>) algorithm might take about 3.5 minutes. 

<table>
<tbody>
<tr>
	<th></th>
	<th>Insert</th>
	<th>Delete</th>
	<th>Get ith by index</th>
	<th>Select kth in order of value</th>
	<th>Search</th>
	<th>Find minimum</th>
	<th>Find maximum</th>
</tr>
<tr>
	<td>Unsorted array</td>
	<td><i>O</i>(<i>n</i>)<sup>*</sup></td>
	<td><i>O</i>(<i>n</i>)<sup>*</sup></td>
	<td><a href="/wiki/Constant_time" title="Constant time" class="mw-redirect"><i>O</i>(1)</a></td>
	<td><i>O</i>(<i>n</i>&nbsp;log&nbsp;<i>n</i>)<sup>**</sup></td>
	<td><i>O</i>(<i>n</i>)</td>
	<td><i>O</i>(<i>n</i>)</td>
	<td><i>O</i>(<i>n</i>)</td>
</tr>											
<tr>
	<td>Sorted array</td>
	<td><i>O</i>(<i>n</i>)</td>
	<td><i>O</i>(<i>n</i>)</td>
	<td><i>O</i>(1)</td>
	<td><i>O</i>(1)</td>
	<td><i>O</i>(log&nbsp;<i>n</i>)</td>
	<td><i>O</i>(1)</td>
	<td><i>O</i>(1)</td>
</tr>
<tr>
	<td>Hash</td>
	<td><i>O</i>(1)</td>
	<td><i>O</i>(1)</td>
	<td>N/A</td>
	<td><i>O</i>(<i>n</i>)</td>
	<td><i>O</i>(1)</td>
	<td><i>O</i>(<i>n</i>)</td>
	<td><i>O</i>(<i>n</i>)</td>
</tr>
<tr>
	<td>Binary Search Tree<sup>+</sup></td>
	<td><i>O</i>(<i>height</i>)</td>
	<td><i>O</i>(<i>height</i>)</td>
	<td>N/A</td>
	<td><i>O</i>(<i>n</i>)<sup>++</sup></td>
	<td><i>O</i>(<i>height</i>)</td>
	<td><i>O</i>(<i>height</i>)</td>
	<td><i>O</i>(<i>height</i>)</td>
</tr>
</tbody></table>

<sup>\*</sup> Insertion or deletion at the end of an array is <i>O</i>(1)  (constant time).    
<sup>\*\*</sup>  Sort and then binary search. A faster <i>O</i>(<i>n</i> + <i>k</i>&nbsp;log&nbsp;<i>n</i>) algorithm exists using the heap data structure, which we haven't talked about yet.  There are also faster sorts if you have information about your input.   
<sup>+</sup> For a <a href="/wiki/Self-balancing_binary_search_tree" title="Self-balancing binary search tree" class="mw-redirect">Self-balancing binary search tree</a>, the height is <i>O</i>(log&nbsp;<i>n</i>). If the tree is not balanced, the height can be up to <i>O</i>(<i>n</i>).   
<sup>++</sup> Can reduce to <i>O</i>(<i>height</i>) by augmenting each node to keep track of the size of its subtree.   



### N-ary or K-ary Trees

N-ary trees don't have to be binary; their nodes can have more than two children. These are also known as "just regular trees" and have the characteristics defined for all trees above. 

### Tries

Tries, also called prefix trees, store data differently than other trees we'll look at. The data is only stored in the leaves, and it builds up over the path from the root to each leaf.   Here's an example:

<img src="images/trie.jpg" width="300px">

Usually the end of each word in a trie will be marked, or there will be special end of word nodes that signify the end of a word.

Specialized tries that store data in binary format (as sequences of 0s and 1s) are used by most hardware routers to send data across the internet. They allow for fast lookup within their limited set of stored sequences, so they're often used with words (sequences of letters!) for autocomplete, spell checking, or other string matching scenarios.


## Tree Strategies for Interviews

* Make sure you know whether a tree you're given is binary, self-balancing, a binary search tree. Or, if you're using a tree, clarify which of these properties you want it to have.   
* Be clear about what each node's key is and what other data is stored in the node.   
* Consider storing extra data about the tree inside each node. For example, if you need to find the kth heighest value in a binary search tree, a classic way to go about it is to have each node store the size of its subtree. 

## Vocab Practice 


1. Use the diagram below to fill in the following table:
	
	| Node  | parent | left child | right child |
	| :---- | :-- | :-- | :-- | 
	| A |  |   |  | 
	| B |  |  |  | 
	| C |  |   |   |


  <img src="images/labels.jpg" width="300px">

1. In the same diagram (above), which node is the root?  Which are leaves?


1. Finally, in that same diagram, what is the height of the tree?
 
  <br><br>

1. Which of the following is a tree? (There may be more than one.)

  <img src="images/which_tree.jpg" width="300px">
  

1. Which of the following is a balanced tree? (There may be more than one.)

  <img src="images/which_balanced.jpg" width="300px">
  
 

1. Which of the following is a binary search tree? (There may be more than one.)

  <img src="images/which_bst.jpg" width="300px">
  
  

## Vocab Practice **Solutions**

1. Use the diagram below to fill in the following table:
	
	| Node  | parent | left child | right child |
	| :---- | :-- | :-- | :-- | 
	| A | *B* | *none*  | *none*  | 
	| B | *D* | *A* | *C* | 
	| C | *B* |  *none* |  *none* |


  <img src="images/labels.jpg" width="300px">

1. In the same diagram (above), which node is the root?  Which are leaves?

  *D is the root.  A, C, and E are leaves.*

1. Finally, in that same diagram, what is the height of the tree?

  *The height is 2, because the longest path from root to leaf has 2 edges/branches in it.*
  <br><br>

1. Which of the following is a tree? (There may be more than one.)

  <img src="images/which_tree.jpg" width="300px">
  
  *B, D, E are trees.*
  
  *A is not a tree because one node has 2 parents.* 
  
  *C is not a tree because there is a cycle (a circular path from one node back to that same node).*
  
  *F is not a tree because it's 2 trees! This is called a "forest".*
  
  
1. Which of the following is a balanced tree? (There may be more than one.)

  <img src="images/which_balanced.jpg" width="300px">
  
  *B, D, and C are balanced because all of the "missing children" in these trees are either at the bottom level or one level above.*

1. Which of the following is a binary search tree? (There may be more than one.)

  <img src="images/which_bst.jpg" width="300px">
  
  *Only the tree rooted with 6 is a binary search tree. The others both have nodes in the root's left subtree that are greater than the root node.*
