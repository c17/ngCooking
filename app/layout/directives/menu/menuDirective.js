cookingApp.directive("menuItem"), ['$compile', function($compile) 
return { 
restrict : 'A',
scope {
	active:'@'
},

link : function(scope, element, attrs, controller){
	scope.active = scope.active ==='true';
}


}