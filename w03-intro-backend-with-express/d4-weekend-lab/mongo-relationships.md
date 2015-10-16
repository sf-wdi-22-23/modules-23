#Relationships in Mongo


##Learning Objectives

| Objectives |
| :---- |
| Describe one-to-one, one-to-many, and many-to-many data relationships |
| Write mongoose schemas for referenced and embedded data |
| Build the appropriate queries for nested data relationships |

##Motivation 

Real-world data usually consists of different types of things that are related to each other in some way. A banking app might need to track employees, customers, and accounts. A food ordering app needs to know about restaurants, menus, and its users!  We've seen that when data is very simple, we can combine it all into one model.  When data is more complex or less closely tied together, we often create two or more related models.

Today we'll look at two different ways to think about relationships between two things. The first is *cardinality* - how many of each things participate in the relationship? The second deals with where data is stored. Is it *embedded* in a related data record, or does the related record just have a smaller *reference* (say, to its id)?

## Cardinality

###One-to-One 

Each person has one brain, and each (living human) brain belongs to one person. 

<img src="./img/one_to_one.png" alt="one to one erd"  width="250">

One-to-one relationships can sometimes just be modeled with simple attributes. A brain are both complex enough that we might want to have their data in different models, with lots of different attributes on each.


###One-to-Many

Each youtube creator has many videos, and each video was posted by one youtube creator. 

<img src="./img/one_to_many.png" alt="one to many erd" width="250">

###Many-to-Many

Each student can go to many classes, and each class has many students. 

<img src="./img/many_to_many.png" alt="many to many erd"  width="250">

###Entity Relationship Diagrams

Entity relationship diagrams (ERDs) represent the relationships between data or entities.

![Entity Relationship Diagram example](https://www.edrawsoft.com/images/examples/entity-relationship-diagram.png)

Note: Attributes can be represented as line items under a heading (like all of the Item1, Item2, Item3 under each heading above) or as ovals stemming from the heading's rectangle.  

[More guidelines for ERDs](http://docs.oracle.com/cd/A87860_01/doc/java.817/a81358/05_dev1.htm)



##Embed or Reference?

While cardinality is often determined by real-world characteristics of a relationship, the decision to embed or reference data is a design decision.


**Embedded Data** is directly nested *inside* of other data. Each record has a copy of the data.

![](http://docs.mongodb.org/manual/_images/data-model-denormalized.png)

**Referenced Data** is stored as an *id* inside other data. The id can be used to look up the information. All records that reference the same data look up the same copy.

![](http://docs.mongodb.org/manual/_images/data-model-normalized.png)



###Scenario

How would you design the following?

* A `User` that has many `Tweets`?
* A `Food` that has many `Ingredients`?


### Tradeoffs

There are tradeoffs of *efficiency* and *consistency* depending on which one you choose.

It's often more *efficient* to embed data because you don't have to make a separate request or a separate database query -- the first request or query gets you all the information you need.

It's easier to stay *consistent* when you reference data because you only keep one copy around. You don't have to worry that you'll forget to update or delete one copy of the data.

###Setting Up Relationships with Mongoose

**Embedding Data**

```javascript
var tweetSchema = new Schema({
  body: {
    type: String,
    default: ""
  }
});

var userSchema = new Schema({
  username: {
    type: String,
    default: ""
  },
  tweets: [tweetSchema]   // EMBEDDING :D
});
```

**Referencing Data**

```javascript
var foodSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  ingredients: [{
    // REFERENCING :D
    type: Schema.Types.ObjectId, 
    ref: 'Ingredient'
  }]
});

var ingredientSchema = new Schema({
  title: {
    type: String,
    default: ""
  },
  origin: {
    type: String,
    default: ""
  }
});
```



##Route Design

Remember RESTful routing? It's the most popular modern convention for designing resource paths for nested data. Here is an example of an application that has routes for `Store` and `Item` models:

###RESTful Routing
|| | |
|---|---|---|
| **HTTP Verb** | **Path** | **Description** |
| GET | /store | Get all stores |
| POST | /store | Create a store |
| GET | /store/:id | Get a store |
| DELETE | /store/:id | Delete a store |
| GET | /store/:store_id/items | Get all items from a store |
| POST | /store/:store_id/items | Create an item for a store |
| GET | /store/:store_id/items/:item_id | Get an item from a store |
| DELETE | /store/:store_id/items/:item_id | Delete an item from a store |

*In routes, avoid nesting resources deeper than shown above.*
