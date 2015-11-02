# Ruby Koans

## About Ruby Koans

Go to the Ruby Koans [website](http://rubykoans.com/) and click the link to download the koans. Open the zip file and save it in your `dev` directory. `cd` into the `koans` directory and run `ls`. Wow, that's a lot of files!

Each file is a self-contained exercise that will teach you a bit about Ruby, using test driven development. Essentially you will be given code that has something wrong with it, as well as instructions about what needs to be fixed. Then you make the necessary changes for the tests to pass.

For example, running this file in the Terminal
```bash
:> ruby about_hashes.rb
```
will output this:
```ruby
AboutHashes#test_creating_hashes has damaged your karma.

The Master says:
  You have not yet reached enlightenment.

The answers you seek...
  Expected "FILL ME IN" to equal Hash

Please meditate on the following code:
  about_hashes.rb:6:in `test_creating_hashes'

mountains are merely mountains
your path thus far [X_________________________________________________] 0/12
```

While it may look verbose, all this output is doing is explaining why the code isn't running and stating which line (and which method, if applicable) to fix. Each time fix that is made will provide a new prompt when the file is run again.

Each koan file has some blanks you should fill or lines you should change in to "reach enlightenment" or pass all of the code's tests.  Read the comments in a koan file one by one to see what each part should do. If you're unsure what one of the tests is asking for, try a few things, ask in Slack, and skip it if you need to instead of getting stuck. 

The koan files have some structure we haven't seen yet. Methods are defined by the blocks that start with `def` and end with `end` -- these reserved words are like the curly brackets of Ruby methods. Also, the `class` line in each file is a way of organizing the code and grouping the methods together.  


Example of completing parts of a koan (from `about_hashes.rb`):

```ruby
require File.expand_path(File.dirname(__FILE__) + '/neo')

class AboutHashes < Neo::Koan
  def test_creating_hashes
    empty_hash = Hash.new
    assert_equal Hash, empty_hash.class
    assert_equal({}, empty_hash)
    assert_equal 0, empty_hash.size
  end

  def test_hash_literals
    hash = { :one => "uno", :two => "dos" }
    assert_equal 2, hash.size
  end

  def test_accessing_hashes
    hash = { :one => "uno", :two => "dos" }
    assert_equal "uno", hash[:one]
    assert_equal "dos", hash[:two]
    assert_equal nil, hash[:doesnt_exist]
  end
end
```

## Reference

Reference the reading on Ruby methods for discussion of how the koans' methods are structured. 

## Exercises

Base Exercises:

`cd` into your new `koans` directory and run through the following exercises using `ruby <file_name.rb>`.

- About Asserts - `about_asserts.rb`
- About Arrays - `about_arrays.rb`
- About Nil - `about_nil.rb`
- About True and False - `about_true_and_false.rb`
- About Strings - `about_strings.rb`
- About Methods - `about_methods.rb` (through `method_without_explicit_return`)

Stretch Exercises:

- About Hashes - `about_hashes.rb`
- About Blocks - `about_blocks.rb`
- About Objects - `about_objects.rb`
- About Variable Scope - `about_variable_scope.rb`
- About Iteration - `about_iteration.rb`
