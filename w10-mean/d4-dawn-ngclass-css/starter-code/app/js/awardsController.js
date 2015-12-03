angular.module('Awwward', [])
  .controller('awardsController', AwardsController);


function AwardsController(){
  this.newWinner = {};
  this.winners = [
    {name: "Winston Inner"},
    {name: "Justhe Besse"},
    {name: "Sophia Close"},
    {name: "Chappy Goluckee"},
    {name: "Barry Wheldon"},
    {name: "Curtis Rusty"},
    {name: "Noah Ward" }
  ];
  this.createNewWinner = createNewWinner;

  function createNewWinner(){
    this.winners.push(this.newWinner);
    this.newWinner = {};
  }
}