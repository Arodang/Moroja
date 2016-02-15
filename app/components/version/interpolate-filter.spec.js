/* global describe, it, expect, beforeEach, afterEach, module, inject */
'use strict';

define(['app', 'angularMocks'], function(app) {
	describe('moroja.version module', function() {
		beforeEach(module('moroja.version'));

		describe('interpolate filter', function() {
			beforeEach(module(function($provide) {
				$provide.value('version', 'TEST_VER');
			}));

			it('should replace VERSION', inject(function(interpolateFilter) {
				expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
			}));
		});
	});
});
