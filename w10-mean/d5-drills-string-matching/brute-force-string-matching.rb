# Brute Force
# Takes a string and a pattern and returns the index of the pattern in the string,
# or returns "not found"

def brute_search string, pattern
  pattern_length = pattern.length
  for string_index in (0... string.length)
    match_count = 0
    loop do
      # if a non-match is found, then break.
      break if string[string_index + match_count] != pattern[match_count]
      # if it wasn't a non-match, it must be a match!
      match_count += 1
      # if match_count reaches the length of the pattern, you've found your pattern!
      # return the index in string where the pattern begins
      return string_index if match_count == pattern_length
    end
  end
  return "not found"
end

# tests
puts " "
puts "Brute Force Right to Left Test:"
puts " "

# match
test_string     = "let them eat cake"
test_pattern = "cake"
should_be    = 13
result       = brute_search test_string, test_pattern

puts "Pattern at index #{result} "
raise "This is wrong" unless result == should_be

# no match
test_string2     = "let them eat cake"
test_pattern2 = "potato"
should_be2    = "not found"
result2       = brute_search test_string2, test_pattern2

puts "Pattern at index #{result2} "

raise "This is wrong" unless result2 == should_be2
