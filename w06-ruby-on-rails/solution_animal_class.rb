class Animal
  attr_accessor :state
  def initialize(kind)
    @type = kind
    @state = "awake"
  end

  def eat (food)
    puts "Yum! I am eating #{food}!"
  end

  def sleep
    @state = "asleep"
  end

  def wake
    @state = "awake"
  end
end

bird = Animal.new("Parrot")
bird.eat("Crackers")
bird.sleep

puts bird.state

class Person < Animal
  @@count = 0
  attr_accessor :age, :gender, :name
  def initialize(age, gender, name)
    @type = "person"
    @age = age
    @gender = gender
    @name = name
    @@count = @@count + 1
  end

  def self.count
    @@count
  end

  def eat(food)
    response = if food == "person"
      "Sir! I am NOT a cannibal!"
    else
      "Yum! I am eating #{food}!"
    end
    puts response
  end

  def greet
    puts "Hi, I'm #{@name}. I'm a #{@type}, and I'm #{@age} years old."
  end
end

justin = Person.new(33, "male", "Justin")
jimmy = Person.new(27, "male", "Jimmy")
justin.eat('dogs')
justin.greet
jimmy.eat('person')
puts Person.count
