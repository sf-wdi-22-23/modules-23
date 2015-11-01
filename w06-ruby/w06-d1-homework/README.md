# Ruby Koans

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

Example of completing a koan:

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

  def test_accessing_hashes_with_fetch
    hash = { :one => "uno" }
    assert_equal "uno", hash.fetch(:one)
    assert_raise(KeyError) do
      hash.fetch(:doesnt_exist)
    end

    # THINK ABOUT IT:
    #
    # Why might you want to use #fetch instead of #[] when accessing hash keys?
    # So that you raise an error instead of getting nil.
  end

  def test_changing_hashes
    hash = { :one => "uno", :two => "dos" }
    hash[:one] = "eins"

    expected = { :one => "eins", :two => "dos" }
    assert_equal expected, hash

    # Bonus Question: Why was "expected" broken out into a variable
    # rather than used as a literal?
  end

  def test_hash_is_unordered
    hash1 = { :one => "uno", :two => "dos" }
    hash2 = { :two => "dos", :one => "uno" }
    # hashes are unordered
    assert_equal true, hash1 == hash2
  end

  def test_hash_keys
    hash = { :one => "uno", :two => "dos" }
    assert_equal 2, hash.keys.size
    assert_equal true, hash.keys.include?(:one)
    assert_equal true, hash.keys.include?(:two)
    assert_equal Array, hash.keys.class
  end

  def test_hash_values
    hash = { :one => "uno", :two => "dos" }
    assert_equal 2, hash.values.size
    assert_equal true, hash.values.include?("uno")
    assert_equal true, hash.values.include?("dos")
    assert_equal Array, hash.values.class
  end

  def test_combining_hashes
    hash = { "jim" => 53, "amy" => 20, "dan" => 23 }
    new_hash = hash.merge({ "jim" => 54, "jenny" => 26 })
    assert_equal true, hash != new_hash
    # Note how "jim", which is a duplicate key, is overridden in the merge
    # new_hash => {"jim"=>54, "amy"=>20, "dan"=>23, "jenny"=>26}

    expected = { "jim" => 53, "amy" => 20, "dan" => 23, "jenny" => 26 }
    assert_equal false, expected == new_hash
    # expected => { "jim" => 53, "amy" => 20, "dan" => 23, "jenny" => 26 }
    # new_hash => {"jim"=>54, "amy"=>20, "dan"=>23, "jenny"=>26}
  end

  def test_default_value
    hash1 = Hash.new
    hash1[:one] = 1

    assert_equal 1, hash1[:one]
    assert_equal nil, hash1[:two]

    hash2 = Hash.new("dos")
    # setting a default value for any key in the hash
    hash2[:one] = 1

    assert_equal 1, hash2[:one]
    assert_equal "dos", hash2[:two]
  end

  def test_default_value_is_the_same_object
    hash = Hash.new([])

    hash[:one] << "uno"
    hash[:two] << "dos"
    # p hash, hash[:one], hash[:two], hash[:three]
    # {}, ["uno", "dos"], ["uno", "dos"], ["uno", "dos"]
    assert_equal ["uno", "dos"], hash[:one]
    assert_equal ["uno", "dos"], hash[:two]
    assert_equal ["uno", "dos"], hash[:three]

    # The object used for default value of a hash is the same object
    # So all of the hash's keys are referencing the same object
    assert_equal true, hash[:one].object_id == hash[:two].object_id
  end

  def test_default_value_with_block
    # using a block to assign a default value to each key
    # gives each key unique objects as their values
    hash = Hash.new {|hash, key| hash[key] = [] }

    hash[:one] << "uno"
    hash[:two] << "dos"

    assert_equal ["uno"], hash[:one]
    assert_equal ["dos"], hash[:two]
    assert_equal [], hash[:three]
    # copied from above to show difference
    assert_equal false, hash[:one].object_id == hash[:two].object_id
  end
end
```

Base Exercises:

`cd` into your new `koans` directory and run through the following exercises using `ruby <file_name.rb>`.

- About Asserts - `about_asserts.rb`
- About Arrays - `about_arrays.rb`
- About Nil - `about_nil.rb`
- About Objects - `about_objects.rb`
- About True and False - `about_true_and_false.rb`
- About Strings - `about_strings.rb`

Stretch Exercises:

- About Hashes - `about_hashes.rb`
- About Blocks - `about_blocks.rb`
- About Variable Scope - `about_variable_scope.rb`
- About Iteration - `about_iteration.rb`
