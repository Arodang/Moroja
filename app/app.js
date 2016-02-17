'use strict';

define([
	'angular',
	'angularRoute',
	'view1/view1',
	'view2/view2',
	'village/village'
], function(angular, angularRoute, view1, view2, village) {
	// Declare app level module which depends on views, and components
	return angular.module('moroja', [
		'ngRoute',
		'moroja.view1',
		'moroja.view2',
		'moroja.village'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/village'});
	}]);
});

