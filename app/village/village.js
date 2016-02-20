'use strict';

define([
	'angular',
	'angularRoute',
	'village/villageCtrl',
    'components/storage/village-service'
], function(angular, ngRoute, VillageCtrl, villageService) {
	angular.module('moroja.village', ['ngRoute'])
		// We can load the controller only when needed from an external file
		.controller('VillageCtrl', ['$scope', 'villageService', function($scope, villageService) {
			return new VillageCtrl($scope, villageService);
		}])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/village', {
				templateUrl: 'village/village.html',
				controller: 'VillageCtrl'
			});
		}]);

});