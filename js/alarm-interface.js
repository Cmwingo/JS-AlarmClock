var Clock = require('./../js/alarm.js').clockModule;

$(document).ready(function() {
  $("#timer").text(moment().format("hh:mm:ss a"));
});
