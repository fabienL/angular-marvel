'use strict';

angular.module('comics.module')
.factory('ComicsResource', function($resource, marvelAPI){
  return $resource(
  	marvelAPI.pathUrl+'comics/:id', 
  	{ id: '@id', "apikey": marvelAPI.key, 'format' : 'comic','limit' : '100', 'formatType' : 'comic'}, 
  	{update: { method: 'PUT' }
  });
});
