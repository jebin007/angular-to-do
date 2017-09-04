angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
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
});


 