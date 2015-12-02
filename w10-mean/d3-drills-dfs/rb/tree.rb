##
# This class represents a tree
# where each node has an array of children.

class Tree

  ##
  # reads the key of the tree's root
  attr_reader :key

  ## 
  # sets the key of the tree's root node
  # unless intended new key is nil
  # (to remove a node, set the entire node to nil)
  def key=(new_key)
    if !new_key.nil?
      @key = new_key
    end
    @key
  end

  ##
  # sets or reads the array of children for this instance
  attr_accessor :children


  ##
  # Creates a new tree with the root node key specified by 
  # the +key+ param as the @key for the instance
  def initialize(key)
    @key = key
    @children = []
  end

  ##
  # Searches through all nodes of the tree, spreading 
  # outward from the root. Looks for any node with key equal
  # to the +target_key+ param. Returns nil if no such node is found.
  def breadth_first_search(target_key)
    nil
  end

  ##
  # Searches through tree for a single node whose key is equal to
  # the +target_key+ param. Looks through nodes in a depth-first order,
  # by following each path as deep as it can before backtracking.
  # Returns nil if no such node is found.
  def depth_first_search(target_key)
    nil
  end

end


my_tree = Tree.new('Q')
r_node = Tree.new('R')
s_node = Tree.new('S')
t_node = Tree.new('T')
u_node = Tree.new('U')
v_node = Tree.new('V')
w_node = Tree.new('W')

my_tree.children << r_node
my_tree.children << s_node
r_node.children << t_node
r_node.children << u_node
r_node.children << v_node
u_node.children << w_node

#          T 
#        /
#     R  -- U -- W
#   /   \
# Q        V
#   \
#     S 

puts "\n-- expect node U --"
u_result = my_tree.depth_first_search('U')
p u_result


puts "\n-- expect node W --"
w_result = my_tree.depth_first_search('W')
p w_result


puts "\n-- expect nil -- "
z_result = my_tree.depth_first_search('Z')
p z_result


