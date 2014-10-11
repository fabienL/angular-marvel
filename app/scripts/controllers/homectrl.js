'use strict';

marvelApp.controller('HomeCtrl', function($scope, CharactersResource){
	CharactersResource.get().$promise.then(function(datas){
		$scope.characters = datas.data.results;
	})
});