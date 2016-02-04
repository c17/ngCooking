cookingApp.factory('cookingResources', ['$resource',
	function($resource)
	{
		return {
			getRecipes: function() {
				return $resource('json/:filename', {filename:'@filename'}).query({filename:'recettes'});
			},
			getUsers: function() {
				return $resource('json/:filename', {filename:'@filename'}).query({filename:'communautest'});
			},
			saveUser: function(users){
				return $resource('json/:filename', {filename:'@filename'}).save({filename:'communautest'}, users);
			}
		};

	}]);