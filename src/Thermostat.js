Thermostat = function(){
  this.temperature = 20;
  this.powerSaving = false;
};

Thermostat.prototype.temperature = function () {
  return this.temperature;
};

Thermostat.prototype.isPowerSavingOn = function () {
  return this.powerSaving === true;
};

Thermostat.prototype.up = function () {
  if ((this.isPowerSavingOn) && (this.temperature === 25)) {
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
  } else {
    this.powerSaving = true;
  };
};

  // Thermostat.prototype.down = function () {
  //   if (this.temperature === 10) {
  //     throw new Error("So cold, you CRAZY!!");
  //   }
  //   return this.temperature -= 1
  //   };
  //
