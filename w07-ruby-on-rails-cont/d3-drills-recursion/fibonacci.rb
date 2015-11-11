# Input: integer 'n'
# Output: nth Fibonacci number

# Steps:
# Start with array of 0 and 1.
# Iterate through array
# =>  Push the sum of the last and second to last elements into the array

require 'benchmark'

def fibonacci_iterative(n)
  # start with 0 and 1
  fib_numbers = [0,1]
  # iterate equal amount of times as given Fibonacci number you are seeking
  n.times do
    # add the sum of the last and second-to-last elements of the fib_numbers array to the fib_numbers array
    p fib_numbers << (fib_numbers[-1] + fib_numbers[-2])
  end
  # when done iterating, return the nth Fibonnaci number
  p fib_numbers[n]
end

def fibonacci_recursive(n)
# BASE CASE -> break, return n if n is 0 or 1
  return n if n <= 1
# recursively call the function for n - 1 and for n - 2 and sum the results
  p fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
end

fibonacci_iterative(10)
fibonacci_recursive(10)

# 0 if n = 0
# 1 if n = 1
# fib(n-1) + fib(n-2) otherwise
# 0,1,1,2,3,5,8,13,21

## Runtime Tests
# NOTE: when running these benchmarks comment out all puts and p
#   scrolling those down your terminal is far more intensive to the CPU
#   than the algorithm itself. :-)


# puts "fibonacci iterative benchmark results:"
# puts Benchmark.measure { 1000.times do fibonacci_iterative(20) end }

# result = Benchmark.measure do
  # 1000.times do
    # fibonacci_recursive(20)
  # end
# end
# puts "fibonacci recursive benchmark results:"
# puts result
