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
  # Searches through tree for a single node whose key is equal to
  # the +target_key+ param. Looks through nodes in a depth-first order,
  # by following each path as deep as it can before backtracking.
  # Returns nil if no such node is found.
  def depth_first_search(target_key)
    stack = [{:node => self, :visited => false}]
    while !stack.empty?
      # print out key of each entry in stack to help with debugging
      p stack.map { |entry| "#{entry[:node].key}#{entry[:visited] ? '.' : ''}" }

      # peek at the last entry in the stack
      current_entry = stack[stack.length-1]
      # if we've already visited it once, we're done with it
      if current_entry[:visited]
        stack.pop
      else  # we haven't visited this node yet
        current_node = current_entry[:node]
        current_entry[:visited] = true


        # check if this node has the right key (and return if so)
        if current_node.key == target_key
          return current_node
        end
        # add this node's children to the stack
        current_node.children.each do |child|
          stack.push({:node => child, :visited => false})
        end
      end

    end

    # We finished the while loop (went through all nodes)
    # without finding the node we wanted.
    # implicitly return nil
    nil
  end


  ##
  # Searches through all nodes of the tree, spreading 
  # outward from the root. Looks for any node with key equal
  # to the +target_key+ param.
  def breadth_first_search(target_key)
    queue = [self]
    while !queue.empty?
      # print out key of each node in queue to help with debugging
      p queue.map { |node| node.key }

      # remove the first node from the queue
      current = queue.shift
      # check if this node has the right key (and return if so)
      if current.key == target_key
        return current
      end
      # add this node's children to the queue
      queue = queue + current.children
    end

    # We finished the while loop (went through all nodes)
    # without finding the node we wanted.
    # implicitly return nil
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
# ["Q"]
# ["Q.", "R", "S"]
# ["Q.", "R", "S."]
# ["Q.", "R"]
# ["Q.", "R.", "T", "U", "V"]
# ["Q.", "R.", "T", "U", "V."]
# ["Q.", "R.", "T", "U"]
# #<Tree:0x007fa95a96f108 @key="U", @children=[#<Tree:0x007fa95a96f018 @key="W", @children=[]>]>

puts "\n-- expect node W --"
w_result = my_tree.depth_first_search('W')
p w_result
# ["Q"]
# ["Q.", "R", "S"]
# ["Q.", "R", "S."]
# ["Q.", "R"]
# ["Q.", "R.", "T", "U", "V"]
# ["Q.", "R.", "T", "U", "V."]
# ["Q.", "R.", "T", "U"]
# ["Q.", "R.", "T", "U.", "W"]
# #<Tree:0x007fa95a96f018 @key="W", @children=[]>


puts "\n-- expect nil -- "
z_result = my_tree.depth_first_search('Z')
p z_result
# ["Q"]
# ["Q.", "R", "S"]
# ["Q.", "R", "S."]
# ["Q.", "R"]
# ["Q.", "R.", "T", "U", "V"]
# ["Q.", "R.", "T", "U", "V."]
# ["Q.", "R.", "T", "U"]
# ["Q.", "R.", "T", "U.", "W"]
# ["Q.", "R.", "T", "U.", "W."]
# ["Q.", "R.", "T", "U."]
# ["Q.", "R.", "T"]
# ["Q.", "R.", "T."]
# ["Q.", "R."]
# ["Q."]
# nil

