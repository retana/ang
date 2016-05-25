'use strict';

/**
 * @ngdoc overview
 * @name todoListApp
 * @description
 * # todoListApp
 *
 * Main module of the application.
 */
angular
  .module('todoListApp', [
    'ngAnimate',
    'ngRoute',
	'LocalStorageModule'
  ]).config(['localStorageServiceProvider',function(localStorageService){
	localStorageService.setPrefix('ls');
  }]).config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/',{
      templateUrl:'views/main.html',
      controller:'MainCtrl'
    }).when('/about',{
      templateUrl:'views/about.html'
    }).when('/contact',{
      templateUrl:'views/contact.html'
    }).otherwise({
      redirectTo:'/'
    });
}]);
