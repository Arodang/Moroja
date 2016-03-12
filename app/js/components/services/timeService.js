module.exports = function () {
    var getTimer = function() {
        var timer = {
            day: 0,
            time: 0,
            displayTime: "Time 00:00",
            displayDay: "Day 0"
        };
        return timer;
    };
    var getBasicTimer = function() {
        var basicTimer = getTimer();
        basicTimer.day = 0;
        basicTimer.time = 0;
        basicTimer.displayTime = "Time 00:00";
        basicTimer.displayDay = "Day 0";

        return basicTimer;
    };

    var addTime = function(addedTime, timer) {
        if(timer.time + addedTime < 24) {
            timer.time += addedTime;
        }
        else {
            timer.time = addedTime + timer.time - 24;
            timer.day += 1;
        }
        timer.displayDay = "Day " + timer.day;
        timer.displayTime = "Time " + timer.time + ":00";

        return timer;
    }

    return {
        getTimer : getTimer,
        getBasicTimer: getBasicTimer,
        addTime: addTime
    };
};