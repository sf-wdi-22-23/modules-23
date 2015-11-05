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
subl .
```

#### 2. Create a `Speaker` model
Our `Speaker` model will have two attributes: a topic and a duration, both strings.
``` bash
rails g model speaker first_name:string last_name:string email:string
```

Take a look at the files you just created:  
* `app/models/speaker.rb`
* `db/migrate/1234566789_create_speakers.rb`

#### 3. Setup your database
Download and Launch [Postgres.app](http://postgresapp.com/). You should see an elephant in your menu if it's running. [Postico](https://eggerapps.at/postico/), a Postgres GUI, is a helpful tool for visualizing your database.

Next, create your application database:
```bash
rake db:create # create a new database on your machine
rake db:migrate # instruct your database what tables it needs to contain
```

#### 4. Launch the rails console and create your first speaker!
```bash
rails console
# or
rails c
```

**Confirm that your model exists**  
```ruby
Speaker
 #=> Speaker(id: integer, first_name: string, last_name: string, email: string, created_at: datetime, updated_at: datetime)
```

(You may need to "connect" to your database in the rails console. Just follow the instructions.)

#### 5. Can you seed your database?
Take a look at `db/seeds.rb`.

Add the following line to `db/seed.rb`:
```ruby
Speaker.create({first_name: "Juliana", last_name: "Lopker", email: "juliana_lopker@generalassemb.ly"})
```

Now run the following from your command line (not the console!):
```bash
rake db:seed
```

The `seed.rb` file is magic, because it _already_ knows about all of the models and gems in your rails app. All you have to do is tell it what data to create!

Now, back in the rails console, type `Speaker.all`. Does it show the new speaker you just created?


#### Exercises ([Active Record docs](http://guides.rubyonrails.org/active_record_basics.html) will help)
Seed your database with at least 3 speakers using the FFaker gem. HINT: add `gem ffaker` to your `GEMFILE` then `bundle install` it. [ffaker documentation](https://github.com/ffaker/ffaker/blob/master/REFERENCE.md)

Using the rails console:
1. Delete a speaker
1. Find the first speaker
1. Find the last speaker
1. Search by id
1. Search by first name
1. Sort by last name
1. Update the email of a speaker
1. Delete all the speakers you created.


#### Stretch Exercises
1. Add a phone column to the Speaker table that will display the location of a given speaker and update the database. HINT: `rails g migration AddPhoneToSpeakers phone:string` and then don't forget to migrate!
1. In terminal, create a Talk model with attributes `topic` and `duration`.
1. Create a has many relationship between Speakers and Talks.


**Pro-Tip**: Remember, when you're working in the console/repl `up-arrow` is your friend! (That and "hanging a dot" + "double-tabbing").
