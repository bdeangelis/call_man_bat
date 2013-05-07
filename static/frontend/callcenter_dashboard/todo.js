function TodoCtrl($scope){
  $scope.todos = [
    {text:'Dr. Nadir', state:'Primary', acct:'601231'},
    {text:'Dr. Tran', state:'Secondary', acct:'832131'},
    {text:'Dr Smith', state:'Primary', acct:'543210'}];

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoTest='';
  };

  $scope.remaining = function () {
    var count = 0;
    angular.forEach($scope.todos, function(todo){
      count += todo.done ? 0 : 1;
    });
    return count;
  };
  $scope.logins = [
    {id:'Brett'},
    {id:'Pete'}];

}
