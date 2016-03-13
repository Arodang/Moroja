module.exports = function($scope, VillageService, StorageService) {
    $scope.village = {};

    $scope.gatherResources = function(resourceKey) {
        $scope.village = VillageService.addResource(resourceKey, $scope.village);
    };

    $scope.resetStorage = function() {
        StorageService.resetVillage();
        $scope.village = VillageService.getVillage();
    };

    $scope.buyBuilding = function(key) {
        $scope.village = VillageService.buyBuilding(key, $scope.village);
    }

    var initialize = function() {
        $scope.village = VillageService.getVillage();
    };

    initialize();
};
