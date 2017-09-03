angular.module('todoListApp')
//We are not including the empty array [] in this module
//because we don't want angular to create a new module
//instead we want it to use an already existing module
//and this is why app.js needs to be loaded first in our html file

.directive('helloWorld', function() {
    return {
        template: "This is the hello world directive!"

    };
});