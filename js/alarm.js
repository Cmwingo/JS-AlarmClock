function Clock() {
  this.currentTime = new Date();
}

Clock.prototype.updateTime = function() {
    this.currentTime = moment();
};

exports.clockModule = Clock;
