 module.exports = function (StorageService) {
    return {
        addFood: function(village) {
            village.resources.food += 5;
            if (StorageService.saveVillage(village)) {
                return village;
            }
            else {
                village.resources.food -= 5;
                return village;
            }

        },
        getVillage: function() {
            return StorageService.getVillage();
        }


    };
};