# The Rails Checklist
## Common Gotchas: So You Don't Get Derailed

#### 1. Did you bundle?
Make sure you gems are all up to date, run:

```bash
bundle
# same as
bundle install
# or to update your dependencies to their latest version
bundle update
```

#### 2. Is your database running?
We are using `postgresql` and [Postgress.app](postgresapp.com).

* Do you see an elephant icon in your toolbar? Make sure to launch the Postgres Application.

#### 3. Did you create your database?

``` bash
rake db:create
```

#### 4. Did you run your migrations?
Make sure you've run all your migrations (`db/migrate`) so that `schema.rb` is up to date.

``` bash
rake db:migrate
```

#### 5. Did you seed your database?
You may be dead in the water until you populate your database. If you have a `seed.rb` file, make sure to run it:

``` bash
rake db:seed
```

#### 6. Is the server running?
Make sure your server is running in the background:
```bash
rails s
#or
rails server
```

#### 7. Does that route exist?
If you're hitting and endpoint and getting an error, do a quick sanity check and verify that route exists:
```bash
rake routes
```

#### 8. Does that Active Record query actually work?
If you're having issues querying your database, do a sanity check in your rails console to see if your query actually returns anything:
```bash
rails console
# or
rails c
> Student.first #=> <#Student134oiu3 @name="bob" @id=1>
```

>***A note on `p` vs `puts`:***<br>
`puts` calls `to_s` on the object and generally returns a readable version of the object. `p` is equivalent to `puts`, but with the inspect method called instead of the `to_s`. So with `p` we will see the difference between "2" and 2. This method is better for debugging.
