var app = angular.module('blogApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'authController'
		})
		
		.when('/register', {
			templateUrl: 'register.html',
			controller: 'authController'
		});
});

app.controller('mainController', function($scope){
	$scope.blogs = [];
	$scope.newBlog = {created_by: '', text: '', created_at: '', image: '/images/english.png'};
	
	$scope.blog = function(){
		$scope.newBlog.created_at = Date.now();
		$scope.blogs.push($scope.newBlog);
		$scope.newBlog = {created_by: '', text: '', created_at: '', image: '/images/english.png'};
	};
});

app.controller('authController', function($scope){
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	$scope.login = function(){
		$scope.error_message = 'login is' + $scope.user.username;
	};

	$scope.register = function(){
		$scope.error_message = 'registration is ' + $scope.user.username;
	};
});