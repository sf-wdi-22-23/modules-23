todo: solutions, better instructions, data.json

1. We do findById
2. You do DeleteByID 
3. You do Where that returns array of all objects with the attribute
Bonus: 
4. Where with limit of how many
5. refactor Where to accept multiple values to check for 

# Week 3

## Tuesday Lab: Whiteboarding a where() query

Today we practice whiteboarding in pairs. We will be writing a function that given an array of Objects, and a property key-value pair. It should return the first Object in the array of objects where the property matches the key-value pair. 

In other words, we should be able to call 

```
	where(arrayOfObjects, {course: "WDI"});
```

and this should return something like this:

```
	{course: "WDI", instructors:["Alex", "Ben", "Brianna"], students: [{name: "Angelo"}, {name:"Brian"}]}
```

Start as simple as possible, just iterating through the array that is passed in. Then work from there. 
