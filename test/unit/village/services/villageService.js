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
    var $rootScope;
    var resourceSchema;
    var village;
    var buildingSchema;

    beforeEach(function() {
        village = {
            description: "Your village is tiny, with only a few inhabitants. Smoke curls from your " +
            "cabin's chimney, but the cold wind warns you to gather more firewood before night hits.",
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

        resourceSchema = {
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

        buildingSchema = {
            "sawMill": {
                "name": "Saw Mill",
                "description": "A factory where machines saw logs into lumber.",
                "resourceMultipliers": {
                    "lumber": 1.25
                }
            }
        };

        StorageService = {
            saveVillage : sinon.stub().returns(true),
            getVillage: sinon.stub().returns(null),
            resetVillage: sinon.stub().returns()
        };

        ConstantsService = {
            getResourceSchema : sinon.stub().returns(resourceSchema),
            getResources : sinon.stub().returns(village.resources),
            getBuildingSchema : sinon.stub().returns(buildingSchema)
        };

        TimeService = {
            getBasicTimer : sinon.stub().returns(true),
            addTime : sinon.stub().returns(false)
        };

        $rootScope = {
            $broadcast: sinon.stub().returns({})
        };

        VillageService = new VillageServiceModule(StorageService, ConstantsService, TimeService, $rootScope);
    });

    describe('addResource', function() {
        it('should increase the amount of lumber when called for lumber', function() {
            VillageService.addResource("lumber");
            var vil = VillageService.getVillage();

            expect(StorageService.saveVillage).to.have.been.called;
            expect(TimeService.addTime).to.have.been.called;
            expect($rootScope.$broadcast).to.have.been.called.twice;
            expect(vil.resources.lumber.amount).to.equal(8);
        });

        it('should increase firewood and decrease lumber when called for firewood', function() {
            VillageService.addResource("firewood");
            var vil = VillageService.getVillage();

            expect(StorageService.saveVillage).to.have.been.called;
            expect(TimeService.addTime).to.have.been.called;
            expect($rootScope.$broadcast).to.have.been.called.twice;
            expect(vil.resources.lumber.amount).to.equal(4);
            expect(vil.resources.firewood.amount).to.equal(10);
        });

        it('should not change resources if StorageService.saveVillage returns false', function() {
            StorageService.saveVillage = sinon.stub().returns(false);
            var vil = VillageService.getVillage();

            VillageService.addResource("lumber");

            expect(TimeService.addTime).to.have.been.called;
            expect($rootScope.$broadcast).to.have.been.called.once;
            expect(StorageService.saveVillage).to.have.been.called.twice;
            expect(vil.resources.lumber.amount).to.equal(5);
        });

        it('should not change resources if there are insufficient resources', function() {
            StorageService.saveVillage = sinon.stub().returns(true);
            village.resources.lumber.amount = 0;

            VillageService.addResource("firewood");
            var vil = VillageService.getVillage();

            expect(TimeService.addTime).not.to.have.been.called;
            expect($rootScope.$broadcast).to.have.been.called.once;
            expect(StorageService.saveVillage).not.to.have.been.called;
            expect(vil.resources.lumber.amount).to.equal(0);
        });

        it('should apply the resource multiplier to lumber if the village has a Saw Mill', function() {
            VillageService.buyBuilding("sawMill");

            VillageService.addResource("lumber");
            var vil = VillageService.getVillage();

            expect(StorageService.saveVillage).to.have.been.called;
            expect(TimeService.addTime).to.have.been.called;
            expect($rootScope.$broadcast).to.have.been.called.twice;
            expect(vil.resources.lumber.amount).to.equal(5 + 3*1.25);
        });
    });

    describe('buyBuilding', function() {
        it('should make the Saw Mill level 1 after buying that building', function () {
            VillageService.buyBuilding("sawMill");
            var vil = VillageService.getVillage();

            expect(StorageService.saveVillage).to.have.been.called;
            expect($rootScope.$broadcast).to.have.been.called.twice;
            expect(vil.buildings["sawMill"].level).to.equal(1);
        });

        it('should not change the level of Saw Mill if StorageService.saveVillage fails', function () {
            StorageService.saveVillage = sinon.stub().returns(false);

            VillageService.buyBuilding("sawMill");
            var vil = VillageService.getVillage();

            expect(StorageService.saveVillage).to.have.been.called;
            expect($rootScope.$broadcast).to.have.been.called.once;
            expect(vil.buildings["sawMill"].level).to.equal(0);
        });
    });

    describe('getVillage', function() {
        it('should return the village', function() {
            var vil = VillageService.getVillage();

            expect(vil.resources).to.equal(village.resources);
            expect(vil.time).to.equal(true);
            expect(vil.buildings).to.not.be.null;
        });
    });

    describe('createVillage', function() {
        it('should populate description, buildings, resources, and time', function() {
            //createVillage gets called as part of initialization as long as getVillage returns null
            var vil = VillageService.getVillage();

            expect(vil.resources).to.equal(village.resources);
            expect(vil.time).to.equal(true);
            expect(vil.buildings).to.not.be.null;
            expect(StorageService.saveVillage).to.have.been.called;
            expect(ConstantsService.getResources).to.have.been.called;
            expect(TimeService.getBasicTimer).to.have.been.called;
        });
    });

    describe('broadcastVillage', function() {
        it('should call $rootScope.$broadcast', function() {
            //Broadcast gets called as part of initialization
            expect($rootScope.$broadcast).to.have.been.called;
        });
    });

    describe('resetVillage', function() {
        it('should call StorageService.resetVillage, populate village, broadcast', function() {
            VillageService.resetVillage();
            var vil = VillageService.getVillage();

            expect(vil.resources).to.equal(village.resources);
            expect(vil.time).to.equal(true);
            expect(vil.buildings).to.not.be.null;
            expect(StorageService.saveVillage).to.have.been.called.twice;
            expect(ConstantsService.getResources).to.have.been.called.twice;
            expect(TimeService.getBasicTimer).to.have.been.called.twice;
            expect($rootScope.$broadcast).to.have.been.called.twice;
        });
    });
});

