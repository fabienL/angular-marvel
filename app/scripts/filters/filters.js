angular
.module('marvel.filter', [])
.filter('thumbnailDefined', [function(){
    return function(comic, searchTerm){
    	var temp = [];

    	angular.forEach(comic, function(value,key){
    		if(value.thumbnail){

	    		if(value.thumbnail.path.indexOf(searchTerm) == -1){
					temp.push(value);
				}
			}
    	});	
		return temp;
    }
}])