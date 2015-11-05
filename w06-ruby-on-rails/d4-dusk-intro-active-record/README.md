# Intro to ActiveRecord

| Objectives       |  
| :------------------- |  
| Add models to a Rails app |
| Seed a Rails database |
| Write ActiveRecord queries |  
---

In this lab you will learn how to create seed data and use ActiveRecord, the Rails ORM.

#### Think, Pair, Share
Convert these English statements into queries. Consult the [Rails docs](http://guides.rubyonrails.org/active_record_querying.html) as needed.

1. Give me the all users with the last name "Hendrickson".

2. Give me all the articles with ids from 54 to 67.

3. Give me all the answers with more than 100 upvotes.

4. Give me all the articles.

#### 1. Create a new rails application
**Make sure you're in a new project folder**
``` bash
rails new conference_app -T -d postgresql
cd conference_app
bundle
git init
git add . -A
git commit -m "inital commit, rails skeleton"
subl .
```

#### 2. Create a `Talk` model
Our `Talk` model will have two attributes: a topic and a duration, both strings.
``` bash
rails g model talk topic:string duration:integer
git diff # take a look at the files you just created!
```

And take a look at the following files:  
* `app/models/talk.rb`
* `db/migrate/1234566789_create_talks.rb`

#### 3. Setup your database
Download and Launch [Postgres.app](http://postgresapp.com/). You should see an elephant in your menu if it's running. [Postico](https://eggerapps.at/postico/), a Postgres GUI, is a helpful tool for visualizing your database.

Next, create your application database:
```bash
rake db:create # create a new database on your machine
rake db:migrate # instruct your database what tables it needs to contain
```

#### 4. Launch the rails console and create your first talk!
```bash
rails console
# or
rails c
```

**Confirm that your model exists**  
```ruby
Talk
 #=> Talk(id: integer, topic: string, duration: integer, created_at: datetime, updated_at: datetime)
```

(You may need to "connect" to your database in the rails console. Just follow the instructions.)

#### 5. Can you seed your database?
Take a look at `db/seed.rb`.

Add the following line:
```ruby
Talk.create({topic: "Playing with Models in the Rails Console", duration: 45})
```

Now run the following from your command line (not the console!):
```bash
rake db:seed
```

The `seed.rb` file is magic, because it _already_ knows about all of the models and gems in your rails app. All you have to do is tell it what data to create!

Now, back in the rails console, type `Talk.all`. Does it show the new talk you just created?


#### Exercises ([Active Record docs](http://guides.rubyonrails.org/active_record_basics.html) will help)
Seed your database with at least 3 talks using the FFaker gem. HINT: add `gem ffaker` to your `GEMFILE`. [ffaker documentation](https://github.com/ffaker/ffaker/blob/master/REFERENCE.md)

Using the rails console:
1. Delete a talk
1. Find the first talk
1. Find the last talk
1. Search by id
1. Search by topic
1. Sort by topic
1. Update the topic of a talk
1. Delete all the talks you created.


#### Stretch Exercises
1. 1. Add a location column to the Talk table that will display the location of a given talk and update the database. HINT: `rails g migration AddLocationToTalks speaker:string`
1. In terminal, create a Speaker model with attributes `first_name`, `last_name`, and `email`.
1. Create a has many relationship between Speakers and Talks.


**Pro-Tip**: Remember, when you're working in the console/repl `up-arrow` is your friend! (That and "hanging a dot" + "double-tabbing").

>***A note on `p` vs `puts`:***<br>
`puts` calls `to_s` on the object and generally returns a readable version of the object. `p` is equivalent to `puts`, but with the inspect method called instead of the `to_s`. So with `p` we will see the difference between "2" and 2. This method is better for debugging.
