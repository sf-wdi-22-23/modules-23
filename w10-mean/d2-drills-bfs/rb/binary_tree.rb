##
# This class represents a tree 
# with _exactly_ _two_ _subtrees_
# (one or both of which may be nil).

class BinaryTree
  attr_reader :key

  ##
  # :attr_reader: key
  # read the key of the tree's root
  #
  #  my_tree = BinaryTree.new(5)
  #  my_tree.key
  #  #=> 5

  ##
  # Sets the key of the tree's root node
  # unless intended new key is nil
  # (to remove a node, set the entire node to nil)
  #
  #  my_tree = BinaryTree.new(5)
  #  my_tree.key = 6
  #  #=> 6
  #
  #  my_tree.key = nil
  #  #=> 6

  def key=(new_key)
    if !new_key.nil?
      @key = new_key
    end
    @key
  end

  attr_accessor :left, :right

  ##
  # :attr_accessor: right
  # initializes and reads the +right+ subtree for the instance
  #
  #   my_tree = BinaryTree.new()
  #   #=> #<BinaryTree:0x007ff8a412a710 ... >
  #
  #   my_tree.right
  #   #=> nil
  #
  #   my_tree.right = BinaryTree.new()
  #   #=> #<BinaryTree:0x007ff73e00e690 ...>
  #
  #   my_tree.right
  #   #=> #<BinaryTree:0x007ff73e00e690 ...>

  ##
  # :attr_accessor: left
  # initializes and reads +left+ subtree 
  # for an instance. See #right for usage.

  ##
  # Creates a new binary tree 
  # with the root node key specified by +key+ param 
  # as the @key for the instance
  #
  #  my_tree = BinaryTree.new(8)
  #  #=> #<BinaryTree:0x007ff8a412a710 @key=8> 
  #  my_tree.key
  #  #=> 8

  def initialize(key)
    @key = key
  end
end