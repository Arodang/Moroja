'use strict';

var chai = require('chai')
    , expect = chai.expect
    , sinon = require('sinon');

var VillageServiceModule = require('../../../../app/village/services/villageService.js');

describe('The VillageService\'s', function() {

    var VillageService;
    var StorageService;
    var ConstantsService;
    var TimeService;
    var village;
    var baseValues;
    var buildingStats;

    beforeEach(function() {
        village = {
            description: "Hello",
            resources: {
                "lumber" : {
                    amount : 5
                },
                "firewood" : {
                    amount : 5
                }
            },
            buildings: {
                "sawMill" : {
                    "level" : 0
                }
            },
            time: {}
        };

        baseValues = {
            "lumber" : {
                "increaseAmounts" : {
                    "lumber": 3
                },
                "decreaseAmounts": {}
            },
            "firewood" : {
                "increaseAmounts" : {
                    "firewood": 5
                },
                "decreaseAmounts": {
                    "lumber": 1
                }
            }
        };

        buildingStats = {
            "sawMill": {
                "resourceMultipliers": {
                    "lumber": 1.25
                }
            }
        };

        StorageService = {
            saveVillage : sinon.stub().returns(true),
            getVillage: sinon.stub().returns(village)
        };

        ConstantsService = {
            getResources : sinon.stub().returns(baseValues),
            getBaseResources : sinon.stub().returns(village),
            getBuildings : sinon.stub().returns(buildingStats)
        };

        TimeService = {
            getBasicTimer : sinon.stub().returns({}),
            addTime : sinon.stub().returns({})
        };

        VillageService = new VillageServiceModule(StorageService, ConstantsService, TimeService);
    });

    describe('addResource', function() {
        it('should return an increased amount of lumber when called for lumber', function() {
            var response = VillageService.addResource("lumber", village);

            expect(StorageService.saveVillage).to.have.been.called;
            expect(response.resources.lumber.amount).to.equal(8);
        });

        it('should increase firewood and decrease lumber when called for firewood', function() {
            var response = VillageService.addResource("firewood", village);

            expect(StorageService.saveVillage).to.have.been.called;
            expect(response.resources.lumber.amount).to.equal(4);
            expect(response.resources.firewood.amount).to.equal(10);
        });

        it('should return the original resources if StorageService.saveVillage returns false', function() {
            StorageService.saveVillage = sinon.stub().returns(false);

            var response = VillageService.addResource("lumber", village);

            expect(StorageService.saveVillage).to.have.been.called;
            expect(response).to.equal(village);
        });

        it('should return original resources if there are insufficient resources', function() {
            StorageService.saveVillage = sinon.stub().returns(true);
            village.resources.lumber.amount = 0;

            var response = VillageService.addResource("firewood", village);

            expect(StorageService.saveVillage).not.to.have.been.called;
            expect(response).to.equal(village);
        });

        it('should apply the resource multiplier to lumber if the village has a Saw Mill', function() {
            village.buildings["sawMill"].level = 1;

            var response = VillageService.addResource("lumber", village);

            expect(StorageService.saveVillage).to.have.been.called;
            expect(response.resources.lumber.amount).to.equal(5 + 3*1.25);
        });
    });

    describe('buyBuilding', function() {
        it('should make the Saw Mill level 1 after buying that building', function () {
            var response = VillageService.buyBuilding("sawMill", village);

            expect(StorageService.saveVillage).to.have.been.called;
            expect(response.buildings["sawMill"].level).to.equal(1);
        });

        it('should not change the level of Saw Mill if StorageService.saveVillage fails', function () {
            StorageService.saveVillage = sinon.stub().returns(false);

            var response = VillageService.buyBuilding("sawMill", village);

            expect(StorageService.saveVillage).to.have.been.called;
            expect(response.buildings["sawMill"].level).to.equal(0);
        });
    });

    describe('getVillage', function() {
        it('should get the village from StorageService.getVillage', function() {
            var response = VillageService.getVillage();

            expect(StorageService.getVillage).to.have.been.called;
            expect(ConstantsService.getBaseResources).not.to.have.been.calledAfter(StorageService.getVillage);
            expect(response).to.equal(village);
        });

        it('should use the base resources if StorageService.getVillage returns null', function() {
            StorageService.getVillage = sinon.stub().returns(null);

            var response = VillageService.getVillage();

            expect(StorageService.getVillage).to.have.been.called;
            expect(ConstantsService.getBaseResources).to.have.been.called;
            expect(StorageService.saveVillage).to.have.been.called;
            expect(response.resources).to.equal(village);
        });
    });
});

