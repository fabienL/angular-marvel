'use strict';

angular.module('marvel.directives',[])
.directive('picture', function(){
	return {
      restrict: 'E',
      scope: {
      	src: '=pathimg',
      	ext: '=extensionimg',
      	width: '=width'
  		},
      templateUrl: 'partials/picture.html',
      link : function(scope,element, attrs){
      	
      }    
    };
})