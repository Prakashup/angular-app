var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/login");
 
  // Now set up the states
  $stateProvider
	.state('login', {
	  url: "/login",
	  templateUrl: "tpl/login.html",
	  controller : "loginCtrl"
	  
	})
   .state('dashboard', {
//	  resolve:{
//		  "ckeck" : function($location, $rootScope){
//			  if($rootScope.isloggedIn){
//				  $location.path("/dashboard");
//				  alert("loggedIn");
//			  }
//		  }
//	  	},
	    url: "/dashboard",
		templateUrl: "tpl/header.html"   
	})
   .state('dashboard.list', {
		url: "/list",
		templateUrl: "tpl/pool-list.html"   
	});
  
       
});