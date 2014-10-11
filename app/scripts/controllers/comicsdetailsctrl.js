

angular.module('comics.module')
.controller('ComicsDetailsCtrl', function($scope,$routeParams, ComicsResource){
	console.log('COMICS details')

	ComicsResource.get({id:$routeParams.id}).$promise.then(function(datas){
		$scope.comics = datas.data.results;
	})

})