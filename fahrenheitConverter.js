// Variable for Kelvin temperature
let kelvin = 300;
// Variable for Celsius converted equivalent of Kelvin
let celsius = kelvin - 273;
// Variable for Fahrenheit conversion of Celsius
let fahrenheit = Math.floor((celsius * (9/5)) + 32);
//Rounding down the fahrenheit decimal
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
