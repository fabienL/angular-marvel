marvelApp
.factory('CharactersResource', function($resource, marvelAPI){
  return $resource('http://gateway.marvel.com/v1/public/characters/:id', { id: '@id', "apikey": marvelAPI.key }, {
    update: { method: 'PUT' }
  });
});
