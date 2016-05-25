'use strict';

/**
 * @ngdoc function
 * @name todoListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoListApp
 */
angular.module('todoListApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
	var listaEnNavegador=localStorageService.get('lista');
	$scope.lista=listaEnNavegador && listaEnNavegador.split('\n') || []; 
	$scope.$watch('lista',function(){
		localStorageService.add('lista',$scope.lista.join('\n'));
	},true);
	$scope.agregar=function(){
		$scope.lista.push($scope.tarea);
		$scope.tarea="";
	}
	$scope.borrar=function(index){
		$scope.lista.splice(index,1);
	}
  });
