'use strict';

define([
	'angular',
	'structure/header/headerDirective'
], function(angular, HeaderDirective) {
	angular.module('moroja.header', [])
		.directive('headerDirective', function() {
			return new HeaderDirective();
		});

});