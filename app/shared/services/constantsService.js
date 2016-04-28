module.exports = function () {
    var getResourceSchema = function() {
        var resources = {
            "lumber": {
                "name" : "Lumber",
                "baseAmount" : 10,
                "increaseAmounts" : {
                    "lumber": 3
                },
                "decreaseAmounts": {

                },
                "timeToGather": 2,
                "resourceKey" : "lumber",
                "gatherDescription" : "Spend a few hours cutting down lumber for use in the village"
            },
            "firewood": {
                "name" : "Firewood",
                "baseAmount" : 10,
                "increaseAmounts" : {
                    "firewood": 5
                },
                "decreaseAmounts": {
                    "lumber": 1
                },
                "timeToGather": 2,
                "resourceKey" : "firewood",
                "gatherDescription" : "Split a piece of lumber into firewood to keep your cabin warm."
            },
            "food": {
                "name" : "Food",
                "baseAmount" : 10,
                "increaseAmounts" : {
                    "food": 3
                },
                "decreaseAmounts": {

                },
                "timeToGather": 2,
                "resourceKey" : "food",
                "gatherDescription" : "Harvest some of the bountiful berries and nuts from the surrounding forest for dinner tonight."
            },
            "water": {
                "name" : "Water",
                "baseAmount" : 10,
                "increaseAmounts" : {
                    "water": 3
                },
                "decreaseAmounts": {

                },
                "timeToGather": 2,
                "resourceKey" : "water",
                "gatherDescription" : "Fetch a bucket of water from the nearby freshwater stream, then boil it to ensure it is safe to drink."
            },
            "stone": {
                "name" : "Stone",
                "baseAmount" : 10,
                "increaseAmounts" : {
                    "stone": 3
                },
                "decreaseAmounts": {

                },
                "timeToGather": 2,
                "resourceKey" : "stone",
                "gatherDescription" : "Gather rock chipped from the island's cliffs to help with construction efforts."
            }

        };
        return resources;
    };

    var getResources = function() {
        var resources = getResourceSchema();
        var baseResources = {};

        for (var i in resources) {
            baseResources[i] = {};
            baseResources[i].amount = resources[i].baseAmount;
            baseResources[i].description = resources[i].gatherDescription;
            baseResources[i].name = resources[i].name;
            baseResources[i].resKey = i;
        }

        return baseResources;
    };

    var getBuildingSchema = function() {
        var buildingsStats = {
            "sawMill": {
                "name": "Saw Mill",
                "description": "A factory where machines saw logs into lumber.",
                "resourceMultipliers": {
                    "lumber": 1.25
                }
            },
            "well": {
                "name": "Well",
                "description": "A more convenient place to collect water.",
                "resourceMultipliers": {
                    "water": 2
                }
            },
            "quarry": {
                "name": "Quarry",
                "description": "A big hole in the ground... with lots of rocks.",
                "resourceMultipliers": {
                    "stone": 1.25
                }
            }
        };
        return buildingsStats;
    };

    return {
        getResourceSchema : getResourceSchema,
        getResources : getResources,
        getBuildingSchema : getBuildingSchema
    };
};
