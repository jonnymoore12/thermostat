$(document).ready(function(){
  var thermostat = new Thermostat();
  $('#getTemperature').text(thermostat.getTemperature());

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
