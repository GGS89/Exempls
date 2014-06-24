var phonecatApp = angular.module('phonecatApp', []);
 
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
 
    $scope.orderProp = 'age';
    $scope.dateTest = "2001-01-01";
   // $scope.dateTest = new Date();
   $(document).ready(function() {
	   var availableTags = [
      {"label" : "ActionScript"},
      {"label" : "AppleScript"},
      {"label" : "Asp"},
      {"label" : "BASIC"},
      {"label" : "C"},
      {"label" : "C++"},
      {"label" : "Clojure"},
      {"label" : "COBOL"},
      {"label" : "ColdFusion"},
      {"label" : "Erlang"},
      {"label" : "Fortran"},
      {"label" : "Groovy"},
      {"label" : "Haskell"},
      {"label" : "Java"},
      {"label" : "JavaScript"},
      {"label" : "Lisp"},
      {"label" : "Perl"},
      {"label" : "PHP"},
      {"label" : "Python"},
      {"label" : "Ruby"},
      {"label" : "Scala"},
      {"label" : "Scheme"}
    ];
	 $( "#tags" ).autocomplete({
      source: availableTags
    });

  });

  }]);



function PhoneDetailCtrl($scope, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;

}

