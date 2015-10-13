todo: solutions, better instructions, data.json

1. We do findById
2. You do DeleteByID 
3. You do Where that returns array of all objects with the attribute
Bonus: 
4. Where with limit of how many
5. refactor Where to accept multiple values to check for 

# Week 3

## Tuesday Lab: Whiteboarding Queries

Today we practice whiteboarding in pairs. Before I set you free, we will do one together. 

First we will do a function findById together. Calling findById an array of objects should return the object nested in it that has an attribute 'id' equal to the argument passed to it. 

In other words, we should be able to call 

```
	findByID(arrayOfObjects, 12);
```

and this should return something like this:

```
	{id: 12, course: "WDI", instructors:["Alex", "Ben", "Brianna"], students: [{name: "Angelo"}, {name:"Brian"}]}
```

### Now it's your turn! 

Modify the findById function to create a deleteById function, that returns the object with the correct ID from the array, and also DELETES this object from the array. 

### Let's try another one! 

This time we want to allow our function to findBy ANY ATTRIBUTE WE WANT! That is the essence of the 'where' function. Given an array of Objects, and a property key-value pair. It should return an array of objects containing all objects in the original array of objects where the property matches the key-value pair. Sounds complicated. Lets see an example:

We should be able to call:

```
	where(arrayOfObjects, {course: "WDI"});
```

and this should return something like this:

```
	{course: "WDI", instructors:["Alex", "Ben", "Brianna"], students: [{name: "Angelo"}, {name:"Brian"}]}
```

### Bonus:
1. Refactor your 'where' function to accept a limit parameter, so
```
where(arrayOfObjects, {course: "WDI"}, 5);
```
should return an array with a maximum of 5 objects in it. 

Can you get it to work with OR without that parameter?
2. Refactor your 'where' so it can accept more than one property so 
```
where(arrayOfObjects, {course: "WDI"}, {something: "thing"});
```
returns an array of objects that have BOTH a course property of "WDI" AND a something property of "thing"
