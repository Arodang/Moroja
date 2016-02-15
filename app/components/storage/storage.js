'use strict';

define([
    'angular',
    'components/storage/local-storage'
], function(angular, localStorage) {
    angular.module('moroja.storage', [
        'moroja.storage.local-storage'
    ])
});