'use strict';

var chai = require('chai')
    , expect = chai.expect;

var TimeServiceModule = require('../../../../app/js/components/services/timeService.js');

describe('The TimeService\'s', function() {
        var TimeService;

        beforeEach(function() {
            TimeService = new TimeServiceModule();
        });

        describe('getTimer', function() {
            it('should return a time service', function() {
                var time = TimeService.getTimer();
                expect(time).to.be.a('object');
                expect(time).to.have.property('time');
                expect(time).to.have.property('day');
                expect(time).to.have.property('displayDay');
                expect(time).to.have.property('displayTime');
            });
        });

        describe('getBasicTime', function() {
            it('should return a basic time service', function() {
                var time = TimeService.getBasicTimer();
                expect(time).to.be.a('object');
                expect(time).to.have.property('time');
                expect(time).to.have.property('day');
                expect(time).to.have.property('displayDay');
                expect(time).to.have.property('displayTime');
            });
        });

        describe('addTime', function() {
            it('should return a time service with a new time', function() {
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