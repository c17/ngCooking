cookingApp.factory('cookingServices', ['cookingResources', 

	function(cookingResources){
		return{
			getRecipeNote : function(){

				var fetched = {};

				cookingResources.getRecipes()
				.$promise
				.then(
					function(recipes) 
					{
						fetched = recipes;

						for(var i = 0; i < fetched.length; i++) {
							var recipe = fetched[i];
							console.log(recipe.comments.title);
						}
					}
					).
				catch(
					function(response)
					{
						console.log(response);
					});
			}
		}
	}


	]);