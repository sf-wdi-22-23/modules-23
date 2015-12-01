angular.module('CardsAgainstAssembly')
  .directive('card', cardView);

function cardView(){
  var directive = {};

  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_cardView.html";
  directive.scope = {
      question: '@'
  };
  return directive;
}