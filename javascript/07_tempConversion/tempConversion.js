const convertToCelsius = function(tempInFahrenheit) {
  let celsiusConversion = ((tempInFahrenheit - 32) * 5/9);
  return parseFloat(celsiusConversion.toFixed(1));
};

const convertToFahrenheit = function(tempInCelsius) {
  let FahrenheitConversion = ((tempInCelsius * 9/5) + 32)
  return parseFloat(FahrenheitConversion.toFixed(1));
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
