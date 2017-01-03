function Clock() {}

Clock.prototype.getTime = function() {
    this.currentTime = moment();
};

exports.clockModule = Clock;
