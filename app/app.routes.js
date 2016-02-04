cookingApp.config(['$routeProvider', '$locationProvider',

function($routeProvider, $locationProvider){
	

	$routeProvider
	.when('/', {
		controller:'LayoutController',
		templateUrl:'/app/layout/templates/home.html'
	})
	.when('/home', {
		controller:'LayoutController',
		templateUrl:'/app/layout/templates/home.html'
	})
	.when('/recettes', {
		controller:'LayoutController',
		templateUrl:'/app/layout/templates/recettes.html'
	})
	.when('/ingredients', {
		controller:'LayoutController',
		templateUrl:'/app/layout/templates/ingredients.html'
	})
	.when('/communaute', {
		controller:'LayoutController',
		templateUrl:'/app/layout/templates/communaute.html'
	})
	.when('/communaute_details', {
		controller:'LayoutController',
		templateUrl:'/app/layout/templates/communaute_details.html'
	})
	.when('/recettes_new', {
		controller:'LayoutController',
		templateUrl:'/app/layout/templates/recettes_new.html'
	})
	.when('/recettes_details', {
		controller:'LayoutController',
		templateUrl:'/app/layout/templates/recettes_details.html'
	})
	.otherwise({redirectTo:'/home'});
	
$locationProvider.html5Mode(true);

 }]);