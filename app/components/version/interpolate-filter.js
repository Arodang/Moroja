'use strict';

define(['angular'], function(angular) {
	angular.module('moroja.version.interpolate-filter', [])
	.filter('interpolate', ['version', function(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	}]);
});