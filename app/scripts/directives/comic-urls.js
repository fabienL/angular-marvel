'use stric';

angular.module('marvel.directives',[])
.directive('urls', function(){
	return {
      restrict: 'E',
      scope: {urls: '=info'},
      templateUrl: 'partials/urls.html',
      link : function(scope,element, attrs){
      		console.log('LINK ', scope.urls)
      }    
    };
})