'use strict';

angular.module('comics.module')
.factory('ComicsResource', function($resource, marvelAPI){
  return $resource(marvelAPI.pathUrl+'comics/:id', { id: '@id', "apikey": marvelAPI.key }, {update: { method: 'PUT' }});
});
