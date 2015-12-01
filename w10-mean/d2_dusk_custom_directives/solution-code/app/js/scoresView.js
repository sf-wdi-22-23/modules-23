angular.module('CardsAgainstAssembly')
  .directive('scores', scoresView);

function scoresView(){
  var directive = {};

  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_scoresView.html";
  return directive;
}