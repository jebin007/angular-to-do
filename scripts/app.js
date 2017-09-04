angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {

    $scope.helloConsole = dataService.helloConsole;

    $scope.learningNgChange = function() {
        console.log('An Input Changed');
    };

    $scope.todos = [

        {"name": "clean the house"},
        {"name": "water the dogs"},
        {"name": "feed the lawn"},
        {"name": "pay dem bills"},
        {"name": "run"},
        {"name": "swim"}
    ]
})
.service('dataService', function() {

    this.helloConsole = function() {
        console.log('This is the hello console service!');
    }

});


 