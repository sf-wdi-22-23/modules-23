// This object type represents a tree
// where each node has an array of children.

var TreeNode = function (key, children){
	this.key = key; 	
	this.children = children || [];	// an array, holds the TreeNodes that we can go to directly from here
};

// Searches through all nodes of the tree, spreading 
// outward from the root. Looks for any node with key equal
// to the targetKey param. Returns null if no such node is found.
TreeNode.prototype.breadthFirstSearch = function(targetKey){
	// set up the queue of nodes to check 
	var queue = [this]; 
	var current;
	while (queue.length !== 0){
		// print out key of each node in queue to help with debugging
		console.log("queue: ", queue.map(function(node){
			return node.key;
		}));

		current = queue.shift(); // remove and return first element of array

		// check if current node key matches the target key
		if (current.key == targetKey){
			return current;
		} else {
			if (current.children){
				queue = queue.concat(current.children);
			}
		}
	}
	// we've gone through the entire tree without finding the key
	return null;
};


// Return all nodes for which the selectionFunction returns true.
TreeNode.prototype.breadthFirstSearchAll = function(selectionFunction){
	// set up the queue of nodes to check 
	var queue = [this]; 
	// set up output array of nodes that match properties
	var output = [];
	var current;
	while (queue.length !== 0){
		// print out key of each node in queue to help with debugging
		console.log("queue: ", queue.map(function(node){
			return node.key;
		}));

		current = queue.shift(); // remove and return first element of array

		// check if selectionFunction returns true for current node 
		if (selectionFunction(current)){
			output.push(current);
		} else {
			if (current.children){
				queue = queue.concat(current.children);
			}
		}
	}
	return output;
};



var myTree = new TreeNode('A'),
	bNode = new TreeNode('B'),
	cNode = new TreeNode('C'),
	dNode = new TreeNode('D'),
	eNode = new TreeNode('E'),
	fNode = new TreeNode('F'),
	gNode = new TreeNode('G');

myTree.children.push(bNode, cNode);
bNode.children.push(dNode, eNode, fNode);
eNode.children.push(gNode);

//          D 
//        /
//     B  -- E -- G
//   /	  \
// A        F
//   \
//     C 

console.log("-- expect node E --");
console.log(myTree.breadthFirstSearch('E'));  
// queue:  [ 'A' ]
// queue:  [ 'B', 'C' ]
// queue:  [ 'C', 'D', 'E', 'F' ]
// queue:  [ 'D', 'E', 'F' ]
// queue:  [ 'E', 'F' ]
// { key: 'E', children: [ { key: 'G', children: [] } ] }

console.log("-- expect node G --");
console.log(myTree.breadthFirstSearch('G'));  
// queue:  [ 'A' ]
// queue:  [ 'B', 'C' ]
// queue:  [ 'C', 'D', 'E', 'F' ]
// queue:  [ 'D', 'E', 'F' ]
// queue:  [ 'E', 'F' ]
// queue:  [ 'F', 'G' ]
// queue:  [ 'G' ]
// { key: 'G', children: [] }


console.log("-- expect null --");
console.log(myTree.breadthFirstSearch('H')); 
// queue:  [ 'A' ]
// queue:  [ 'B', 'C' ]
// queue:  [ 'C', 'D', 'E', 'F' ]
// queue:  [ 'D', 'E', 'F' ]
// queue:  [ 'E', 'F' ]
// queue:  [ 'F', 'G' ]
// queue:  [ 'G' ]
// null


console.log("-- expect array with nodes E and F --");
console.log(myTree.breadthFirstSearchAll(function(node){
	return node.key > 'D';
}));
// queue:  [ 'A' ]
// queue:  [ 'B', 'C' ]
// queue:  [ 'C', 'D', 'E', 'F' ]
// queue:  [ 'D', 'E', 'F' ]
// queue:  [ 'E', 'F' ]
// queue:  [ 'F' ]
// [ { key: 'E', children: [ [Object] ] },
//   { key: 'F', children: [] } ]


console.log("-- expect empty array --");
console.log(myTree.breadthFirstSearchAll(function(node){
	return node.username == "Bob";
}));
// queue:  [ 'A' ]
// queue:  [ 'B', 'C' ]
// queue:  [ 'C', 'D', 'E', 'F' ]
// queue:  [ 'D', 'E', 'F' ]
// queue:  [ 'E', 'F' ]
// queue:  [ 'F', 'G' ]
// queue:  [ 'G' ]
// []





