todo: solutions, change instructions to reflect actual data, data.json
# Week 3

## Tuesday Lab: Whiteboarding Queries

Today we practice whiteboarding in pairs. Before I set you free, we will do one together. 

First we will do a function findById together. Calling findById an array of objects should return the object nested in it that has an attribute 'id' equal to the argument passed to it. 

In other words, we should be able to call 

```
	findByID(data, 4);
```

and this should return something like this:

```
	{id: 4, name: "Lorraine Baines McFly", known-from: "Back to the Future" }
```

### Now it's your turn! 

Modify the findById function to create a deleteById function, that returns the object with the correct ID from the array, and also DELETES this object from the array. 

### Let's try another one! 

This time we want to allow our function to findBy ANY ATTRIBUTE WE WANT! That is the essence of the 'where' function. Given an array of Objects, and a property key-value pair. It should return an array of objects containing all objects in the original array of objects where the property matches the key-value pair. Sounds complicated. Lets see an example:

We should be able to call:

```
	where(data, {known-from: "Back to the Future"});
```

and this should return something like this:

```
	[{id: 0, name: "Dr. Emmett Brown", known-from: },
	{id: 1, name: "Marty McFly, known-from: "Back to the Future" },
	{id: 2, name: "Biff Tannen", known-from: "Back to the Future" },
	{id: 3, name: "Jennifer Parker, known-from: "Back to the Future" },
	{id: 4, name: "Lorraine Baines McFly", known-from: "Back to the Future" },
	{id: 5, name: "George McFly, known-from: "Back to the Future"}]
```

### Bonus:
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
