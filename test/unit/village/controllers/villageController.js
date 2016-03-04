'use strict';

var chai = require('chai')
    , expect = chai.expect
    , sinon = require('sinon')
    , sinonChai = require('sinon-chai');

chai.use(sinonChai);

var VillageControllerModule = require('../../../../app/js/village/controllers/villageController.js');

describe('The VillageController\'s', function() {

    var village;
    var $scope;
    var VillageService;
    var StorageService;
    var resKey = "lumber";

    beforeEach(function() {
        village = {
            description: "hello world"
        };

        $scope = {};

        VillageService = {
            getVillage: sinon.stub().returns(village),
            addResource: sinon.stub().returns(village)
        };

        StorageService = {
            resetVillage: sinon.spy()
        }

        VillageControllerModule($scope, VillageService, StorageService);
    });

    describe('initialization', function() {
        it('should get the village', function() {
            expect($scope.village).to.equal(village);
            expect(VillageService.getVillage).to.have.been.called;
        });
    });

    describe('function', function() {
        it('gatherResources should add resources', function() {
            $scope.gatherResources(resKey);
            expect($scope.village).to.equal(village);
            expect(VillageService.addResource).to.have.been.calledWith(resKey, $scope.village);
        });

        it('resetStorage should reset village and get base village', function() {
            $scope.resetStorage();
            expect($scope.village).to.equal(village);
            expect(StorageService.resetVillage).to.have.been.called;
        });
    });

});
