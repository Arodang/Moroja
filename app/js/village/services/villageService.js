 module.exports = function (StorageService, MorojaConstantsService, TimeService) {
     var village = {
         description : "Your village is tiny, with only a few inhabitants. Smoke curls from your " +
         "cabin's chimney, but the cold wind warns you to gather more firewood before night hits.",
         resources: {
         },
         time: {}
     };

     village.resources = MorojaConstantsService.getBaseResources();
     village.time = TimeService.getBasicTimer();

     var BASE_VALUES = MorojaConstantsService.getResources();
    return {
        addResource: function(key, village) {
            //Icky way to get around JS using references and not being able to save separate values.
            var oldResources = JSON.parse(JSON.stringify(village.resources));
            var oldTime = JSON.parse(JSON.stringify(village.time));
            var currentResource = BASE_VALUES[key];

            var insufficientResources = false;
            for(var i in currentResource.increaseAmounts) {
                village.resources[i].amount += currentResource.increaseAmounts[i];
            }

            for(var i in currentResource.decreaseAmounts) {
                village.resources[i].amount -= currentResource.decreaseAmounts[i];
                if (village.resources[i].amount < 0) {
                    insufficientResources = true;
                }
            }

            village.time = TimeService.addTime(currentResource.timeToGather, village.time);

            if(insufficientResources || !StorageService.saveVillage(village)) {
                village.resources = oldResources;
                village.time = oldTime;
            }

            return village;
        },
        getVillage: function() {
            var vil = StorageService.getVillage();
            if (vil === null) {
                village.resources = MorojaConstantsService.getBaseResources();
                village.time = TimeService.getBasicTimer();
                vil = village;
                StorageService.saveVillage(vil);
            }
            return vil;
        }


    };
};