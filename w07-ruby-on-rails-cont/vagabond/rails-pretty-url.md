# How to add Friendly Ids (for pretty urls) to an existing project

## FriendlyId

<a href="https://github.com/norman/friendly_id" target="_blank">Docs on GitHub</a>

1. Add the gem to your gemfile.

  ```console
  gem friendly_id
  ```

1. After including FriendlyId, run the bundle command.

  ```console
  bundle install
  ```

1. In order to add FriendlyId to an existing application, we will need to create a migration to add the necessary field to the model we want to use FriendlyId with. We add `uniq` to enforce unique slug values.

  ```console
  rails g migration AddSlugToPost slug:uniq
  ```

1. Now we need to update our database:

  ```console
  rake db:migrate
  ```

1. Now, we need to add code to our model to tell rails that we wish to use FriendlyId. Open the desired model and add the following code.

  ```ruby
  extend FriendlyId
  friendly_id :title, use: :slugged
  ```

1. We are almost there! While technically we are all set up and good to go, existing data still doesn't have a slug. In order to add a slug, start a rails console:

  ```console
  rails c
  ```

1. Inside the rails console, run a command to loop through each model and save it:

  ```
  Posts.find_each(&:save)
  ```

1. As a final step, we need to change our `.find`s to friendly finds.

  ```ruby
  Post.find(params[:id])
  ```

    becomes

  ```ruby
  Post.friendly.find(params[:id])
  ```

1. Now it should work! Checkout out your new, prettier URLs.
