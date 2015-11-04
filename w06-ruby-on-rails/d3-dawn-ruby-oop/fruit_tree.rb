class Lollipop
  attr_reader :diameter

  def initialize(diameter)
    @diameter = diameter
  end
end

class Tree
  attr_accessor :fruits, :dead, :age

  def initialize
    @fruits = []
    @dead = false
    @age = 0
  end

  def bloom
    if age > 3 # or define a bloom_age
      # add a random number of Lollipops to the fruits array
      rand(5..15).times { @fruits << Lollipop.new(rand(1..5)) }
    else
      puts "The tree isn't old enough to bloom yet."
    end
  end

  # use ! to show that method permanently changes something
  def age!
    @dead = true if age > 10
    if dead?
      puts "That which is dead is eternal."
    else
      @age += 1
      puts "The tree is now #{age} years old."
      bloom
    end
  end

  # use ? to indicate boolean response
  def dead?
    @dead
  end
end

lollipop_tree = Tree.new
11.times do
  lollipop_tree.age!
  puts "The tree has this many lollipops: #{lollipop_tree.fruits}".
end
