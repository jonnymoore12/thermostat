$(document).ready(function(){
  var thermostat = new Thermostat();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6f09caafd75b95cff331a0a37350405&units=metric', function(data) {
    $('#getTemperature').text(data.main.temp);
  });

  $( "#up" ).click(function(){
    thermostat.up();
    updateTemperature();
  });

  $( "#down" ).click(function(){
    thermostat.down();
    updateTemperature();
  });

  $( "#resetTemp" ).click(function(){
    thermostat.resetTemp();
    updateTemperature();
  });

  $( "#powerModeSwitch" ).click(function(){
    thermostat.powerModeSwitch();
    $( "#isPowerSavingOn" ).text(function() { if(thermostat.isPowerSavingOn()) {
       return "on";
      } else {
       return "off";
    }});
  });

  function updateTemperature(){
    $('#getTemperature').text(thermostat.getTemperature());
    if(thermostat.getEnergyLevel(thermostat.getTemperature()) === 'Low-Energy') {
      $('#getTemperature').css('color', 'green')
    } else if(thermostat.getEnergyLevel(thermostat.getTemperature()) === 'Medium-Energy') {
      $('#getTemperature').css('color', 'yellow')
    } else {
      $('#getTemperature').css('color', 'red')
    }
  }

  displayWeather('London');

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=b6f09caafd75b95cff331a0a37350405';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#getTemperature').text(data.main.temp);
    })
  };

});




  // $("button").click(function(){
  //   $( "#getTemperature" ).text(thermostat.getTemperature()).css("color", function(){
  //     if(thermostat.getEnergyLevel(thermostat.getTemperature()) === "Low-Energy"){
  //       return "green";
  //     } else if (thermostat.getEnergyLevel(thermostat.getTemperature()) === "Medium-Energy"){
  //       return "yellow";
  //     } else {
  //     return "red";
  //     };
  //   });
  // });









  // $.ajax({
  //   url: "http://api.wunderground.com/api/7c62def172936516/conditions/q/UK/London.json",
  //   dataType: 'json',
  //   success: function(data){
  //     alert( "The current temperature in London is: " + data.current_observation.temp_c );
  //   }
  // });
