const convertToCelsius = function(temp) {
  let converted_temp = (temp -32) * (5/9);
  let roundedNumber = Math.round(converted_temp * 10) / 10;
  return roundedNumber;
};

const convertToFahrenheit = function(temp) {
  let converted_temp = (temp * (9/5)) + 32;
  let roundedNumber = Math.round(converted_temp * 10) / 10;
  return roundedNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
