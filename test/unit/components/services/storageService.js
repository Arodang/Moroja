'use strict';

var chai = require('chai')
    , expect = chai.expect
    , sinon = require('sinon');

var StorageServiceModule = require('../../../../app/js/components/services/storageService.js');

describe('The ConstantsService', function() {

    var StorageService;
    var localStorageService;
    var returnVal = "Hello World";
    var village = {
        desc: "Hello"
    };
    var storageKey = 'village';

    beforeEach(function() {
        localStorageService = {
            set : sinon.stub().returns(returnVal),
            get : sinon.stub().returns(returnVal)
        };
        StorageService = new StorageServiceModule(localStorageService);
    });

    describe('saveVillage', function() {
        it('should call localStorageService.set', function() {
            StorageService.saveVillage(village);
            expect(localStorageService.set).to.have.been.calledWith(storageKey, village);
        });
    });

    describe('getVillage', function() {
        it('should call localStorageService.get', function() {
            StorageService.getVillage(village);
            expect(localStorageService.get).to.have.been.called;
        });
    });
    describe('resetVillage', function() {
        it('should call localStorageService.set with null', function() {
            StorageService.resetVillage(village);
            expect(localStorageService.set).to.have.been.calledWith(storageKey, null);
        });
    });

});
