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
						for(i=0; i<fetched.length; i++){
							var currentRecipeRaw = fetched[i];

							for(j=0; j<currentRecipeRaw.comments.length; j++){
								var currentComment = currentRecipeRaw.comments;

								console.log(currentComment);
							}

						}
					}).
				catch(
					function(response)
					{
						console.log(response);
					})
			}
		}
	}
	]);