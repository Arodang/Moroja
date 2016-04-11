
module.exports = function (StorageService, MorojaConstantsService, TimeService) {
    var village = {
        description : "Your village is tiny, with only a few inhabitants. Smoke curls from your " +
        "cabin's chimney, but the cold wind warns you to gather more firewood before night hits.",
        resources: {},
        buildings: {},
        time: {}
    };

    village.resources = MorojaConstantsService.getResources();
    village.time = TimeService.getBasicTimer();

    var resourceSchema = MorojaConstantsService.getResourceSchema();

    var buildingsSchema = MorojaConstantsService.getBuildingSchema();
    var baseResourceMultipliers = {};
    for(var res in resourceSchema) {
        baseResourceMultipliers[res] = 1;
    }

    return {
        addResource: function(key, village) {
            //Icky way to get around JS using references and not being able to save separate values.
            var oldResources = JSON.parse(JSON.stringify(village.resources));
            var oldTime = JSON.parse(JSON.stringify(village.time));

            var currentResource = resourceSchema[key];

            var sufficientResources = true;

            for(var i in currentResource.decreaseAmounts) {
                village.resources[i].amount -= currentResource.decreaseAmounts[i];
                if(village.resources[i].amount < 0) {
                    sufficientResources = false;
                    break;
                }
            }

            if(sufficientResources) {
                village.time = TimeService.addTime(currentResource.timeToGather, village.time);

                var multipliers = JSON.parse(JSON.stringify(baseResourceMultipliers));
                for(var building in village.buildings) {
                    if(village.buildings[building].level > 0) {
                        for(var res in buildingsSchema[building].resourceMultipliers) {
                            multipliers[res] *= buildingsSchema[building].resourceMultipliers[res];
                        }
                    }
                }
                for(var res in currentResource.increaseAmounts) {
                    village.resources[res].amount += (currentResource.increaseAmounts[res] * multipliers[res]);
                }
            }

            if(!sufficientResources || !StorageService.saveVillage(village)) {
                village.resources = oldResources;
                village.time = oldTime;
            }

            return village;
        },
        buyBuilding: function(buildingName, village) {
            village.buildings[buildingName].level = 1;
            if (!StorageService.saveVillage(village)) {
                village.buildings[buildingName].level = 0;
            }
            return village;
        },
        getVillage: function() {
            var vil = StorageService.getVillage();
            if (vil === null) {
                village.resources = MorojaConstantsService.getResources();
                village.time = TimeService.getBasicTimer();
                vil = village;
                StorageService.saveVillage(vil);
            }
            if (!vil.buildings) {
                vil.buildings = {};
            }
            for (var key in buildingsSchema) {
                if (!vil.buildings[key]) {
                    vil.buildings[key] = {
                        "key": key,
                        "name": buildingsSchema[key].name,
                        "description": buildingsSchema[key].description,
                        "level": 0
                    };
                }
            }
            return vil;
        }

    };
};