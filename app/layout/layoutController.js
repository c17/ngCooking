cookingApp.controller('LayoutController', ['$scope', '$resource', '$log', 'cookingResources', 'cookingServices', 

	function LayoutController($scope, $resource, $log, cookingResources, cookingServices){


		$scope.recipes ={};

		cookingResources.getRecipes()
		.$promise
		.then(
			function(recipes) 
			{
				$scope.recipesList = recipes;
			}).
		catch(
			function(response)
			{
				console.log(response);
			});
		cookingServices.getRecipeNote();
	}]);