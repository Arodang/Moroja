'use strict';

define([
    //Dependencies
    'angular'
    //Dependency injection
], function(angular) {
    //Module name
    angular.module('moroja.storage.village-service', [])
        .factory('village-service', ['storage', function(storage) {
            const BASE_VALUES = {
                population: 15,
                lumber: 30,
                stone: 15,
                food: 60,
                water: 60
            };

            const GATHER_VALUES = {
                lumber: {
                    add: {
                        lumber: 2
                    },
                    remove: {},
                    time: 4
                },

                firewood:{
                    add: {
                        firewood: 4
                    },
                    remove: {
                        lumber: 1
                    },
                    time: 2
                },
                food: {
                    add: {
                        food: 2
                    },
                    remove: {},
                    time: 2
                },
                water: {
                    add: {
                        water: 2
                    },
                    remove: {},
                    time: 2
                },
            }

            var village = {};

            var gatherResource = function(resourceKey, resources) {
                var resource = GATHER_VALUES[resourceKey];

                for (var res in resource.add) {
                    resources[resource.add[res].key] += resource.add[res];
                }

                for (var res in resource.remove) {
                    resources[resource.add[res].key] -= resource.add[res];
                }

                //TODO: Call to pass time here.
                //TODO: Call to save village here.

                return resources;

            };

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
                createVillage: createVillage,
                gatherResource: gatherResource
            }
        }]);
});