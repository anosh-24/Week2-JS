// function declaration
console.log("the function is")
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Example

const fahrenheit = 68;
const celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${celsius}°C`);

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}

// Example
const fahrenheit = 78;
const kelvin = fahrenheitToKelvin(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${kelvin} K`);

// checks if number is Even or Odd
function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example
console.log(isEven(40));  // Output: "Even"
console.log(isEven(41));  // Output: "Odd"


