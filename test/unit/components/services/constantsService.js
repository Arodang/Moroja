'use strict';

var chai = require('chai')
    , expect = chai.expect;

var ConstantsServiceModule = require('../../../../app/js/components/services/constantsService.js');

describe('The ConstantsService', function() {

    var ConstantsService;

    beforeEach(function() {
        ConstantsService = new ConstantsServiceModule();
    });

    describe('getResources', function() {
        it('should return a resources object', function() {
            var resources = ConstantsService.getResources();
            expect(resources).to.be.a('object');
            var i;
            for(i in resources) {
                var res = resources[i];
                expect(res).to.have.property('name');
                expect(res).to.have.property('baseAmount');
                expect(res).to.have.property('increaseAmounts');
                expect(res).to.have.property('decreaseAmounts');
                expect(res).to.have.property('timeToGather');
                expect(res).to.have.property('resourceKey');
                expect(res).to.have.property('gatherDescription');
            };
        });
    });

    describe('getBaseResources', function() {
        it('should return resources with specific fields on it', function() {
            var resources = ConstantsService.getBaseResources();
            var i;
            for(i in resources) {
                var res = resources[i];
                expect(res).to.have.property('amount');
                expect(res).to.have.property('description');
                expect(res).to.have.property('name');
                expect(res).to.have.property('resKey');
            };

        });
    });

});
