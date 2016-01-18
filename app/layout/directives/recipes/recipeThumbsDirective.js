'use strict';

cookingApp.directive('recipeThumbs', ['$compile',

	function ($compile){
		return {
			restrict : 'E',
			templateUrl : '/app/layout/directives/recipes/recipeThumbs.html'
		}
	}

	]);