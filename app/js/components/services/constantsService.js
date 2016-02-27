module.exports = function () {
    var getResources = function() {
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
            "stone":{
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

    getBaseResources = function() {
        var resources = getResources();
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

    return {
        getResources : getResources,
        getBaseResources : getBaseResources

    };
};
