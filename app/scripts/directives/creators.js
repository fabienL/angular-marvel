'use stric';

angular.module('marvel.directives')
.directive('creators', function(){
	return {
      restrict: 'E',
      scope: {creators: '=info'},
      templateUrl: 'partials/creators.html',      
      link : function(scope,element, attrs){


      	
     
      }    
    };
})