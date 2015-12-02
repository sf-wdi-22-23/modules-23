## Exercises: Depth First Tree Search

1. In English, describe how you would use depth first search to determine whether any node in a tree has a given key. Your algorithm should assume you have a tree data structure and that you can access each node's key its array of children. (Do not assume it's a binary search tree.) You should also assume you're given a target key to match.



	```
	Iterative:
	set up a list of nodes to check
	track whether we've visited/processed each one
	start at the root, and say we haven't processed it yet

	for every node we visit/process:
		if the node has been visited already, remove it from the stack
		if the node hasn't been visited yet:
			if the node's key matches the target key, we're done! (return node)
			mark the node as visited in the stack
			add the node's children to the top of the stack (end of the array)

	once there are no more nodes in the stack, we're done

	```

	```
	Recursive:
	base case for any node is when the node has no children (leaf)
		in this case, if the node's key isn't the target, we're done with it (return null or nil or None or whatever)

	even if there are children, we should check whether the node's key is the target (if so, we're done! return node)

	But the general recursive case is when the node isn't the one we're looking for and it does have children. In that case, we should 
		- depth first search each of its children
		- if a child finds a matching node, go ahead and return it
		- if no child finds a matching node, return none or nil or whatever
	```

1. On the whiteboard, pseudocode a depth first search function. As usual, assume you have a tree data structure that allows the following operations:
	
	* given a tree/node `my_tree`, get the root of the tree with `my_tree`
	* given a tree/node, get the key of the node with `.key`
	* given a tree/node, get the children of the node with `.children`



	```python

	def depth_first_search(tree, targetKey) {
		stack = [{"node": self, "visited": false}]

		while stack.length != 0: 
			# peek at top item in the stack
			current = stack[-1]  # last thing in stack

			# this might be the one we were looking for
			if current["node"].key == targetKey:
				return currentnode

			# if this isn't target, continue with search
			if current["visited"]:
				stack.pop() # remove the last item from the stack
			else:
				current["visited"] = true
				# add the node's children to the stack
				stack = stack + current["node"].children
	# if we haven't found it yet, it's not in this subtree
	return None
	```

	```python
	# recursive
	def depthFirstSearch(tree, target_key):
		# check if this is the target
		if tree.key == target_key:
			return tree

		# if this is not a leaf, search all subtrees
		for child in tree.children:
			subtree_result = depthFirstSearch(child, target_key)
			# if a child subtree found soemthing, we can end early
			# since we're only looking for one match right now
			if subtree_result != None:
				return subtree_result

		# if none of the subtrees found anything or if this is a leaf
		# (and since we know it's not a match)...
		return None
	```



1. Copy the starter code in either `tree.js` or `tree.rb`.  You'll see these files now have blanks and informal "tests" for depth first search.  Fill in the depth first search function in one of these files with actual code code. Run `node tree.js` or `ruby tree.rb` to see the informal tests work on your file.

	*See `tree-solution.js` or `tree-solution.rb`.*


1. When would you use depth first search, and when would you use breadth first search?

	*Depth first search is a good idea if your goal/target nodes are mostly near the bottom of the tree. Breadth first search is better if you might have goal/target nodes near the root but down any branch.
