module.exports = function () {
    var timer = {
        day: 0,
        time: 0,

        addTime: function(addedTime) {
            if(timer.time < 24) {
                timer.time += addedTime;
            }
            else {
                timer.time = 0;
                timer.day += 1;
            }
        }
    };
    var getTimer = function() {
        return timer
    };

    return {
        getTimer : getTimer
    }
};