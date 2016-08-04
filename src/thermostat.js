Thermostat = function(){
  this.temperature = 20;
  this.powerSaving = true;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.LOW_ENERGY_LIMIT = 18;
  this.MEDIUM_ENERGY_LIMIT = 25;
  this.PSM_MAX = 25;
  this.NON_PSM_MAX = 32;
};

Thermostat.prototype.getTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.isPowerSavingOn = function () {
  return this.powerSaving === true;
};

Thermostat.prototype.up = function () {
  if (this.temperature === this.MAX_TEMP) {
    throw new Error("It's gettin' hot in here!");
  } else {
    return this.temperature += 1;
  };
};

Thermostat.prototype.down = function () {
  if (this.temperature === this.MIN_TEMP) {
    throw new Error("So cold, you CRAZY!!");
  } else {
    return this.temperature -= 1;
  };
};

Thermostat.prototype.powerModeSwitch = function () {
  if (this.isPowerSavingOn()) {
    this.powerSaving = false;
    this.MAX_TEMP = this.NON_PSM_MAX;
  } else {
    this.powerSaving = true;
    this.MAX_TEMP = this.PSM_MAX;
  };
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = 20;
};

Thermostat.prototype.getDisplayColour = function (temperature) {
  if (temperature < this.LOW_ENERGY_LIMIT) {
    return "GREEN";
  } else if (temperature < this.MEDIUM_ENERGY_LIMIT) {
    return ("YELLOW");
  } else {
    return "RED";
  };
};
