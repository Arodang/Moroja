 module.exports = function (localStorageService) {
     var village = {
         resources : {
             food: 5,
             lumber: 5,
             water: 3,
             firewood: 2
         }
     };
    return {
        saveVillage: function(vil) {

            return localStorageService.set('village', vil);
        },
        getVillage: function() {
            var vil = localStorageService.get('village');
            if (vil === null) {
                vil = village;
            }
            return vil;
        }

    };
};