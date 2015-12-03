// This object type represents a *sorted* tree 
// with _exactly_ _two_ _subtrees_
// (one or both of which may be nil). More info at
// https://en.wikipedia.org/wiki/Binary_search_tree

var BSTNode = function (key){
	this.key = key; 	
	this.left = null;
	this.right = null;
};

// flattens binary search tree into a sorted array
// with in-order traversal
BSTNode.prototype.to_arr = function(){

};

// Inserts a new node with the given new_key as its key.
// The new key will be placed in either the #left
// or #right subtrees, if new key is
// less than or greater than #key respectively.
BSTNode.prototype.insert = function(new_key) {
    if (new_key < this.key){
      if (this.left === null){ 
        this.left = new BSTNode(new_key);
      } else {
        this.left.insert(new_key);
      }
    } else {
      if (this.right === null){
        this.right = new BSTNode(new_key);
      } else {
        this.right.insert(new_key);
      }
    }
};


// Check if key is in tree.
// Returns true if in the tree 
// and false if not.

BSTNode.prototype.has_key = function(key){
    current = this;
    while (current !== null){
      if (current.key > key){
        current = current.left;
      } else if (current.key < key){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
};


my_tree = new BSTNode(50);
my_tree.insert(25);
my_tree.insert(75);
my_tree.insert(12);
my_tree.insert(37);
my_tree.insert(63);
my_tree.insert(87);

console.log("sorted: ", my_tree.to_arr());