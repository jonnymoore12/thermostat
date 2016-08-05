var thermostat = new Thermostat();

$(document).ready(function(){
  displayWeather('London');

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
    updateTemperature();
  });

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
      $('#getTemperature').text(Math.round(data.main.temp));
    })
  };




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
