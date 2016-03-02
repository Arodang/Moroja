module.exports = function () {
    var timer = {
        day: "current day",
        time: "current time"
    };
    var getTimer = function() {
        return timer
    };
    var getDate = function() {
        return timer.day;
    };
    return {
        getTimer : getTimer
    }
};