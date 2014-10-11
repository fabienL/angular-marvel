'use strict';

angular.module('comics.module', ['marvel.directives'])
.controller('ComicsCtrl', function($scope, ComicsResource){
	console.log('COMICS')

	ComicsResource.get().$promise.then(function(datas){
		$scope.comics = datas.data.results;
	})

})