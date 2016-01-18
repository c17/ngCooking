cookingApp.factory('cookingResources', ['$resource',
	function($resource)
	{
		return {
			getRecipes: function() {
				return $resource('json/:filename', {filename:'@filename'}).query({filename:'recettes'});
			}
		};

	}]);