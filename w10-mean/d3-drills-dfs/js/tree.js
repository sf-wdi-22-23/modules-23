// Note: To run only recursive version of depth first search tests from the Terminal 
// use `node tree-solution.js recursive`.
// For iterative only, use `node tree-solution.js iterative`.

// This object type represents a tree
// where each node has an array of children.

var TreeNode = function (key, children){
	this.key = key; 	
	this.children = children || [];	// an array, holds the Trees that we can go to directly from here
};

// Searches through tree for a single node whose key is equal to
// the +target_key+ param. Looks through nodes in a depth-first order,
// by following each path as deep as it can before backtracking.
// Returns null if no such node is found.
TreeNode.prototype.depthFirstSearch	= function(targetKey) {
	return null;
};

// Searches through all nodes of the tree, spreading 
// outward from the root. Looks for any node with key equal
// to the targetKey param. Returns null if no such node is found.
TreeNode.prototype.breadthFirstSearch = function(targetKey) {
	return null;
};


// Returns an array containing all nodes for which 
// the selectionFunction returns true.
TreeNode.prototype.breadthFirstSearchAll = function(selectionFunction){
	return [];
};


var myTree = new TreeNode('Q'),
	rNode = new TreeNode('R'),
	sNode = new TreeNode('S'),
	tNode = new TreeNode('T'),
	uNode = new TreeNode('U'),
	vNode = new TreeNode('V'),
	wNode = new TreeNode('W');

myTree.children.push(rNode, sNode);
rNode.children.push(tNode, uNode, vNode);
uNode.children.push(wNode);

//          T 
//        /
//     R  -- U -- W
//   /	  \
// Q        V
//   \
//     S 


console.log("\n-- expect node U --");
console.log(myTree.depthFirstSearch('U'));  



console.log("\n-- expect node W --");
console.log(myTree.depthFirstSearch('W'));  



console.log("\n-- expect null --");
console.log(myTree.depthFirstSearch('Z')); 



