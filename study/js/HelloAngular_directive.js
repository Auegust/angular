/**
 * Created by auegu on 2016/2/27.
 */
var myModule = angular.module("MyModule", []);
myModule.directive("hello", function () {
    return {
        restrict: 'E', template: '<div> Hi Everybody</div>', replace: true
    }
});
