let myApp = angular.module("myApp", ["ngRoute"]).
controller("homeController", homeController);


myApp.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl:"partials/home.html",
        controller: "homeController as hc"
    });
});// end of .config