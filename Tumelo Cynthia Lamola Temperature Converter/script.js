// script.js
const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});

function convertToCelsius() {
  let inputValue = degree.value;

if (unit === "celsius") {
  result = convertToCelsius(temperature);
  resultElement.textContent = result + " °C";
} else if (unit === "fahrenheit") {
  result = convertToFahrenheit(temperature);
  resultElement.textContent = result + " °F";
} else if (unit === "kelvin") {
  result = convertToKelvin(temperature);
  resultElement.textContent = result + " K";
}
}
convertBtn.addEventListener("click",(e) =>{
e.preventDefault();
convertToCelsius();

function convertToCelsius(temperature) {
return (temperature - 32) * 5 / 9;
}

function convertToFahrenheit(temperature) {
return temperature * 9 / 5 + 32;
}

function convertToKelvin(temperature) {
return temperature + 273.15;
    }

})