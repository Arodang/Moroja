module.exports = function (StorageService, MorojaConstantsService, TimeService, $rootScope) {
    var village = {};

    //Create Schemas
    var resourceSchema = MorojaConstantsService.getResourceSchema();
    var buildingsSchema = MorojaConstantsService.getBuildingSchema();
    var baseResourceMultipliers = {};
    for (var res in resourceSchema) {
        baseResourceMultipliers[res] = 1;
    }

    var initialize = function () {
        village = StorageService.getVillage();
        if (village === null) {
            createVillage();
        }

        broadcastVillage();
    };

    var createVillage = function () {
        village = {
            description: "Your village is tiny, with only a few inhabitants. Smoke curls from your " +
            "cabin's chimney, but the cold wind warns you to gather more firewood before night hits.",
            buildings: {}
        };

        village.time = TimeService.getBasicTimer();
        village.resources = MorojaConstantsService.getResources();

        for (var building in buildingsSchema) {
            village.buildings[building] = {
                "key": building,
                "name": buildingsSchema[building].name,
                "description": buildingsSchema[building].description,
                "level": 0
            };
        }

        StorageService.saveVillage(village);
    };

    var addResource = function (resourceKey) {
        //Icky way to get around JS using references and not being able to save separate values.
        var oldResources = JSON.parse(JSON.stringify(village.resources));
        var oldTime = JSON.parse(JSON.stringify(village.time));

        var currentResource = resourceSchema[resourceKey];

        var sufficientResources = true;

        for (var i in currentResource.decreaseAmounts) {
            village.resources[i].amount -= currentResource.decreaseAmounts[i];
            if (village.resources[i].amount < 0) {
                sufficientResources = false;
                break;
            }
        }

        if (sufficientResources) {
            village.time = TimeService.addTime(currentResource.timeToGather, village.time);

            var multipliers = JSON.parse(JSON.stringify(baseResourceMultipliers));
            for (var building in village.buildings) {
                if (village.buildings[building].level > 0) {
                    for (var res in buildingsSchema[building].resourceMultipliers) {
                        multipliers[res] *= buildingsSchema[building].resourceMultipliers[res];
                    }
                }
            }
            for (var res in currentResource.increaseAmounts) {
                village.resources[res].amount += (currentResource.increaseAmounts[res] * multipliers[res]);
            }
        }

        if (!sufficientResources || !StorageService.saveVillage(village)) {
            village.resources = oldResources;
            village.time = oldTime;
            broadcastVillage();
        }
    };

    var buyBuilding = function (buildingName) {
        village.buildings[buildingName].level = 1;
        if (!StorageService.saveVillage(village)) {
            village.buildings[buildingName].level = 0;
        }

        broadcastVillage();
    };

    var broadcastVillage = function () {
        $rootScope.$broadcast('VillageUpdated');
    };

    var getVillage = function () {
        return village;
    };

    var resetVillage = function () {
        StorageService.resetVillage();
        createVillage();
        broadcastVillage();
    };

    initialize();

    return {
        addResource: addResource,
        buyBuilding: buyBuilding,
        getVillage: getVillage,
        resetVillage: resetVillage
    };
};
