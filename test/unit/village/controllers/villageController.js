'use strict';

var chai = require('chai')
    , expect = chai.expect
    , sinon = require('sinon')
    , sinonChai = require('sinon-chai');

chai.use(sinonChai);

var VillageControllerModule = require('../../../../app/village/controllers/villageController.js');

describe('The VillageController\'s', function() {

    var village;
    var $scope;
    var VillageService;

    beforeEach(function() {
        village = {
            description: "hello world"
        };

        $scope = {
            $on: sinon.stub().returns()
        };

        VillageService = {
            getVillage: sinon.stub().returns(village),
            addResource: sinon.stub().returns(),
            buyBuilding: sinon.stub().returns(),
            resetVillage: sinon.stub().returns()
        };


        VillageControllerModule($scope, VillageService);
    });

    describe('initialization', function() {
        it('should get the village', function() {
            expect($scope.village).to.equal(village);
            expect(VillageService.getVillage).to.have.been.called;
        });
    });

    describe('function', function() {
        it('gatherResources should add resources', function() {
            $scope.gatherResources("resKey");

            expect(VillageService.addResource).to.have.been.calledWith("resKey");
        });

        it('resetStorage should reset village and get base village', function() {
            $scope.resetStorage();

            expect(VillageService.resetVillage).to.have.been.called;
        });

        it('buyBuilding should buy a building', function() {
            $scope.buyBuilding("well");

            expect(VillageService.buyBuilding).to.have.been.calledWith("well");
        });
    });

});
