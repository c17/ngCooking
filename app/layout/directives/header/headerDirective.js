'use strict';

cookingApp.directive('cookingHeader', ['$compile',

	function ($compile){
		return {
			restrict : 'E',
			templateUrl : '/app/layout/directives/header/headerTemplate.html'
		}
	}

	]);