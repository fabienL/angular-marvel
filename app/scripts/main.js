'use strict';
var marvelApp = angular.module('marvelApp', [ "ngResource",  "ngRoute", "comics.module"]);

marvelApp.config(function($routeProvider) {
	$routeProvider
	  .when('/home', {
	    templateUrl: 'partials/home.html',
	    controller: 'HomeCtrl',
	  })
	  .when('/comics', {
	    templateUrl: 'partials/comics.html',
	    controller: 'ComicsCtrl',
	  })
	  .when('/comics/:id', {
	    templateUrl: 'partials/comics-details.html',
	    controller: 'ComicsDetailsCtrl',
	  })	  
	  .otherwise({
	    redirectTo: '/home'
	  });
});

marvelApp.constant('marvelAPI', {
	key : 'df2ce25431b02bf5b0c4e54952e91c71',
	pathUrl : 'http://gateway.marvel.com:80/v1/public/'
});
