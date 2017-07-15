angular.module('ToDo', [])

.controller('todoController', ['$scope', function($scope) {
	$scope.todos = [
		{'title': 'build a todo app', 'done':false}
	];

	$scope.completedTodos = [];

	$scope.addTodo = function(){
		$scope.todos.push({'title': $scope.newTodo, 'done':false});
		$scope.newTodo = '';
	}
	$scope.clearCompleted = function(){
		$scope.todos = $scope.todos.filter(function(item) {
			if (item.done) {
				$scope.completedTodos.push(item);
			}
			return !item.done;
		});
	}

}]);