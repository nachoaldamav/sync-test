module.exports = {
  _timesOrOne: function(times) {
    return times ? times : 1;
  },
  _internalValidator: function(str, times, validator) {
    if (!times)
      return validator(str)

    var count = 0;
    for (var i = 0; i < str.length; i++)
      if (validator(str.charAt(i)))
        count ++

    return count >= times;
  },
  _upperCase: function(str){
    return str.toLowerCase() !== str;
  },
  _lowerCase: function(str){
    return str.toUpperCase() !== str;
  },
  hasLowerCase: function (str, times) {
    return this._internalValidator(str, times, this._lowerCase);
  },
  hasUpperCase: function(str, times) {
    return this._internalValidator(str, times, this._upperCase);
  },
  hasNumber: function(str, times) {
    return str.replace(/[^0-9]/g,"").length >= this._timesOrOne(times);
  },
  hasSpecialCharacter: function(str, times) {
    return str.replace(/[^\W_]/g,"").length >= this._timesOrOne(times);
  },
};
