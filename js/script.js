var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'pages/home.html',
      controller: 'mainController'
    }).
    when('/about', {
      templateUrl: 'pages/about.html',
      controller: 'aboutController'
    }).
    when('/success', {
      templateUrl: 'pages/contact.html',
      controller: 'contactController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);