'use strict';

define(['angular', 'components/version/version-directive', 'components/version/interpolate-filter'],
	function(angular, versionDirective, interpolateFilter) {
		angular.module('moroja.version', [
		  'moroja.version.interpolate-filter',
		  'moroja.version.version-directive'
		])
		.value('version', '0.3');
});