cookingApp.controller('LayoutController', ['$scope', '$resource', '$log', 'cookingResources', 'cookingServices', 

	function LayoutController($scope, $resource, $log, cookingResources, cookingServices){


		$scope.recipes = {};
		$scope.noteFinale = {};
		$scope.commentList = {};
		var lastUserId = 0;

		$scope.random = function() {
			return 0.5 - Math.random();
		}

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

		$scope.getComments= function(recipe){

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

			$scope.commentList = array;
		};


		$scope.getNotes= function(commentList){
			var notesList = [];

			angular.forEach($scope.commentList, function(comment)
			{
				notesList.push(comment.mark);
			});

			var totalNotes = notesList.length;
			var sumNotes = 0;

			for(i=0; i<notesList.length; i++)
			{
				sumNotes += notesList[i];
			}

			$scope.noteFinale = sumNotes / totalNotes;

			return $scope.noteFinale;
		};

		getUsers = function(){
			var fetchedUserList = {};

			cookingResources.getUsers()
			.$promise
			.then(
				function(userList) 
				{
					fetchedUserList= userList;
				}).
			catch(
				function(response)
				{
					console.log(response);
				});

			return fetchedUserList;
		};


		getLastUserId = function(){
			var effectiveUserList = getUsers();
			var highestUserId = 0;

			angular.forEach(effectiveUserList, function(value, key)
			{
				if(highestUserId < user.id){
					highestUserId = user.id;
				}
			});
			return highestUserId;
		};

		createUserTemplate = function(user){

			var _user = {};

			_user.password = "";
			_user.email ="";
			_user.firstname = "";
			_user.surname = "";
			_user.id = getLastUserId();
			_user.email = "";
			_user.password = "";
			_user.level = "";
			_user.picture = "";
			_user.bio = "";

			var finalUser = $.extend({},_user,user);
			console.log(finalUser);

			return finalUser;
		};

		$scope.saveUser = function(user){

			console.log("saveUser : user.password = " + user.password);

			var user = createUserTemplate(user);

//			user = JSON.stringify(user);

			cookingResources.saveUser(user)
			.$promise
			.then(
				function(user){
					console.log("user saved from layoutCtrl.saveUser()");
				}).
			catch(
				function(response){
					console.log(response);
				}
				);

		};

	}]);