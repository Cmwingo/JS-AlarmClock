var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function() {
  var timer = new Clock();
  timer.updateTime();
  var time = timer.currentTime;
  var alarmTime = moment().hour(23).minute(59).second(0);
  var alarmMoment;

  $("#alarm").submit(function(event) {
    event.preventDefault();
    alert("Submission");
    alarmTime = $("#alarm-time").val();
    console.log("Alarm Time is:" + alarmTime);
  });
  setInterval(function() {
    timer.updateTime();
    time = timer.currentTime;
    console.log(time);
    console.log(alarmTime);
    if(moment().isSameOrAfter(alarmTime)) {
      alert("Alarm!!");
    }
  }, 1000);
});
