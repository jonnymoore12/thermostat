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

});
