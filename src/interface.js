var thermostat = new Thermostat();

$( "#Thermostat-up" ).click(function(){
  thermostat.up();
  $( "#Thermostat-getTemperature" ).text(thermostat.getTemperature());
});

$( "#Thermostat-down" ).click(function(){
  thermostat.down();
  $( "#Thermostat-getTemperature" ).text(thermostat.getTemperature());
});

$( "#Thermostat-resetTemp" ).click(function(){
  thermostat.resetTemp();
  $( "#Thermostat-getTemperature" ).text(thermostat.getTemperature());
});

$( "#Thermostat-powerModeSwitch" ).click(function(){
  thermostat.powerModeSwitch();
  $( "#Thermostat-getTemperature" ).text(thermostat.getTemperature());
  $( "#Thermostat-isPowerSavingOn" ).text(function() { if(thermostat.isPowerSavingOn()) {
     return "on";
    } else {
     return "off";
    }});
  });
