todo: solutions, change instructions to reflect actual data, data.json
# Week 3

## Tuesday Lab: Whiteboarding Queries

Today we practice whiteboarding in pairs. Rotate three tables and find yourself a new partner. Choose one of you to start.

Define a function `findById`. Calling `findById` on an array of objects should return the object nested in it that has an attribute 'id' equal to the argument passed to it.

The person who is not defining the function should be reviewing the solution and providing hints or asking questions about their partner's solution.

We are looking for something like this:

```
	findByID(data, 4);
```

that return something like this:

```
	{id: 4, name: "Lorraine Baines McFly", known-from: "Back to the Future" }
```

### Now switch!

Trade roles. The person who whiteboarding should now be providing hints or asking questions to the person writing the next function.

Modify the `findById` function to create a `deleteById` function, which returns the object with the correct ID from the array, and also DELETES this object from the array. *Hint: use `splice()`*

### Switch again!
The person who wrote the function for `findById` should be whiteboarding now.

This time we want to allow our function to find an object using ANY ATTRIBUTE WE WANT! That is the essence of the `where` function. The `where` function takes as arguments:
- an array of Objects,
- a Javascript object literal, `{}`, containing key-value pairs of property names and values.
It should return an array of objects containing all objects in the original array of objects where the property matches the key-value pair. Sounds complicated. Let's see an example:

Calling this:

```
	where(data, {known-from: "Back to the Future"});
```

should return something like this:

```
	[
		{id: 0, name: "Dr. Emmett Brown", known-from: "Back to the Future" },
		{id: 1, name: "Marty McFly, known-from: "Back to the Future" },
		{id: 2, name: "Biff Tannen", known-from: "Back to the Future" },
		{id: 3, name: "Jennifer Parker, known-from: "Back to the Future" },
		{id: 4, name: "Lorraine Baines McFly", known-from: "Back to the Future" },
		{id: 5, name: "George McFly, known-from: "Back to the Future"}
	]
```

### Bonus:
Work on these with your partner.

1. Refactor your 'where' function to accept a limit parameter, so
	```
	where(data, {known-from: "Back to the Future"}, 3);
	```
	should return an array with a maximum of 5 objects in it.

	Can you get it to work with OR without that parameter?

2. Refactor your 'where' so it can accept more than one property so
	```
	where(data, {known-from: "Back to the Future"}, {hair-color: "brown"});
	```
	returns an array of objects that have BOTH a known-from property of "Back to the Future" AND a hair-color property of "brown".
