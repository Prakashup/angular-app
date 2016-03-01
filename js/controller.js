//login Controller
myApp.controller("loginCtrl", function($scope,$http,$location,$rootScope){
	$http.get("http://127.0.0.1:56146/database.json")
	.success(function(response){
		$scope.users = response.records;
		console.log($scope.users);
	})
	
	$scope.loginCheck = function(){
		$scope.user = $scope.username;
		$scope.pwd = $scope.password;
		$rootScope.isloggedIn = false;
		angular.forEach($scope.users, function(value, key){
			console.log(value.user + ':' + value.password);
			if(($scope.user === value.user) && ($scope.pwd === value.password)){
				$rootScope.isloggedIn = true;
				$location.path("/dashboard");
				console.log($rootScope.isloggedIn);
				//break $scope.users;
			}
		});
	}
  });