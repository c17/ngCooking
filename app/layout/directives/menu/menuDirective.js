cookingApp.directive('menuNav', function() {
	return function link(scope, menuLi) {
	menuLi.find(".menu li").on('click', selectMenuLi);


	function selectMenuLi() {
	var li = angular.element(this);

	menuLi.find('.active').removeClass('active');
	li.addClass('active');

	}
	}
});