'use strict';

define([
	'angular',
	'angularRoute',
	'view1/view1',
	'view2/view2',
	'village/village',
	'structure/header/header',
	'structure/footer/footer'
], function(angular, angularRoute, view1, view2, village, header, footer) {
	// Declare app level module which depends on views, and components
	return angular.module('moroja', [
		'ngRoute',
		'moroja.view1',
		'moroja.view2',
		'moroja.village',
		'moroja.header',
		'moroja.footer'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/village'});
	}]);
});

