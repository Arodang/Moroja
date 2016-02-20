module.exports = function($scope, VillageService) {
    $scope.resources = {
        food: 15,
        wood: 5
    }

    $scope.addResource = function() {
        $scope.resources.food += VillageService.addFood();
    }
};
