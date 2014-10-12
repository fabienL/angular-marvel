'use strict';

marvelApp.controller('HomeCtrl', function($scope, $filter, CharactersResource, marvelAPI){

	$scope.noThumbnailUrl = marvelAPI.noimgUrl;
	
	CharactersResource.get().$promise.then(function(datas){
		$scope.characters = $filter('thumbnailDefined')(datas.data.results, marvelAPI.noimgUrl);
	})

});