'use strict';

define([
    'angular',
    'angularLocalStorage',
    'moroja.storage.village'
], function(angular, angularLocalStorage, village) {
    angular.module('moroja.storage.local-storage', [])
        .factory('local-storage', ['storage', function(storage) {
            var localStorageKey = 'morojaStorage';

            var getGame = function() {
                var game = angularLocalStorage.get(localStorageKey);
                return game;
            };
            var saveGame = function() {
                var game = {
                    village: village.getVillage()
                }
                angularLocalStorage.set(localStorageKey, game);
            };

            return {
                getGame: getGame,
                saveGame: saveGame
            }
        }]);
});