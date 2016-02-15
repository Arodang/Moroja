'use strict';

define([
	'angular',
	'angularRoute',
	'view1/view1',
	'view2/view2'
], function(angular, angularRoute, view1, view2) {
	// Declare app level module which depends on views, and components
	return angular.module('moroja', [
		'ngRoute',
		'moroja.view1',
		'moroja.view2'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);
});

