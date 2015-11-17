# Deploying to Heroku with Rails & Postgres

## Preparing your Rails App for Deploy

#### 1. Make sure your app is a git repo

We deploy projects to Heorku by pushing the code to our `heroku` remote via git. So we must make sure our Rails app is a git repo. Additionally, make sure you created your git repo in the root folder of your Rails app (the one that was created when you ran `rails new`) and not a sub-folder or a parent folder you created your rails app inside of.

If you haven't already, add and commit your most recent changes:

```
$ git status
$ git add .
$ git commit -m "committing things"
```

#### 2. Update your Gemfile

Make sure you're using the `pg` gem:

```ruby
#
# Gemfile
#
gem 'pg'
```

Add the `rails_12factor` gem to your `Gemfile` in group production:

```ruby
#
# Gemfile
#
group :production do
  gem 'rails_12factor'
end
```

Run this command in your terminal:

```
$ bundle install --without production
```

Add and commit your `Gemfile` changes:

  * `$ git add .`
  * `$ git commit -m "preparing for deploy"`

## Deploying to Heroku

#### 1. Create a new Heroku app

In your terminal, run `$ heroku create` or `$ heroku create my_app_name`. The second option allows you to customize your domain extension, whereas the first option will generate an extension for you.

You should see something like this:

```
$ heroku create
Creating glacial-shore-3617... done, stack is cedar-14
https://glacial-shore-3617.herokuapp.com/ | https://git.heroku.com/glacial-shore-3617.git
Git remote heroku added
```

Double-check you have a new remote:

```
$ git remote -v
heroku  https://git.heroku.com/glacial-shore-3617.git (fetch)
heroku  https://git.heroku.com/glacial-shore-3617.git (push)
```

#### 2. Push your code to Heroku

Run `$ git push heroku master` in the terminal

Your terminal output should look something like this (but a little longer):

```
git push heroku master
Initializing repository, done.
Counting objects: 64, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (53/53), done.
Writing objects: 100% (64/64), 14.57 KiB | 0 bytes/s, done.
Total 64 (delta 5), reused 0 (delta 0)

-----> Ruby app detected
-----> Compiling Ruby/Rails
-----> Using Ruby version: ruby-2.0.0
-----> Installing dependencies using 1.5.2
       New app detected loading default bundler cache
       Running: bundle install --without development:test --path vendor/bundle --binstubs vendor/bundle/bin -j4 --deployment
       Fetching gem metadata from https://rubygems.org/..........
       Fetching additional metadata from https://rubygems.org/..
       Using i18n (0.6.9)
       .
       .
       .
       Installing sass-rails (4.0.3)
       Installing rails (4.0.4)
       Your bundle is complete!
       Gems in the groups development and test were not installed.
       It was installed into ./vendor/bundle
       Bundle completed (11.82s)
       Cleaning up the bundler cache.
-----> Writing config/database.yml to read from DATABASE_URL
-----> Preparing app for Rails asset pipeline
       Running: rake assets:precompile
       I, [2014-05-02T18:02:09.672047 #732]  INFO -- : Writing /tmp/build_625a98e6-1b9e-4e57-ba48-8f9cd7bf7d18/public/assets/application-c8d048bf2b32f85ef4807549fa44b21b.js
       I, [2014-05-02T18:02:09.694428 #732]  INFO -- : Writing /tmp/build_625a98e6-1b9e-4e57-ba48-8f9cd7bf7d18/public/assets/application-d0b54dd563966c42aad5fd85b1c1f713.css
       Asset precompilation completed (6.52s)
       Cleaning assets
       Running: rake assets:clean
-----> WARNINGS:
       Include 'rails_12factor' gem to enable all platform features
       See https://devcenter.heroku.com/articles/rails-integration-gems for more information.

-----> Compressing... done, 21.4MB
-----> Launching... done, v6
       http://thingsthingsthings.herokuapp.com/ deployed to Heroku

To git@heroku.com:things.git
 * [new branch]      master -> master
```

**IF YOU GET AN ERROR**

This is a common point for people to run into errors. The most common error that happens here is your assets failing to compile.

**POSSIBLE SOLUTION**

* Run `$ rake assets:precompile`
* Add and commit new changes
  * `$ git add .`
  * `$ git commit -m "precompiling assets"`
* Try pushing to Heroku again
  * `$ git push heroku master`

#### 3. Migrate your production database

Our deployed app has a separate database from our development environment. That means we need to separately run our migrations.

```
$ heroku run rake db:migrate
```

#### 4. Open your deployed app

Open your deployed app in the browser:

```
$ heroku open
```

**DEBUGGING**

Hopefully your app works on Heroku, however, you may just see a sad page that looks like this...

![Sad Heroku](http://media.tumblr.com/tumblr_m8270hYTFn1qcmzd4.png)

One tool we have for debugging further problems is our Heroku logs.

Run `$ heroku logs` in the terminal.

Scan all of the logs for error messages. If you see obvious error messages, goole what they mean. If you still can't find a solution, now would be a good time to ask an instructor for help.

## Add your API Keys

If you have not added your API keys locally, first read these instructions: https://gist.github.com/jackieiscool/abe49e71e797a9b9ba7a

#### 1. Set environment variables on Heroku

*Change MY_API_KEY to your variable name and your actual key*

```
$ heroku config:set MY_API_KEY=0932nv8d17vhd72o2e8cfv82csd9n1dcd98
```

#### 2. Check that it worked

```
$ heroku config
=> MY_API_KEY: 0932nv8d17vhd72o2e8cfv82csd9n1dcd98
```

#### 3. If you made a mistake and need to unset an API key

```
$ heroku config:unset MY_API_KEY
Unsetting MY_API_KEY and restarting myapp... done, v13
```

##Heroku Doc References

Reference these guides from the heroku documentation.

Basic Heroku Rails, PostgreSQL setup:

*  <a href="https://devcenter.heroku.com/articles/rails4" target="_blank">Rails 4 on Heroku</a>
*  <a href="https://devcenter.heroku.com/articles/heroku-postgresql" target="_blank">Heroku Postgres</a>
*  <a href="https://devcenter.heroku.com/articles/rake" target="_blank">Running Rake Commands</a>



Adding Collaborators on Heroku:

*  <a href="https://devcenter.heroku.com/articles/sharing" target="_blank">Collaborating with Other Developers on Your App</a>

Adding a Remote on GitHub:

Your new Heroku collaborators should add the project's heroku repo as a remote on GitHub.

*  <a href="https://help.github.com/articles/adding-a-remote/" target="_blank">Adding a remote</a>
