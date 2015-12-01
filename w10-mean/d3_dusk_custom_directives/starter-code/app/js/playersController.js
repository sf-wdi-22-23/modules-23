angular.module('CardsAgainstAssembly')
  .controller('playersController', playersController);

function playersController(){
  var self = this;
  self.all = [
    {name: 'Gilligan', points: 2},
    {name: 'Mary Ann', points: 16},
    {name: 'Ginger', points: 12},
    {name: 'Thurson', points: 6},
    {name: 'Skipper', points: 9},
    {name: 'The Professor', points: 21}
  ]
  return self;
}