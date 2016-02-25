var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/login");
 
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "tpl/login.html"
    })
    .state('profile', {
      url: "/profile",
      templateUrl: "tpl/profile.html",
      controller: "loginCtrl"
    });
});