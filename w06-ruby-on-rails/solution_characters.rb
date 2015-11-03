class Character
  attr_reader :name, :state

  def initialize(name)
    @name = name
    @state = "ready"
  end

  def exercise
    puts "#{@name} works really hard."
    @state = "tired"
  end

  def rest
    puts "#{@name} gets a good night's sleep."
    @state = "ready"
  end

  def greet(origin)
    puts "I'm #{@name} from #{origin}."
  end
end

tyrion = Character.new("Tyrion Lannister")
tyrion.greet("Casterly Rock")
tyrion.exercise
puts "#{tyrion.name} is #{tyrion.state}."
tyrion.rest
puts "#{tyrion.name} is #{tyrion.state}."


class Superhero < Character
  attr_accessor :name, :species, :charisma, :secret_identity
  @@count = 0

  def initialize(name, species, charisma, secret_identity)
    @name = name
    @species = species || "A boring, generic human."
    @charisma = charisma || 0
    @secret_identity = secret_identity
    @alignment = "good"
    @@count = @@count += 1
  end

  def self.count
    @@count
  end

  def greet
    puts "I'm #{@secret_identity}. Nice to meet you."
  end

  def persuade(other_character)
    if @charisma > other_character.charisma
      puts "#{name} convinced #{other_character.name} to see reason."
    else
      puts "#{name} couldn't change #{other_character.name}'s mind."
    end
  end

  def study_rhetoric
    @charisma += 1
    puts "After intensive study, #{name}'s charisma is now: #{self.charisma}!"
  end

  def reveal
    puts "I am #{name}. But you know me better as #{secret_identity}."
  end
end

batman = Superhero.new("Batman", "Human", 8, "Bruce Wayne")
batman.greet
p "Now there is #{Superhero.count} superheroes!"
aquaman = Superhero.new("Aquaman", "Atlantean", 7, "Arthur Curry")
aquaman.greet
p "Now there are #{Superhero.count} superheroes!"
aquaman.persuade(batman)
aquaman.study_rhetoric
aquaman.study_rhetoric
aquaman.persuade(batman)
batman.reveal
aquaman.reveal
