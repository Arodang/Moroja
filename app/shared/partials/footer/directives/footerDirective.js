
module.exports = function () {
    return {
        templateUrl : './shared/partials/footer/directives/footer.html',
        controller: require('./footerCtrl'),
        restrict: 'E',
        scope: {}
    };
};
