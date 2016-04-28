'use strict';

var app = require('angular').module('morojaApp');

app.factory('StorageService', require('./storageService'));
app.factory('MorojaConstantsService', require('./constantsService'));
app.factory('TimeService', require('./timeService'));
