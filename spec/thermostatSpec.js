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
    for (i = 0; i < 10; i++) {
        thermostat.down();
      };
    expect(thermostat.down).toThrow(new Error("So cold, you CRAZY!!"));
  });

  // If power saving mode is on, the maximum temperature is 25 degrees
  it('starts with safe mode turned on', function(){
    expect(thermostat.isPowerSavingOn()).toEqual(true);
  });
  it('maximum temperature is 25 degrees when safe mode is on', function(){
    for (i = 0; i < 5; i++) {
        thermostat.up();
      };
      expect(thermostat.up).toThrow(new Error("It's gettin' hot in here!"));
  });

  it('maximum temperature is 32 degrees when safe mode is off', function() {
    thermostat.powerModeSwitch();
    for (i = 0; i < 12; i++) {
        thermostat.up();
      };
      expect(thermostat.up).toThrow(new Error("It's gettin' hot in here!"));
  });

  it('can reset the temperature to 20', function(){
    for (i = 0; i < 5; i++) {
        thermostat.up();
      };
    expect(thermostat.temperature).toEqual(25);
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);
  });

  // The thermostat should colour the display based on energy usage
  // - < 18 is green, < 25 is yellow, otherwise red.
  describe('Display Colour', function(){
    it('shows GREEN when temperature < 18', function(){
      for (i = 0; i < 3; i++) {
        thermostat.down();
      };
      expect(thermostat.temperature).toEqual(17);
      expect(thermostat.displayColour(thermostat.temperature)).toEqual("GREEN");
    });
    it('shows YELLOW when temperature equal to 18 and less than 25', function(){
      expect(thermostat.temperature).toEqual(20);
      expect(thermostat.displayColour(thermostat.temperature)).toEqual("YELLOW");
    });
    it('shows RED when temperature 25 or greater', function(){
      for (i = 0; i < 5; i++) {
        thermostat.up();
      };
        expect(thermostat.temperature).toEqual(25);
        expect(thermostat.displayColour(thermostat.temperature)).toEqual("RED");
    });
  });

});
