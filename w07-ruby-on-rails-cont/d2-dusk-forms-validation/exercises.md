## Exercises

### Set up

1. Head to this [repo]() and clone the app
2. Run `rake db:create` to make your database.
3. Start your app with `rails server`
4. Navigate to `localhost:3000` – you should see the Owner's index page.

### Making Your Pet Model and Migration

Generate a Pet model using `rails generate model Pet`. This will give a model file like this:

```ruby
class Pet < ActiveRecord::Base
end
```

And a corresponding migration file, like this:

```ruby
class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      # attributes go here
      t.timestamps null: false
    end
  end
end
```

1. Give your Pet table a `name` attribute in the migration using `t.string :name`. This is similar to how you defined your model schemas in Mongoose.
2. Add a validation to your `pet.rb` model that requires the `presence` of `name` to be `true`. Also require `name` to be at least 3 characters. See the [ActiveRecord validation](http://edgeguides.rubyonrails.org/active_record_validations.html#length) docs for guidance.
3. Associate your Pet model with an Owner. Use `belongs_to :owner`.
4. Generate a new migration to add a foreign key, `owner_id` to your Pets table. Use `rails g migration AddOwnerIdToPet owner_id:integer`.
5. Run `rake db:migrate` to get your database up to date.

### Pets Controller and Routes

1. Generate a Pets controllers using `rails g controller Pets`. This will create a file like this:

  ```ruby
  class PetsController < ApplicationController
    # routing actions go here
  end
  ```

2. Define a method in `pets_controller.rb` called `new` and a method called `create`. In **both** methods, assign an instance variable `@pet` to `Pet.new`. Assign an instance variable `@owner` to `Owner.find(params[:owner_id])`.

3. Use an `if / else` block (after your assignment of `@owner` and  `@pet`) in `PetsController#create` to handle valid and invalid form submissions.
  ```ruby
    if @pet.save
      @owner.pets << @pet
      redirect_to @owner
    else
      render 'new'
    end
  ```

4. In `config/routes.rb`, add `resources :pets` to the `resources :owners do ... end` block. This will give you access to all seven RESTful routes for Pets.

### Making your Pet Form

1. Create a file in your `views/pets` directory called `new.html.erb`.
2. Use `form_for` to create a form for `@pet`.
3. Add an errors `<div>` so that an invalid form submission will cause the page to render with the errors displayed.

**NOTE:** If you need a refresher on syntax for `form_for` and the errors, refer to the README for examples or look at `views/owners/new.html.erb`.

If all is right, you should be able to create new pets and associate them with their owners. Additionally, your awesome error handling should display informative messages on how to properly submit your forms. Great job!

## Stretch: Make update forms, add more validations

- In either `owners_controller.rb`, create `edit` and `update` methods, the former renders a form to edit the owner, and later handles the `PUT` request.
- Add new attributes to your models with new migrations using `rails g migration Add<SOMEATTRIBUTE>To<MODELNAME>`. Add validations for these new attributes to in the models files (`owner.rb` and `pet.rb`).
