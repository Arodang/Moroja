'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-route');

var app = angular.module('morojaApp', [ 'ngRoute' ]);

app.constant('VERSION', require('../../package.json').version);

require('./village');

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
