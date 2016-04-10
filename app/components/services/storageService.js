 module.exports = function (localStorageService) {
    return {
        saveVillage: function(vil) {
            return localStorageService.set('village', vil);
        },
        getVillage: function() {
            return localStorageService.get('village')
        },
        resetVillage: function() {
            return localStorageService.set('village', null);
        }
    };
};