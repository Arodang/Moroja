module.exports = function () {
    var timer = {
        day: "current day",
        time: "current time"
    };
    var getTimer = function() {
        return timer
    };
    return {
        getTimer : getTimer
    }
};