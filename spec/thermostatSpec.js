'use-strict';

describe('Thermostat', function(){
  var thermostat;
  // Thermostat starts at 20 degrees
  beforeEach (function(){
    thermostat = new Thermostat();
  });

  it('initializes at 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  // You can increase the temperature with the up button
  // USE CHANGE_BY (OR EQUIVALENT) SO WE DON'T HARDCODE 21
  it('increases the temperature by 1 degree when you press the "up" button',function(){
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  // You can decrease the temperature with the down button
    // USE CHANGE_BY (OR EQUIVALENT) SO WE DON'T HARDCODE 19
  it('decreases the temperature by 1 degree when you press the "down" button', function(){
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  // The minimum temperature is 10 degrees
  it('cannot drop below 10 degrees',function(){
    for (i = 0; i < 11; i++) {
        thermostat.down();
      };
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('can reset the temperature to 20', function(){
    for (i = 0; i < 5; i++) {
        thermostat.up();
      };
    expect(thermostat.getTemperature()).toEqual(25);
    thermostat.resetTemp();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('starts with Power Saving Mode turned on', function(){
    expect(thermostat.isPowerSavingOn()).toEqual(true);
  });

  describe('When Power Saving Mode is on', function(){
    it('maximum temperature is 25 degrees', function(){
      for (i = 0; i < 6; i++) {
          thermostat.up();
        };
        expect(thermostat.getTemperature()).toEqual(25);
    });
    it('Power Saving Mode can be turned off', function(){
      thermostat.powerModeSwitch();
      expect(thermostat.isPowerSavingOn()).toEqual(false);
    });
  });

  describe('When Power Saving Mode is NOT on', function(){
    beforeEach(function(){
      thermostat.powerModeSwitch();
    });
    it('maximum temperature is 32 degrees', function() {
      for (i = 0; i < 13; i++) {
          thermostat.up();
        };
        expect(thermostat.getTemperature()).toEqual(32);
    });
    it('Power Saving Mode can be turned back on', function(){
      thermostat.powerModeSwitch();
      expect(thermostat.isPowerSavingOn()).toEqual(true);
    });
  });

  // The thermostat should colour the display based on energy usage
  // - < 18 is green, < 25 is yellow, otherwise red.
  describe('Display Colour', function(){
    it('shows GREEN when temperature < 18', function(){
      for (i = 0; i < 3; i++) {
        thermostat.down();
      };
      expect(thermostat.temperature).toEqual(17);
      expect(thermostat.getEnergyLevel(thermostat.temperature)).toEqual("Low-Energy");
    });
    it('shows YELLOW when temperature equal to 18 and less than 25', function(){
      expect(thermostat.temperature).toEqual(20);
      expect(thermostat.getEnergyLevel(thermostat.temperature)).toEqual("Medium-Energy");
    });
    it('shows RED when temperature 25 or greater', function(){
      for (i = 0; i < 5; i++) {
        thermostat.up();
      };
        expect(thermostat.temperature).toEqual(25);
        expect(thermostat.getEnergyLevel(thermostat.temperature)).toEqual("High-Energy");
    });
  });
});
