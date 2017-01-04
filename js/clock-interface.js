var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function() {
  var timer = new Clock();
  timer.updateTime();
  var time = timer.currentTime;
  $("#timer").text(time.format("hh:mm:ss a"));
  setInterval(function() {
    timer.updateTime();
    time = timer.currentTime;
    $("#timer").text(time.format("hh:mm:ss a"));
    }, 1000);
});
