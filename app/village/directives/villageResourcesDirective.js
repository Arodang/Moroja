
module.exports = function () {
    return {
        templateUrl : './village/directives/village.html',
        controller: require('./villageResourcesCtrl'),
        restrict: 'E',
        scope: {}
    };
};
