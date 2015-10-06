// Deck constructor with a property of cards, which is an array
function Deck() {
  this.cards = [];

  this.buildDeck = function(suits, values) {
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < values.length; j++) {
        this.cards.push(new Card(suits[i], values[j]));
        console.log("current suit is:", suits[i], " and current value is: ", values[j]);
      }
    }
  }

  this.init = function(suits, values) {
    console.log("initalizing deck");
    this.buildDeck(suits, values);
  }
};

function Card(suit, value) {
  this.suit = suit;
  this.value = value;
};

var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var myDeck = new Deck();
myDeck.init(suits, values);

myDeck.shuffle = function() {
  console.log("shuffle the cards");
}

myDeck.shuffle();
