angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this

    todoList.add = function() {
      console.log(todoList.keyword + todoList.ans)
    }

  }
