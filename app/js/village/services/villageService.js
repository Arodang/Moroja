 module.exports = function (StorageService, MorojaConstantsService, TimeService) {
     var village = {
         description : "Your village is tiny, with only a few inhabitants. Smoke curls from your " +
         "cabin's chimney, but the cold wind warns you to gather more firewood before night hits.",
         resources: {
         },
         time: TimeService.getBasicTimer()
     };
     console.log("init", village);

     village.resources = MorojaConstantsService.getBaseResources();

     var BASE_VALUES = MorojaConstantsService.getResources();
    return {
        addResource: function(key, village) {
            //Icky way to get around JS using references and not being able to save separate values.
            var oldResources = JSON.parse(JSON.stringify(village.resources));
            console.log("init1", village);
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
            else{
                console.log("Get resource ", village);
                village.time.addTime(currentResource.timeToGather);
            }

            return village;
        },
        getVillage: function() {
            var vil = StorageService.getVillage();
            if (vil === null) {
                console.log("hello world");
                village.resources = MorojaConstantsService.getBaseResources();
                village.time = TimeService.getBasicTimer();
                vil = village;
                console.log("get village ", vil);
                StorageService.saveVillage(vil);
            }
            return vil;
        }


    };
};