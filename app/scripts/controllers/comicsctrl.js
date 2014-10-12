'use strict';

angular.module('comics.module', ['marvel.directives'])
.controller('ComicsCtrl', function($scope, $filter, ComicsResource, marvelAPI){
	
	$scope.dateStart = new Date().getUTCFullYear()+'-01-01,';
	$scope.dateEnd = new Date().getUTCFullYear()+'-12-31';
	$scope.noThumbnailUrl = marvelAPI.noimgUrl;

	ComicsResource.get({'dateRange': $scope.dateStart+$scope.dateEnd}).$promise.then(function(datas){
		$scope.comics = datas.data.results;
	})

})