'use strict';

define([
    //Dependencies
    'angular'
    //Dependency injection
], function(angular) {
    //Module name
    angular.module('moroja.storage.village', [])
        .factory('village', ['storage', function(storage) {
            const BASE_VALUES = {
                population: 15,
                lumber: 30,
                stone: 15,
                food: 60,
                water: 60
            };
            var village = {};

            var createVillage = function() {
                village.population = BASE_VALUES.population;
                village.lumber = BASE_VALUES.lumber;
                village.stone = BASE_VALUES.stone;
                village.food = BASE_VALUES.food;
                village.water = BASE_VALUES.water;
            };

            var getVillage = function() {
                return village;
            };

            return {
                getVillage: getVillage,
                createVillage: createVillage
            }
        }]);
});