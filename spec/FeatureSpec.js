

describe('Thermostat', function(){
  var thermostat;
  // Thermostat starts at 20 degrees
  beforeEach (function(){
    thermostat = new Thermostat();
  });

  it('initializes at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  // You can increase the temperature with the up button
  // USE CHANGE_BY (OR EQUIVALENT) SO WE DON'T HARDCODE 21
  it('increases the temperature by 1 degree when you press the up button',function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  // You can decrease the temperature with the down button
    // USE CHANGE_BY (OR EQUIVALENT) SO WE DON'T HARDCODE 19
  it('decreases the temperature by 1 degree when you press the down button', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  // The minimum temperature is 10 degrees
  it('cannot drop below 10 degrees',function(){
    var times = 10;
    for(var i=0;
      i < times;
      i++) {
        thermostat.down();
      };
    expect(thermostat.down).toThrow(new Error("So cold, you CRAZY!!"));
  });

  // If power saving mode is on, the maximum temperature is 25 degrees
  it('starts with safe mode turned off', function(){
    expect(thermostat.isPowerSavingOn()).toEqual(false);
  });
  it('maximum temperatures is 25 degrees when safe mode is on', function(){
    thermostat.powerModeSwitch();
    var times = 5;
    for(var i=0;
      i < times;
      i++) {
        thermostat.up();
      };
      expect(thermostat.up).toThrow(new Error("It's gettin' hot in here!"));
  });
});
