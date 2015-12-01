require_relative "binary_tree.rb"
##
# This class represents a *sorted*
# tree with _exactly_ _two_ _subtrees_
# (one or both of which may be nil).
# Follow the link for more info on
# {Sorted Binary Search Trees}[https://en.wikipedia.org/wiki/Binary_search_tree]

class BinarySearchTree < BinaryTree


  ##
  # will determine where to place a
  # new +key+: @left, or @right. 
  #
  # The new key will be placed in either the +#left+
  # or +#right+ subtrees, if new +key+ is
  # less than or greater than +#key+ respectively.
  #
  #   my_tree = BinarySearchTree.new(5)
  #   #=> #<BinarySearchTree:0x007ff73e014f90 @key=5>
  #   
  #   # for a new key less than 5 it is inserted left
  #   my_tree.insert(4)
  #   #=> #<BinarySearchTree:0x007ff73e014f90 @key=5 @left=#<BinarySearchTree:0x007ff73c06a2f8 @key=4>>
  #
  #   # for a new +key greater than or equal to 5 it is inserted to right
  #   my_tree.insert(6)
  #   #=> #<BinarySearchTree:0x007ff73e014f90 @key=5 @left=... @right=#<BinarySearchTree:0x007ff73c06a2f8 @key=6>>

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

  ##
  # A method to check if +key+ is in tree
  # that returns +true+ if in the tree 
  # and +false+ if not.

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
