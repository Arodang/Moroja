module.exports = function () {
    var timer = {
        day: 0,
        time: 0,
        displayTime: "Time 00:00",
        displayDay: "Day 0",

        addTime: function(addedTime) {
            if(timer.time + addedTime < 24) {
                timer.time += addedTime;
            }
            else {
                timer.time = addedTime + timer.time - 24;
                timer.day += 1;
            }
            timer.displayDay = "Day " + timer.day;
            timer.displayTime = "Time " + timer.time + ":00";
        },
        resetTime: function() {
            timer.day = 0,
                timer.time = 0,
                timer.displayTime = "Time 00:00",
                timer.displayDay = "Day 0"
        }
    };
    var getTimer = function() {
        return timer
    };

    return {
        getTimer : getTimer
    }
};