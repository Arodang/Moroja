module.exports = function () {
    var getBasicTimer = function() {
        var timer = {
            day: 0,
            time: 0,
            displayTime: "Time 00:00",
            displayDay: "Day 0"
        };
        return timer;
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
    };

    return {
        getBasicTimer: getBasicTimer,
        addTime: addTime
    };
};