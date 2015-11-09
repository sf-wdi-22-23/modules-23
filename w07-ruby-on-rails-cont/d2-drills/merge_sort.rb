def merge_sort(array)
  return array if array.length <= 1

  middle = array.length / 2
  left = merge_sort(array[0...middle])
  right = merge_sort(array[middle..-1])
  merge(left, right)
end

def merge(left, right)
  result = []
  until left.empty? || right.empty?
    if left.first <= right.first
      result << left.shift
    else
      result << right.shift
    end
    # result << (left.first<=right.first ? left.shift : right.shift)
  end
  result + left + right
end

ary = [7,6,5,9,8,4,3,1,2,0]
p merge_sort(ary)
wdi_22_23  = ["Angelo", "Dani", "Jennifer", "Mikey", "Sam", "Laura E.", "Chris", "Margaux", "Uriel", "Josh", "Francesca", "Racha", "Brian", "Jamey", "Laura b.", "Riley", "Matt", "Ling", "Annie", "John", "Meredith", "Breana", "Michael", "Brendan", "Vince", "Emily A.", "Jeehye", "Emily K.", "Jorge", "Eric", "Natasha", "Scot", "Zain", "Isom", "Noel", "Roy"]
p merge_sort(wdi_22_23)
