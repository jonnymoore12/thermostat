Thermostat = function(){
  this.temperature = 20;
  this.powerSaving = true;
  this.MAX_TEMP = 25;
};

Thermostat.prototype.temperature = function () {
  return this.temperature;
};

Thermostat.prototype.isPowerSavingOn = function () {
  return this.powerSaving === true;
};

Thermostat.prototype.up = function () {
  if (this.temperature === this.MAX_TEMP) {
    throw new Error("It's gettin' hot in here!");
  } else {
    return this.temperature += 1
  };
};

Thermostat.prototype.down = function () {
  if (this.temperature > 10) {
    return this.temperature -= 1
  } else {
    throw new Error("So cold, you CRAZY!!");
  };
};

Thermostat.prototype.powerModeSwitch = function () {
  if (this.isPowerSavingOn()) {
    this.powerSaving = false;
    this.MAX_TEMP = 32
  } else {
    this.powerSaving = true;
    this.MAX_TEMP = 25
  };
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = 20
};

  // Thermostat.prototype.down = function () {
  //   if (this.temperature === 10) {
  //     throw new Error("So cold, you CRAZY!!");
  //   }
  //   return this.temperature -= 1
  //   };
  //
