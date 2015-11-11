# STOP! DO NOT LOOK AT THIS YET!!!!!

# SERIOUSLY!!!! WE'RE GOING TO GO OVER THE SOLUTION IN CLASS. I WANT YOU TO TRY REALLY HARD TO FIGURE AS MUCH OF THIS OUT AS YOU CAN ON YOUR OWN!!!!

# THIS IS FOR YOU TO REFERENCE LATER TODAY AND BEYOND

# THANK YOU SO MUCH

















INT_ENGLISH_MAPPER = {
  90 => "ninety",
  80 => "eighty",
  70 => "seventy",
  60 => "sixty",
  50 => "fifty",
  40 => "forty",
  30 => "thirty",
  20 => "twenty",
  19 => "nineteen",
  18 => "eighteen",
  17 => "seventeen",
  16 => "sixteen",
  15 => "fifteen",
  14 => "fourteen",
  13 => "thirteen",
  12 => "twelve",
  11 => "eleven",
  10 => "ten",
   9 => "nine",
   8 => "eight",
   7 => "seven",
   6 => "six",
   5 => "five",
   4 => "four",
   3 => "three",
   2 => "two",
   1 => "one",
   0 => ""
}

def in_words(int)
  if int <= 20
    INT_ENGLISH_MAPPER[int]
  elsif int < 100
    tens, ones = (int/10)*10, int % 10
    "#{INT_ENGLISH_MAPPER[tens]} #{in_words(ones)}"
  elsif int < 1000
    hundreds, tens = (int/100), int % 100
    "#{INT_ENGLISH_MAPPER[hundreds]} hundred #{in_words(tens)}".strip
  else
    # Woah cowboy, this solution is only valid up into the thousands!  Can you solve the rest on your own?
    thousands, hundreds = (int/1000), int % 1000
    "#{INT_ENGLISH_MAPPER[thousands]} thousand #{in_words(hundreds)}".strip
  end
end

puts in_words(0)

# Use the RSPEC, but here's a nice testing script in vanilla Ruby. This is not practical for large applications, but is a perfectly good way to test out little scripts and stand alone methods.

puts "My totally sweet testing script:"
puts ""
puts "input | expected                              | actual"
puts "------|---------------------------------------|------------------"
puts "4     | four                                  | #{in_words(4)}"
puts "9     | nine                                  | #{in_words(9)}"
puts "13    | thirteen                              | #{in_words(13)}"
puts "19    | nineteen                              | #{in_words(19)}"
puts "29    | twenty nine                           | #{in_words(29)}"
puts "1453  | one thousand four hundred fifty three | #{in_words(1453)}"
puts "1646  | one thousand six hundred forty six    | #{in_words(1646)}"
