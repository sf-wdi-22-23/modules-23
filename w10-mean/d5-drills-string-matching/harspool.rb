#Basic Harspool algorithm simply jumps forward by
# pattern_length if char not in pattern is found
# function accepts a string and a pattern and returns the index in the string where
# the pattern first occurs, or "not found"

class Harspool
  def initialize(options)
    @string         = options[:string] || ""
    @pattern        = options[:pattern] || ""
    @pattern_length = @pattern.length
    @letters_table = letters_table
  end

  # Generates hash table with keys as all chars in pattern, and values as true
  def letters_table
    table = {}
    @pattern.each_char { |char| table[char] = true }
    table
  end

  def iterate
    string_index = @pattern_length - 1
    while string_index < @string.length
      match_count = 0
      loop do
        # if a non-match is found, then break.
        break if @string[string_index - match_count] != @pattern[(@pattern_length - 1 - match_count)]
        # if it wasn't a non-match, it must be a match!
        match_count += 1
        # if that match_count reaches the lenght of the pattern, you found the pattern!
        # return the index in string where the pattern begins
        return string_index - (@pattern_length - 1) if match_count == @pattern_length
      end
      if @letters_table[@string[string_index]]
        string_index += 1
      else
        string_index += @pattern_length
      end
    end
    return "not found"
  end
end

# tests
puts " "
puts "Brute Force Right to Left Test:"
puts " "

# match
test_string     = "A gentleman is one who never hurts anyone's feelings unintentionally.
-Oscar Wilde"
test_pattern = "one who"
should_be    = 15
search = Harspool.new({string: test_string, pattern: test_pattern})
result = search.iterate

puts "Pattern at index #{result} "
raise "This is wrong" unless result == should_be

# no match
test_string2     = "A gentleman is one who never hurts anyone's feelings unintentionally.
Oscar Wilde"
test_pattern2 = "potato"
should_be2    = "not found"

search2 = Harspool.new({string: test_string2, pattern: test_pattern2})
result2 = search2.iterate

puts "Pattern at index #{result2} "

raise "This is wrong" unless result2 == should_be2
