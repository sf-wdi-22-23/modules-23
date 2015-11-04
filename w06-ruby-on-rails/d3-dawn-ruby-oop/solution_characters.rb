class Character
  attr_reader :name, :state

  def initialize(name)
    @name = name
    @state = "ready"
  end

  def exercise
    puts "#{name} works really hard."
    @state = "tired"
  end

  def rest
    puts "#{name} gets a good night's sleep."
    @state = "ready"
  end

  def greet(origin)
    puts "I'm #{name} from #{origin}."
  end
end

tyrion = Character.new("Tyrion Lannister")
tyrion.greet("Casterly Rock")
tyrion.exercise
puts "#{tyrion.name} is #{tyrion.state}."
tyrion.rest
puts "#{tyrion.name} is #{tyrion.state}."


class Superhero < Character
  attr_accessor :charisma, :secret_identity
  @@count = 0

  def initialize(name, charisma, secret_identity)
    # When you invoke super with arguments, Ruby sends a message to the parent of the current object, asking it to invoke a method of the same name as the method invoking super.
    # super sends exactly those arguments.
    super(name)
    @charisma = charisma
    @secret_identity = secret_identity
    @@count = @@count += 1
  end

  def self.count
    @@count
  end

  def greet
    puts "I'm #{secret_identity}. Nice to meet you."
  end

  def persuade(other_character)
    if charisma > other_character.charisma
      puts "#{name} convinced #{other_character.name} to see reason."
    else
      puts "#{name} couldn't change #{other_character.name}'s mind."
    end
  end

  def study_rhetoric
    @charisma += 1
    puts "After intensive study, #{name}'s charisma is now: #{charisma}!"
  end

  def reveal
    puts "I am #{name}. But you know me better as #{secret_identity}."
  end
end

batman = Superhero.new("Batman", 8, "Bruce Wayne")
batman.greet
p "Superhero count #{Superhero.count}"
aquaman = Superhero.new("Aquaman", 7, "Arthur Curry")
aquaman.greet
p "Superhero count #{Superhero.count}"
aquaman.persuade(batman)
aquaman.study_rhetoric
aquaman.study_rhetoric
aquaman.persuade(batman)
batman.reveal
aquaman.reveal
