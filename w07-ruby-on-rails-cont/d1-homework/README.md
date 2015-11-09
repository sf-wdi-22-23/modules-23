# Auth in Rails Homework

## Workflow & Submission

Tonight you'll look over some code for signup, login, and logout *without necessarily implementing it in an app*.  We'll look at putting everything into a Rails app in class. For tonight, create a `rails-auth-concepts.md` file in your `2x-homework/USERNAME` directory.  As you read this document and look over the code samples, answer the questions below in `rails-auth-concepts.md`. Keep your answers brief (and if you don't know, it's okay to say that!).  When you're finished, `git add .`, `git commit`, `git push origin master`, and submit your homework with a pull request as described in your class's homework repo README.

**Secure Passwords and the User Model**

1. Could you create a user without an `email`? How do you know?
2. How would you call the User model's `password` getter method (is it an instance method or a class method)?
3. Is the User model's `password=` an instance method or a class method? What is it using BCrypt for?
4. Is the User model's `authenticate` an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
5. How would you call the User model's `self.confirm` method (is it an instance method or a class method)? What does it do?
6. Which User model method interacts with the database?

**Login/Logout with Sessions**

1. What object does Rails give us to access session information? What kind of object is it?
2. Why do we have a SessionsController?
3. What does the `sessions#new` controller action do?
4. The `sessions#create` controller action controls login. What does `sessions#create` do if login succeeds? What if it fails?
5. What does `sessions#destroy` do (signup, login, or logout)?  
6. What route(s) would we have to add if we want users to be able to edit their information?

**Current User with Helper Method**

1. Why would we want to keep track of the currently logged in user?
2. What is the `current_user` helper method in `app/controllers/application_controller.rb` doing?

## Authentication Review

**Authentication** is the process of verifying a user's credentials to prove they are who they say they are. This is different than **authorization**, enabling or disabling access to specific resources.

To authenticate our users we typically ask them for a **password** we can associate to their `email`. A password is a very private piece of information that must be kept secret, and so, we strategically obscure in such a way that even *our app* can only confirm a user is authentic -- never uncover what their actual password.

Our library of choice for password obfuscation is `BCrypt`. Rails already adds it to our Gemfile as one of the commented-out optional gems. We'll comment it back in and use it to salt and hash passwords. In Rails, the convention is to push more logic into our models, so authentication setup will happen in the **user model.**

## Creating a Secure Password

To "roll our own" authentication system with BCrypt, we'll add instance methods and class methods to our `User` model. The methods below handle creating a user with a secure password, and authenticating a user:

```ruby
# app/models/user.rb

class User < ActiveRecord::Base
  # BCrypt configuration ~ how hard should it work to obscure things? (12 hard)
  BCrypt::Engine.cost = 12

  # validations 
  validates :email, :password_digest, presence: true

  def authenticate(unencrypted_password)
    secure_password = BCrypt::Password.new(self.password_digest)
    if secure_password == unencrypted_password
      self
    else
      false
    end
  end

  def password=(unencrypted_password)
    @password = unencrypted_password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def password
    @password
  end

  def self.confirm(email_param, password_param)
    user = User.find_by_email(email_param)
    user.authenticate(password_param)
  end

end
```

Rather than rolling our own auth, we can take a more concise, "rails-y" approach with <a href="http://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html" target="_blank">`has_secure_password`</a>, which adds authentication methods for us.  Take a look at the `has_secure_password` <a href="https://github.com/rails/rails/blob/869a90512f36b04914d73cbf58317d953caea7c5/activemodel/lib/active_model/secure_password.rb#L53">source code</a> to see that does a lot of the same things we did!

## Sessions

For a refresher on sessions, read sections 2 - 2.1 of the <a href="http://guides.rubyonrails.org/security.html#what-are-sessions-questionmark" target="_blank">Security Rails Guide</a>.

Some key points:

* sessions keep track of visitor (or user) data

* Rails creates, stores, and loads session automatically

* the session id is passed between the client and server with every request and response

* you can save and retrieve values using `session` hash:

    ```ruby
    session[:user_id] = @current_user.id   # set a value inside session hash
    User.find(session[:user_id])           # get a value from inside session hash (and look up in db)
    ```

## RESTful routes for Signup, Login, and Logout

Even when we are doing authentication, we still want to use RESTful routes. So, we'll call `users#create` for signup (creating a user), and for logging in we'll call `sessions#create` (staring to use our session). We are going to manage login and logout from a `SessionController` -- with `new` (login from), `create` (save user info to the session), and `delete` (remove user info from the session) actions.


```ruby
# config/routes.rb
  resources :users, only: [:new, :create, :destroy]   
  resources :sessions, only: [:new, :create, :destroy]
```

```ruby
#  app/controllers/sessions_controller.rb

class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.confirm(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      redirect_to user_path(user.id)
    else
      redirect_to new_session_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

end

```

## Current User

If you want an `@current_user` method to be available in all your controllers and views, then you'll want to define an application level helper method that looks up the user from the `session[:user_id]` if it exists.

```ruby
#  app/controllers/application_controller.rb

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
  end

  helper_method :current_user  #makes the current_user method available to views
end

```
You can use this `@current_user` object to do a lot

* Authorization - `@current_user.present?` means the user is logged in.
* User Profile - `user_path(@current_user)` will be the path to the current user's profile
