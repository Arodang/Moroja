
module.exports = function () {
    return {
        templateUrl : 'js/structure/header/directives/header.html',
        controller: function($scope, StorageService)
        {
            $scope.resetStorage=function()
            {
                StorageService.resetVillage();
                /*
                1.refresh page manually
                2.callbacks
                3.events
                 */
                //quickfix
                location.reload();
            };

        }

    };
};