
module.exports = function () {
    return {
        templateUrl : './shared/partials//header/directives/header.html',
        controller: require('./headerCtrl'),
        restrict: 'E',
        scope: {}
    };
};