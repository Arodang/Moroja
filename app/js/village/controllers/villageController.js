module.exports = function($scope, VillageService) {
    $scope.village = {};

    $scope.gatherResources = function(resourceKey) {
        if(resourceKey === "firewood") {
            if ($scope.village.resources.lumber > 0) {
                $scope.village.resources.lumber--;
                $scope.village.resources.firewood += 5;
            }
        }
        else {
            $scope.village.resources[resourceKey] += 5;
        }

    };

    var initialize = function() {
        $scope.village = {
            description : "Your village is tiny, with only a few inhabitants. Smoke curls from your " +
            "cabin's chimney, but the cold wind warns you to gather more firewood before night hits.",
            resources: {
                firewood: 10,
                lumber: 5,
                food: 15,
                water: 10
            }

        }
    }

    initialize();
};
