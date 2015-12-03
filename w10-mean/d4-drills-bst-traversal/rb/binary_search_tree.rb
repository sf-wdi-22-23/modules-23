require_relative "binary_tree.rb"

# This class represents a *sorted* tree 
# with _exactly_ _two_ _subtrees_
# (one or both of which may be nil). More info at
# https://en.wikipedia.org/wiki/Binary_search_tree

class BinarySearchTree < BinaryTree

  # In-order traversal
  # convert the binary search tree to a sorted array
  def to_arr
  end

  # Inserts a new node with the given new_key as its key.
  # The new key will be placed in either the #left
  # or #right subtrees, if new key is
  # less than or greater than #key respectively.
  def insert(new_key)
    if new_key < @key
      if @left.nil?
        @left = BinarySearchTree.new(new_key)
      else
        @left.insert(new_key)
      end
    else
      if @right.nil?
        @right = BinarySearchTree.new(new_key)
      else
        @right.insert(new_key)
      end
    end
  end


  # Check if key is in tree.
  # Returns true if in the tree 
  # and false if not.

  def has_key?(key)
    current = self
    while !current.nil? 
      if current.key > key
        current = current.left
      elsif current.key < key
        current = current.right
      else 
        return true
      end
    end
    false
  end

end


my_tree = BinarySearchTree.new(50)
my_tree.insert(25)
my_tree.insert(75)
my_tree.insert(12)
my_tree.insert(37)
my_tree.insert(63)
my_tree.insert(87)

puts "sorted: "
p my_tree.to_arr
