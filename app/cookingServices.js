cookingApp.factory('cookingServices', ['cookingResources',

	function(cookingResources, $scope){
		return{

			
			getRecipeNote : function(){
				var fetched = {};

				cookingResources.getRecipes()
				.$promise
				.then(
					function(recipes){
						fetched = recipes;
					}).
				catch(
					function(response)
					{
						console.log(response);
					})
			},

			getComments : function(recipe){

				var commentList = [];

				angular.forEach(recipe.comments, function(comments)
				{ 
					commentList.push(JSON.stringify(comments));
				});

				var array = []

				angular.forEach(commentList, function(obj)
				{
					array.push(JSON.parse(obj));
				});

				return $scope.commentList = array;
			}
		}
	}
	]);
