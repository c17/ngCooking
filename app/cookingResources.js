cookingApp.factory('cookingResources', ['$resource',
	function($resource)
	{
		return {
			getRecipes: function() {
				return $resource('json/:filename', {filename:'@filename'}).query({filename:'recettes'});
			},
			getUsers: function() {
				return $resource('json/:filename', {filename:'@filename'}).query({filename:'1NOMBIDON'});
			},
			saveUser: function(user){
				return $resource('json/:filename', {filename:'@filename'}).save({filename:'1NOMBIDON'}, user);
			}
		};

	}]);