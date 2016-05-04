var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/login");
 
  // Now set up the states
  $stateProvider
	.state('login', {
	  url: "/login",
	  templateUrl: "views/login.html",
	  controller : "loginCtrl"
	  
	})
   .state('dashboard', {
	  resolve:{
		  "ckeck" : function($location, $rootScope){
			  if($rootScope.isloggedIn){
				  $location.path("/dashboard");
			  }
		  }
	  	},
	    url: "/dashboard",
		templateUrl: "views/dashboard.html"   
	})
   .state('dashboard.list', {
		url: "/list",
		templateUrl: "views/pool-list.html"   
	});
  
       
});