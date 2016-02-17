'use strict';

define([
	'angular',
	'angularRoute',
	'village/villageCtrl'
], function(angular, ngRoute, VillageCtrl) {
	angular.module('moroja.village', ['ngRoute'])
		// We can load the controller only when needed from an external file
		.controller('VillageCtrl', ['$scope', function($scope) {
			return new VillageCtrl($scope);
		}])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/village', {
				templateUrl: 'village/village.html',
				controller: 'VillageCtrl'
			});
		}]);

});