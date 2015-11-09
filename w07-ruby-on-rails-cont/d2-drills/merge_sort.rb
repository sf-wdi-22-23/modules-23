def merge_sort(arr)
  # if the array is length 1 or 0
  if arr.length < 2
    # return the array
    return arr
  end

  # find the array's midpoint
  middle = arr.length / 2
  # create a left subarray
  left = arr[0...middle]
  # create a right subarray
  right = arr[middle..-1]
  p middle, left, right
  sleep(1.0)

  # call merge on a recursively called left half and right half
  return merge(merge_sort(left), merge_sort(right))
end

def merge(left, right)
  result = []

# while both arrays have elements in them, zip them together
  while left.length && right.length do
      if left[0] <= right[0]
    # if the left array first element is less than the right array first element, push to result
        result << left.shift
      else
    # else push the right array first element to result
        result << right.shift
      end
  end

  # if left is the only array with elements, push them all in
  while left.length
    result << left.shift
  end

  # if right is the only array with elmeents, push them all in
  while right.length
    result << right.shift
  end

  result
end


p merge_sort([2, 8, 5, 7, 5, 4, 3])
