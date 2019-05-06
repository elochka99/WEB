var App = angular
  .module("App", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider.when("/first", {
      templateUrl: "./first.html",
    });
    $routeProvider.when("/second", {
      templateUrl: "./second.html",
    });
    $routeProvider.otherwise({ redirectTo: "/r" });
  });
