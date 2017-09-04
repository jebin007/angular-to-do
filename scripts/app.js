angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {

    $scope.helloConsole = dataService.helloConsole;

    $scope.learningNgChange = function() {
        console.log('An Input Changed');
    };

    $scope.todos = dataService.getTodos();

})
.service('dataService', function($http) {

    this.helloConsole = function() {
        console.log('This is the hello console service!');
    };

    this.getTodos = $http.get('mock/todos.json')
    .then(function(response) {
        console.log(response.data);
        return response.data;
    })

});


 