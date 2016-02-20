'use strict';

var angular = require('angular');

require('./dependencies');

var app = angular.module('morojaApp', [ 'ngRoute', 'LocalStorageModule' ]);

app.constant('VERSION', require('../../package.json').version);

require('./village');
require('./structure');
require('./components');
app.config(function($routeProvider) {

  $routeProvider
    .when('/village', {
      templateUrl: 'js/village/templates/village.html',
      controller: 'VillageController'
    })
    .otherwise({
      redirectTo: '/village',
    });
});
