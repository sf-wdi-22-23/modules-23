# Forms, Validations, and Error Messages

## Objectives

- Discuss importance of error handling in web development
- Create validated database entries using ActiveRecord
- Display errors on forms using `form_for`

## Purpose (Why does this matter?)

Have you ever filled out a form on a website and hit submit, only to receive a `500` server error? Ever tried to register for something only to be told that your username has been taken, or your password doesn't contain enough or the right combination of characters? If so, then you've been on both sides of error handling.
![Alternate Paths](http://www.ibm.com/developerworks/rational/library/edge/08/feb08/sheldon_lenters/image002.gif)

Error handling is a critical part of web development. You cannot only plan for the "happy path". Users make mistakes, some people are malicious (SQL injection anyone?), and things generally go wrong. But with a little planning ahead, you can keep your users moving through the flow of your application with minimal confusion and frustration.

### Error Messages

Without **good** error messages, you have user experiences like this.

![Application Error](http://blogpardner.s3.amazonaws.com/wp-content/uploads/2012/06/heroku_err.png)

Which tends to leave you feeling like [this](https://giphy.com/gifs/someone-error-Qh62vfJtUMr6).

Now there are all manner of ways to do error handling. [HTML5 validations](http://www.sitepoint.com/html5-form-validation/), [jQuery Validate](http://jqueryvalidation.org/), and more. But we want to handle that on the server side – making certain that our database integrity is maintained at all costs.

Enter [ActiveRecord validations](http://guides.rubyonrails.org/active_record_validations.html).

## Validations

Validations provide security against invalid or harmful data being entered into the database. ActiveRecord provides a convenient and easy set of pre-built methods for validating attributes of your models, as well as the ability to define custom validator methods. An example of a prepackaged validation:

```ruby
# app/models/owner.rb
class Owner < ActiveRecord::Base
    validates :name, presence: true, uniqueness: true, length: { min: 6 }
end
```

This snippet of code is calling the `validate` method, and accepting two arguments, an attribute from a model, and a hash of configurations: `{ presence: true, uniqueness: true, length: { minimum: 6 }`.

```ruby
# app/controllers/owners_controller.rb
def create
    @user = Owner.create(username: "Taco")
end
```

If someone tried to `save` a new user in the database with a duplicate username, or no username, or a username with fewer than 6 characters, an error would be generated.

```ruby
ActiveRecord::RecordInvalid: Validation failed: Name is too short (minimum is 6 characters)
```

However, this error would be displayed in the server. So how can we get it to the view where the user can see it? Well, fortunately the error message is stored on the object that was attempting to be saved (`@user` in this case).

We can access the errors using `@user.errors.full_messages` method provided by `ActiveRecord::Base`. See the docs [here](http://api.rubyonrails.org/classes/ActiveModel/Errors.html#method-i-full_message).  We can display the errors in the view by iterating over the array of error message strings on the User object.

```html
<!-- app/views/owners/new.html.erb -->
<% if @user.errors.any? %>
  <div id="error_explanation">
    <h2 class="error-warning">
      <%= pluralize(@article.errors.count, "error") %> prohibited
      this user from being saved:
    </h2>
    <ul>
      <% @article.errors.full_messages.each do |msg| %>
      <li class="error-message"><%= msg %></li>
      <% end %>
    </ul>
  </div>
  <% end %>
```

For context, we will be adding this error section to our existing User form

```html
<div class='owner-form'>
  <%= form_for @owner do |f| %>
  <!-- error handling code goes here -->
  <p class="owner-form-title">
    <%= f.text_field :name, placeholder: 'name' %>
  </p>
  <p class="owner-form-submit">
    <%= f.submit %>
  </p>
  <% end %>
</div>
```

With our new and improved form, users will get error messages telling them what fields they need to fix when they make an invalid form submission. Awesome!

## Challenges

Now that you've seen how to implement validations and propogate the ActiveRecord errors from your database models to the controller and then pass that into the view, it's your turn!

**Create a form for Pets**

- in the `app/views/owners/show.html`, add a form (with an errors div) for creating a `Pet` using `form_for`.
- in `app/models/owner.rb`, add a validation to your `Pet` model for the `name` attribute, requiring the `presence` to be `true`
- in `app/controllers/pets_controller.rb`, define a `create` method which assigns `@pet` to `Pet.new(name: params[:name])`. Have the `create` method `redirect_to` the pet's route (check `rake routes` to determine the path name).

**Note:** You'll need to associate the pet being created with the Owner you want it to be owned by.

## Stretch Challenge

- Add a breed attribute to the `Pet` model by creating a new migration. Add a validation for `breed` in your `models/Pet.rb` file. Edit your Pet creation form to include the new `breed` attribute.
- Add a email attribute to the `Owner` model by creating a new migration. Add a validation for `email` in your `models/Owner.rb` file. Validate the email using a [Regular Expression](http://edgeguides.rubyonrails.org/active_record_validations.html#format) Edit your Owner creation form to include the new `email` attribute.
