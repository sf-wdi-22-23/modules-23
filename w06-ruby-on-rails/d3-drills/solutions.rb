# input: target value, sorted array of integers

# output:
# return true or index of target if target is found
# return false if target is not present

# psuedocode
# find the low, mid, and high index of the given array
# return the mid index if the target is equal to the index of the mid array
#=> Start looping while the low index is less than the high index
# if the target is greater than value of the array's mid index
# => set the low index to the mid index
# => set the mid index to the sum of the high index minus the low index divided by two
# elsif
# => set the high index to the mid index
# => set the mid index to the sum of the high index minus the low index divided by two

def binary_search_iterative(array, target)
# declare variables for low and high positions
low_index = 0
high_index = array.length - 1
mid_index = (high_index + low_index) / 2

# while the low is less than the high
while low_index <= high_index do

    return mid_index if target == array[mid_index]

    puts "#{low_index} #{mid_index} #{high_index}"
    sleep(1.0)

    if target > array[mid_index]
      # move lower bound up to mid, recalculate new mid
      low_index = mid_index
      # set the high halfway between
      mid_index = (low_index + high_index) / 2
    elsif target < array[mid_index]
      # move upper bound to mid, recalculate new mid
      high_index = mid_index
      mid_index = (low_index + high_index) / 2
    end
  end
end

# search for valid target below mid
p binary_search_iterative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
#=> expect to return index 2

def binary_search_recursive(array, target, low = 0, high = array.length - 1)
  return "#{target} value could not be found" if  low > high
  mid = (low + high) / 2
  return mid if array[mid] == target
  p "#{low} #{mid} #{high}"
  if array[mid] > target
    high = mid - 1
  else
    low = mid + 1
  end
  binary_search_recursive(array, target, low, high)
end

target = 23
numbers = [4, 8, 15, 16, 23, 42]

p binary_search_recursive(numbers, target)
#=> 4


sample_array = [1, 2, 5, 6, 8, 10, 22, 33, 37]
p binary_search_iterative(sample_array, 2)
p binary_search_recursive(sample_array, 2)

even_array = [1, 2, 5, 6, 8, 10, 22, 33, 37, 40]
p binary_search_iterative(even_array, 37)
p binary_search_recursive(even_array, 37)
