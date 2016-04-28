'use strict';

var chai = require('chai')
    , expect = chai.expect;

var TimeServiceModule = require('../../../../app/shared/services/timeService.js');

describe('The TimeService\'s', function() {
        var TimeService;

        beforeEach(function() {
            TimeService = new TimeServiceModule();
        });

        describe('getBasicTimer', function() {
            it('should return a basic time service with a time and day of zero', function() {
                var time = TimeService.getBasicTimer();
                expect(time).to.be.a('object');
                expect(time).to.have.property('time');
                expect(time).to.have.property('day');
                expect(time).to.have.property('displayDay');
                expect(time).to.have.property('displayTime');
                expect(time.time).to.equal(0);
                expect(time.day).to.equal(0);
                expect(time.displayDay).to.equal("Day 0");
                expect(time.displayTime).to.equal("Time 0:00");
            });
        });

        describe('addTime', function() {
            it('should return a time service with a new time object with the specified added time', function() {
                var time = TimeService.getBasicTimer();
                time = TimeService.addTime(2, time);
                expect(time).to.be.a('object');
                expect(time).to.have.property('time');
                expect(time).to.have.property('day');
                expect(time).to.have.property('displayDay');
                expect(time).to.have.property('displayTime');
                expect(time.time).to.equal(2);
                expect(time.day).to.equal(0);
                expect(time.displayDay).to.equal("Day 0");
                expect(time.displayTime).to.equal("Time 2:00");
            });
        });
    }
);