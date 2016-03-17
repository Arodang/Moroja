'use strict';

var chai = require('chai')
    , expect = chai.expect
    , sinon = require('sinon');

var VillageServiceModule = require('../../../../app/js/village/services/villageService.js');

describe('The VillageService\'s', function() {

    var VillageService;
    var StorageService;
    var ConstantsService;
    var village;
    var baseValues;
    var TimeService;
    var time;

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
            time: {
                "day": 0,
                "time": 0,
                "displayTime": "Time 00:00",
                "displayDay": "Day 0"
            }
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

        time = {
            "day": 0,
            "time": 0,
            "displayTime": "Time 00:00",
            "displayDay": "Day 0"
        };

        StorageService = {
            saveVillage : sinon.stub().returns(true),
            getVillage: sinon.stub().returns(village)
        };

        ConstantsService = {
            getResources : sinon.stub().returns(baseValues),
            getBaseResources : sinon.stub().returns(village)
        };

        TimeService = {
            getTimer : sinon.stub().returns(time),
            getBasicTimer: sinon.stub().returns(time),
            addTime: sinon.stub().returns(time)
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

