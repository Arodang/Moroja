'use strict';

define([
	'angular',
	'structure/footer/footerDirective',
	'structure/footer/footerCtrl'
], function(angular, Footer, FooterCtrl) {
	angular.module('moroja.footer', [])
		.controller('footerCtrl', ['$scope', function($scope) {
			return new FooterCtrl($scope);
		}])
		.directive('footerDirective', function() {
			return new Footer();
		});

});