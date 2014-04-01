function TodoCtrl($scope) {
  
  $scope.todos = [];

  $scope.newTodo = {
        text: "", 
        priority: "High"
    };
  
  $scope.sort = undefined;
  $scope.priorityOptions = ["High", "Low"];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text: $scope.newTodo.text,
          priority: $scope.newTodo.priority,
          done: false});
    $scope.newTodo = {
            priority: "High"
        };
  };
  $scope.prioritize = function() {
        $scope.sort = "priority";
      };
  
    $scope.clear = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
}