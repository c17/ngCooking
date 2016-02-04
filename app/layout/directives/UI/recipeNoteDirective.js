cookingApp.directive('recipeNote', ['$compile',

	function() {
		return{
			scope:{
				recipe:'='
			},
			restrict : 'E',
			transclude: true,
			controller : 'LayoutController',
			link: function link (scope, element, attrs, starSpan) {

				starSpan = $(element).find(".starSpan");
				starSpan.ready(displayStars(scope.recipe));

				function displayStars(recipe){

					var note = scope.getNotes(scope.getComments(scope.recipe));

					for(i=0; i<Math.floor(note); i++)
					{
						starSpan.append($('<span class="glyphicon glyphicon-heart"></span>'));
					}

				}
			},
				templateUrl:'/app/layout/directives/UI/recipeNoteTemplate.html'
			
		}
	}


	]);