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
  @owner = Owner.create(name: "Taco")
end
```

If someone tried to `save` a new owner in the database with a duplicate username, or no username, or a name with fewer than 6 characters, an error would be generated.

```ruby
ActiveRecord::RecordInvalid: Validation failed: Name is too short (minimum is 6 characters)
```

However, this error would be displayed in the server. So how can we get it to the view where the owner can see it? Well, fortunately the error message is stored on the object that was attempting to be saved (`@owner` in this case).

Speaking of `@owner`, where is that being used in the view? It's here:

```html
<!-- app/views/owners/new.html.erb -->
<div class='owner-form'>
  <%= form_for @owner do |f| %>
  <!-- error handling code will go here -->
  <p class="owner-form-title">
    <%= f.text_field :name, placeholder: 'name' %>
  </p>
  <p class="owner-form-submit">
    <%= f.submit %>
  </p>
  <% end %>
</div>
```

There is a lot going on here. A few important things to note:

**`form_for`**

```ruby
<%= form_for @owner do |f| %>
# ERB code here  
<% end %>
```

`form_for` is a [form helper](http://guides.rubyonrails.org/form_helpers.html#binding-a-form-to-an-object) method Rails provides which can take several parameters:
  - the actual object which is the form is creating or updating, e.g, `@owner`
  - a hash of options, which itself consists of a `url` hash and an `html` hash, which will affect how the form renders in HTML and what route it aligns with

`form_for` yields a form builder object, `f`, which is used to generate the various different form tags like text fields, text areas, and submit buttons. Like this:

```ruby
<%= f.text_field :name, placeholder: 'name' %>
<%= f.submit %>
```

The `text_field` takes a symbol as an argument, which is uses to determine which attribute on the model to link the field to, along with a [hash of options](http://apidock.com/rails/ActionView/Helpers/FormHelper/text_field), such as deciding placeholders, classes, and more.

The [form builder API docs](http://api.rubyonrails.org/classes/ActionView/Helpers/FormBuilder.html) for other methods, and the [Form Helpers documentation](http://guides.rubyonrails.org/form_helpers.html) for general information about forms in Rails.

Okay, so we have our owner form. Let's make some owners! But wait, what if we make owners that don't pass our validations? How can we inform the user what needs to be corrected?

We can access the errors using `@owner.errors.full_messages` method provided by `ActiveRecord::Base`. See the docs [here](http://api.rubyonrails.org/classes/ActiveModel/Errors.html#method-i-full_message).  We can display the errors in the view by iterating over the array of error message strings on the Owner object.

Look at the following code snippet. What does it do?

```html
<% if @owner.errors.any? %>
  <div id="error_explanation">
    <h2 class="error-warning">
      <%= pluralize(@owner.errors.count, "error") %> prohibited
      this owner from being saved:
    </h2>
    <ul>
      <% @owner.errors.full_messages.each do |msg| %>
      <li class="error-message"><%= msg %></li>
      <% end %>
    </ul>
  </div>
<% end %>
```

Add the above code to your form, right below the `form_for` opening tag. With our new and improved form, users will get error messages telling them what fields they need to fix when they make an invalid owner form submission. Awesome!

## Challenges

Now that you've seen how to implement validations and propagate the ActiveRecord errors from your database models to the controller and then pass that into the view, it's your turn!

**Create a form for Pets**

- in the `app/views/owners/show.html`, add a form (with an errors div) for creating a `Pet` using `form_for`.
- in `app/models/owner.rb`, add a validation to your `Pet` model for the `name` attribute, requiring the `presence` to be `true`
- in `app/controllers/pets_controller.rb`, define a `create` method which assigns `@pet` to `Pet.new(name: params[:name])`. Have the `create` method `redirect_to` the pet's route (check `rake routes` to determine the path name).

**Note:** You'll need to associate the pet being created with the Owner you want it to be owned by.

## Stretch Challenge

- Add a breed attribute to the `Pet` model by creating a new migration. Add a validation for `breed` in your `models/Pet.rb` file. Edit your Pet creation form to include the new `breed` attribute.
- Add a email attribute to the `Owner` model by creating a new migration. Add a validation for `email` in your `models/Owner.rb` file. Validate the email using a [Regular Expression](http://edgeguides.rubyonrails.org/active_record_validations.html#format) Edit your Owner creation form to include the new `email` attribute.
