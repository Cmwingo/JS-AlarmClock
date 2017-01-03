var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/template.js').templateModule;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    var currentWeatherObject = new Weather();
    currentWeatherObject.getWeather();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
