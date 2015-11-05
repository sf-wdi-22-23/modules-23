#Rock 'n Rails!

For this morning exercise we're going to be synthesizing all our Rails knowledge to build a record collection! At the bottom of this file you can find a link to a completed solution.

### User Narrative

I arrive on RocknRails.com and I can see all the records they have. I can click on them to see the details of a single record and I can click "Add Record" to submit my own record.

### Schema

We are going to have one resource: a `Record`, and it should have the following attributes:

* title — String
* artist — String
* year — Integer
* cover_art — String
* song_count — Integer

### Sprints

**See all the records on `records#index`**

1. Generate a new rails application with postgres as your default database:

  ```bash
  rails new RockNRails -T -B -d postgresql
  cd RockNRails
  bundle
  # git init & git commit!
  ```

1. Make sure that your postgres application is open! Otherwise the Rails server will not be able to connect to a database.

1. Generate a records controller with `index` `show` `new` and `create` actions:

  ```bash
  rails g controller records index show new create
  ```

1. Delete the generated routes and write RESTful routes that map to our records controller.

  `config/routes.rb`.

  ```ruby
  root to: 'records#index'
  resource :records
  ```

1. `rails s` and go look at your root route. Add bootstrap to your `application.html.erb` file and a basic splash page to your records#index.html.erb.

1. Write your `records#index` action to pull in all records from a Record model.

1. Generate a Record model with the attributes `title` `artist` `year` `cover_art` and `song_count`

  ```bash
  rails g model record title:string artist:string year:integer cover_art:string song_count:integer
  ```

1. Create a database for your application to use

  ```bash
  rake db:create
  ```

1. Run the migration that was generated to create a new table in the database.

  ```bash
  rake db:migrate
  ```

1. Play with your new `Record` model in the rails console:

  ```bash
  rails console
  > Record.all #=> []
  > Record.create({title: "Test Record"})
  ```

1. In `db/seeds.rb` create some records!

  `db/seeds.rb`.

  ```ruby
  # Wipe the database
  Record.destroy_all
  # Let's create a bunch of records
  Record.create([
    {
      title: "On Avery Island",
      artist: "Neutral Milk Hotel",
      year: 1996,
      cover_art: "https://upload.wikimedia.org/wikipedia/en/7/73/On_avery_island_album_cover.jpg",
      song_count: 12
    },
    {
      title: "Everything All the Time",
      artist: "Band of Horses",
      year: 2006,
      cover_art: "https://upload.wikimedia.org/wikipedia/en/5/51/BandofHorsesEverythingalltheTime.jpg",
      song_count: 10
    },
    {
      title: "The Flying Club Cup",
      artist: "Beirut",
      year: 2007,
      cover_art: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Flying_Club_Cup.jpg",
      song_count: 13
    }
  ])
  ```

1. Run the seed file!

  ```bash
  rake db:seed
  ```

1. Check that the seed file worked by displaying `@records` to your records#index template. (Hint, just like EJS `<%= %>`)

**See a single record on `record#show`**

1. For each record in the `record#index` view let's use the `link_to` rails template helper.

  ```html
  <% @records.each do |record| %>
    <%= link_to 'Show page', record_path(record) %>
  <% end %>
  ```

1. The `records#show` controller#action now needs to get the id from the parameters and use it to find the matching record in the database and pass it to the view.

  ```ruby
    # records_controller.rb

    def show
      @record = Record.find(params[:id])
    end
  ```

1. In your `records#show` view, `views/records/show.html.erb` display the record that is being passed in and use the `image_tag` view helper to display the cover_art

  ```html
  <%= image_tag @record.cover_art %>
  <h1><%= @record.title %></h1>
  <h2>by <%= @record.artist %></h2>
  <p>Year: <%= @record.year %></p>
  <p>Song Count: <%= @record.song_count %></p>
  ```

**See a form to create a new record on `record#new`**

1.  Let's create a link on *every* page that will get us to a form that creates a new record, which lives on `/records/new`. We can edit the `application.html.erb` file which lives in `views/layouts/` to accomplish this. Inside the file add an anchor tag just about the `yield` statement in the `<body>`.

  ```html
  <body>
  <!--Every page will have this link to create a new record-->
  <%= link_to "Make a New Record", new_record_path %><br>

  <%= yield %>

  </body>
  ```

1. Now we have to edit the view in `/records/new.html.erb` and give it a form to create a new record. Let's make all fields required.

  ```html
  <%= form_for @record do |f| %>
    <label>Title: </label>
    <%= f.text_field :title, required: true, class:'form-control' %><br>
    <label>Artist: </label>
    <%= f.text_field :artist, required: true, class:'form-control' %><br>
    <label>Year: </label>
    <%= f.number_field :year, required: true, class:'form-control' %><br>
    <label>Cover art: </label>
    <%= f.url_field :cover_art, required: true, class:'form-control' %><br>
    <label>Song count: </label>
    <%= f.number_field :song_count, required: true, class:'form-control' %><br>
    <%= f.submit %>
  <% end %>
  ```

1. This form will not work yet. That's because we reference `@record` in the form but it's not defined. Let's define `@record` in our controller and pass it into our view. All we need it to be equal to is a new instance of a the `Record` model.

  ```ruby
    # records_controller.rb
    def new
      @record = Record.new
    end
  ```

1. What happens when you submit this form?

**Submit the new record form to `record#create` to create a new record and then be redirected back to record index.**

1. Now that our forms works, it will automatically `POST` to `/records` which hits our action#controller `records#create`. Nothing is happening in that controller as of yet so we need to actually create a new record there. In order to do that we must pull out the data submitted from our form from the `params` object and create a new record with it.

  `app/controllers/records_controller.rb`.

  ```ruby
    def create
      # Rails has a security pattern called "strong parameters"
      record_params = params.require(:record).permit(:title, :artist, :year, :cover_art, :song_count)
      Record.create(record_params)
    end
  ```

1. You may wonder what all the business is with `.require(:record).permit(...)` is. This is known as [**strong parameters**](http://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters) and tells our applications these are the fields we will accept. Its good security practice to help prevent users accidentally updating sensitive model attributes.

1. Additionally we can refactor this code to make it look better. We can **encapsulate** our strong parameter logic into a method called `record_params`. Let's make that a private method, since only the controller itself will ever use it. At the bottom of `RecordController` we can write:

  ```ruby
    # records_controller.rb

    private

    def record_params
      params.require(:record).permit(:title, :artist, :year, :cover_art, :song_count)
    end

  end # end of class
  ```

1. Now our `create` method can take advantage of the `record_params` method, which simply will output an object of key value pairs our `Record` model can use to create a new record. Also let's tell it to redirect to the index page once it's created the record.

  ```ruby
    # records_controller.rb
    def create
      Record.create(record_params)
      redirect_to('/records')
    end
  ```

1. Now can you create records? What is the next features you could add to this?

### NICE WORK!

Congrats! We've complete all the user stories! Reference a version of this app with the user stories complete [here](https://github.com/sf-wdi-21/rock-n-rails).

### Stretch

1. Make your records form submit via ajax. You can put any scripts you like into the `app/assets/javascript` file and they will be available on your client without any extra linking - Rails magic!
1. Create a `vote_count` attribute on your record and allow people to vote records up via ajax
1. Add the `will_paginate` gem to paginate your records#index page so only 10 records display at a time.
