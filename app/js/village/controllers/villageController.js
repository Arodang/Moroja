module.exports = function($scope, VillageService, StorageService) {
    $scope.village = {};
    $scope.timer = {};

    $scope.gatherResources = function(resourceKey) {
        $scope.village = VillageService.addResource(resourceKey, $scope.village);
    };

    $scope.resetStorage = function() {
        StorageService.resetVillage();
        $scope.village = VillageService.getVillage();
    };

    var initialize = function() {
        $scope.village = VillageService.getVillage();
        $scope.timer = VillageService.getTimer();
    };

    initialize();
};
