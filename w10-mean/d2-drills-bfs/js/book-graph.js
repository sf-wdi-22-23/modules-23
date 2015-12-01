// BREADTH FIRST SEARCH
// for a graph

var CYOAGraph = function (firstSection){
	this.head = firstSection;
};


CYOAGraph.prototype.findEarlyWin = function(){
	// set up the queue of nodes to  check for happy ending
	var queue = [{node: this.head, numDecisions: 0}]; 
	// console.log("queue, ", queue)
	var current;

	// THIS TIME WE'LL ALSO NEED TO KEEP TRACK OF WHETHER WE'VE 
	// ALREADY SEEN A NODE
	// we'll store a hashset of pages we've seen to make it easy to check membership
		// a hash is better than an array because we want to be able to 
		// quickly see whether a particular page is in there already
	var seen = {};

	while (queue.length !== 0){
		current = queue.shift(); // removes and returns first element of array
		// check if current node is happy ending
		if (current.node.happy_ending){
			return current.numDecisions;
		} else {
			if (current.node.children){
				for(var i=0; i<current.node.children.length; i++){
					if (!seen[current.node.children[i].page]){
						// only add child page to queue if we haven't already added it
						queue.push({node:current.node.children[i], numDecisions: current.numDecisions+1});
						seen[current.node.page] = true;  // just need to store anything truthy in here 
					}
				}
			}
		}
	}
	// we've gone through the entire story graph, and there are no happy endings
	// interviewees should ask what to do here
	// we'll adopt a convention of returning false
	return false;
};

var CYOANode = function (storySection, choices, page){
	this.page = page; 		// number, helps us keep track of if we've seen this node
	this.data = storySection; 	// string, the section of the story starting at this page
	this.children = choices;	// array, holds the CYOANodes that we can go to directly from this one
};

// ////////////////Testing

CYOANode.prototype.addChoice = function(choiceNode){
	this.children.push(choiceNode);
};


var pg220 = new CYOANode("pg220 text -- Congratulations!", [], 220);
var pg234 = new CYOANode("pg234 text -- Congratulations!", [], 234);
var pg260 = new CYOANode("pg260 text -- You have died.", [], 260);
var pg204 = new CYOANode("pg204 text", [pg220, pg234], 204);
var pg255 = new CYOANode("pg255 text", [pg204, pg260], 255);
var pg216 = new CYOANode("pg216 text", [pg204, pg220], 216);
var pg201 = new CYOANode("pg201 text", [pg255, pg216], 201);

//			 ------- 
//			/		\
// 		216  		  220W
// 	/ 		\		/ 
// 201 		   204  
// 	\		/		\
// 		255 		  234W	
// 			\
// 		  	  260L

var book = new CYOAGraph(pg201);
console.log(book.findEarlyWin());  // 2

var loserBook = new CYOAGraph(pg260);
console.log(loserBook.findEarlyWin());  // -1

var immediateWinBook = new CYOAGraph(pg220);
console.log(immediateWinBook.findEarlyWin()); // 0
