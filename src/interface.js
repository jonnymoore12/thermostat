$(document).ready(function(){
  var thermostat = new Thermostat();
  $('#Thermostat-getTemperature').text(thermostat.getTemperature());

  $( "#Thermostat-up" ).click(function(){
    thermostat.up();
    // $( "#Thermostat-getTemperature" ).text(thermostat.getTemperature()).css("color", function(){
    //   if(thermostat.getEnergyLevel(thermostat.getTemperature()) === "Low-Energy"){
    //     return "green";
    //   } else if (thermostat.getEnergyLevel(thermostat.getTemperature()) === "Medium-Energy"){
    //     return "yellow";
    //   } else {
    //   return "red";
    //   };
    // });
  });

  $( "#Thermostat-down" ).click(function(){
    thermostat.down();
    // $( "#Thermostat-getTemperature" ).text(thermostat.getTemperature());
  });

  $( "#Thermostat-resetTemp" ).click(function(){
    thermostat.resetTemp();
    // $( "#Thermostat-getTemperature" ).text(thermostat.getTemperature());
  });

  $( "#Thermostat-powerModeSwitch" ).click(function(){
    thermostat.powerModeSwitch();
    // $( "#Thermostat-getTemperature" ).text(thermostat.getTemperature());
    $( "#Thermostat-isPowerSavingOn" ).text(function() { if(thermostat.isPowerSavingOn()) {
       return "on";
      } else {
       return "off";
    }});
  });

  $("button").click(function(){
    $( "#Thermostat-getTemperature" ).text(thermostat.getTemperature()).css("color", function(){
      if(thermostat.getEnergyLevel(thermostat.getTemperature()) === "Low-Energy"){
        return "green";
      } else if (thermostat.getEnergyLevel(thermostat.getTemperature()) === "Medium-Energy"){
        return "yellow";
      } else {
      return "red";
      };
    });
  });

  $.ajax({
    url: "http://api.wunderground.com/api/fb3946a1b0abcf37/conditions/q/UK/London.json",
    dataType: 'json',
    success: function(data){
      alert( "The curret temperature in Londin is: " + data.current_observation.temp_c );
    }
  });

});
