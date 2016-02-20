'use strict';

var app = require('angular').module('morojaApp');

app.directive('villageDirective', require('./villageDirective'));
app.controller('VillageDirCtrl', require('./villageDirCtrl'));