/**
 * Created by auegu on 2016/2/27.
 */
var myModule = angular.module("HelloAngular", []);
myModule.controller("helloAngular", ['$scope', function HelloAngular($scope) {
    $scope.greeting = {
        text: "Hello"
    };
}
]);
