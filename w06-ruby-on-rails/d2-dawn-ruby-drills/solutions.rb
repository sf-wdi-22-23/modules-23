#Install the httparty gem ```$ gem install httparty```.

#Now require it in a new ruby script file, and use it to call an album search on the word "White" to the spotify API.
require 'httparty'

response = HTTParty.get('https://api.spotify.com/v1/search?q=White&type=album')
p response

#Can you require both ```httparty``` and ```awesome_print``` to have the output look nice? (remember just require awesome_print and then use ```ap``` instead of ```p```)
require 'httparty'
require 'awesome_print'

response = HTTParty.get('https://api.spotify.com/v1/search?q=White&type=album')
ap JSON.parse(response.body)

#In the same file, can you write a loop that returns an array of the album names from your search?
require 'httparty'
require 'awesome_print'

response = HTTParty.get('https://api.spotify.com/v1/search?q=White&type=album')
body =  JSON.parse(response.body)
body["albums"]["items"].each do |a|
  ap a["name"]
end

# Guessing Game

def guessing_game
	puts "Guess a number between 1 and 100"
	correct = Random.new.rand(1..100)
	num_guesses = 1
	current_guess = gets.chomp.to_i

	while current_guess != correct
		if current_guess > correct
			puts "The number is lower than #{current_guess}. Guess again"
		elsif current_guess < correct
			puts "The number is higher than #{current_guess}. Guess again"
		end
		current_guess = gets.chomp.to_i
		num_guesses = num_guesses + 1
	end
	puts "You guessed #{correct} in #{num_guesses} tries!"
end

## Spotify Album Search
require 'httparty'
require 'awesome_print'

def search_spotify_albums
  conf.echo = false
	puts "Enter an album name or keyword"
	term = gets.chomp
  response = HTTParty.get('https://api.spotify.com/v1/search?q=' + term + '&type=album')
  body =  JSON.parse(response.body)
  body["albums"]["items"].each do |a|
    ap a["name"]
  end

end
