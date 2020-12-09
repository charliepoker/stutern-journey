/*-------Temperture Coverter----------*/

// From celcius to fahrenheit

function calcFahrenheit(celcius) {
  const celciusTemp = celcius * 1.8 + 32;
  return celciusTemp;
}

const temperature = calcFahrenheit(50);
console.log(temperature);

// From Fahrenheit to celcius

function calcCelsius(fahrenheit) {
  const fahrenheitTemp = (fahrenheit - 32) / 1.8;
  return fahrenheitTemp;
}

const temperature = calcCelsius(50);
console.log(temperature);
