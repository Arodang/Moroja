 module.exports = function (StorageService, MorojaConstantsService) {
     var village = {
         description : "Your village is tiny, with only a few inhabitants. Smoke curls from your " +
         "cabin's chimney, but the cold wind warns you to gather more firewood before night hits.",
         resources: {
         }
     };

     village.resources = MorojaConstantsService.getBaseResources();
     var BASE_VALUES = MorojaConstantsService.getResources();
    return {
        addResource: function(key, village) {
            //Icky way to get around JS using references and not being able to save separate values.
            var oldResources = JSON.parse(JSON.stringify(village.resources));


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

            if(insufficientResources || !StorageService.saveVillage(village)) {
                village.resources = oldResources;
            }

            return village;
        },
        getVillage: function() {
            var vil = StorageService.getVillage();
            if (vil === null) {
                village.resources = MorojaConstantsService.getBaseResources();
                vil = village;
                StorageService.saveVillage(vil);
            }
            return vil;
        }


    };
};