module.exports = function($scope, VillageService, StorageService) {
    $scope.village = {};
    $scope.timer = {};

    $scope.gatherResources = function(resourceKey) {
        VillageService.addResource(resourceKey);
    };

    $scope.resetStorage = function() {
        VillageService.resetVillage();
    };

    $scope.buyBuilding = function(key) {
        VillageService.buyBuilding(key);
    };

    var initialize = function() {
        getVillage();
    };

    var getVillage = function() {
        $scope.village = VillageService.getVillage();
    };

    $scope.$on('VillageUpdated', getVillage());



    initialize();
};
