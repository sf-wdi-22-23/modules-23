##
# This class represents a tree 
# with _exactly_ _two_ _subtrees_
# (one or both of which may be nil).

class BinaryTree
  attr_accessor :key, :left, :right

  ##
  # Creates a new binary tree 
  # with the root node key specified by key param 
  # as the @key for the instance
  def initialize(key)
    @key = key
    @left = nil
    @right = nil
  end
end