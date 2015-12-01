## Exercises: Breadth First Tree Search

1. In English, describe how you would use breadth first search to find any node with a given key. Your algorithm should assume you have a tree data structure and that you can access each node's key its array of children. (Do not assume it's a binary search tree.) You should also assume you're given a target key to match.

	```
	Keep track of the queue of nodes we need to visit.
	Start with just the root in the queue.
	As long as there are more nodes in the queue, visit them one by one.  To visit a node:
		- take it off of the front of the queue (important so we don't visit the same node over and over!)
		- check if its key matches our target key 
			- if it does, we're done (output the node we're visiting)
			- if it doesn't, continue searching 
				- add the current node's children to the end of the queue
				- start over; visit the next node from the front of the queue
	If we didn't find  a matching node, return null or None or nil or whatever.
	```

1. On the whiteboard, pseudocode a breadth first search function. Assume you have a tree data structure that allows the following operations:
	
	* given a tree/node `my_tree`, get the root of the tree with `my_tree`
	* given a tree/node, get the key of the node with `.key`
	* given a tree/node, get the children of the node with `.children`

	```python
	def breadth_first_search(tree, target_key):
		queue = [tree]
		while queue != []:  # note - !queue.empty? is more correct for ruby, and this wouldn't work at all for javascript (you'd have to use queue.length !== 0)
			# take off the first element of the queue, and set current to it
			current = queue.pop(0) #  arr.shift in ruby or javascript
			if current.key == target_key:
				return current
			else:
				queue = queue + current.children

		# now we've exhausted all the nodes in our queue
		return None
	```

1. Copy the starter code in either `tree.js` or `tree.rb`.  Code up your breadth first search function in one of these files. There are informal "tests" at the bottom of each file that show what the output should be.  Run `node tree.js` or `ruby tree.rb` to see these tests work on your file. 

	*See `js/tree-solution.js` or `rb/tree-solution.rb` in this directory.**

1. How would you modify your breadth first search function to work on a binary search tree? 

	*The breadth first search algorithm would just need to add the left child and the right child to the queue instead of assuming that there's a `chilren` array.*

1. Binary search trees can be faster than arrays at keeping data sorted when you insert and remove nodes, but only if the binary search tree is *balanced*, because a balanced tree has the minimum possible number of levels to store all its nodes. We can check that a tree is balanced by looking at where it has "missing children," room where nodes could have a child but don't. A tree is balanced if all of the missing children are at the very bottom level of the tree or just one level higher. How could you use breadth first search to check whether a binary search tree is balanced?

	*You'd have to modify the algorithm to add the left and right children, as above. Then you'd want to keep track of the first depths at which you encounter a missing left or right child. To do so, you can have the queue store hashes/objects that include the node itself as well as its depth. When you find the first missing child, save its depth to a variable. As you move through the rest of the tree after the first missing child, you can check if the depth of another missing child is ever 2 greater than the saved minimum missing child depth. If it is, the tree is not balanced. If you finish going through the whole tree without figuring out it's not balanced, it must be balanced.*
	
	
	`This pseudocode shows how to track depth as you search but does not fully solve the balance checking question.`
	```python
	def breadth_first_search(tree, target_key):
		# store node object *and depth* in queue
		queue = [{node:tree, depth:0}]
		while queue != []: 
			current = queue.pop(0) 
			if current.node.key == target_key:
				print "found matching node at depth " + str(current.depth) 
				return current.node
			else:
				for child in current.node.children:
					# when adding children, give them the correct depth
					queue.push({node:child, depth:current.depth+1})
		
		return None
	```


1. How could you modify breadth first search to pick out a group of nodes? What about selecting ndoes based on some other characteristic instead of just the key? 

	*First of all, you'd want to output an array of nodes instead of just one node. We'll set up the output array to start out empty. Where we were returning a node before, we'd now just push it into the output array.  Where we were returning null or None or nil, we can return the (still empty) output array.*

	*To pick out nodes based on some data other than the key, we'd need some way to test whether each node had that characteristic.  In JavaScript, we could pass our function a selectionFunction that returns true if the node should be selected and false if it shouldn't.  (To see this strategy coded up, check out `breadthFirstSearchAll` in `js/tree-solution.js`.)*
