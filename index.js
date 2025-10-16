const textbox = document.getElementById("textbox");
const fahrenheit = document.getElementById("Fahrenheit");
const celsius = document.getElementById("Celsius");
const kelvin = document.getElementById("Kelvin");
const kelvin2 = document.getElementById("Kelvin2");
const result = document.getElementById("result");
let temp;

function convert() {

    if(fahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(celsius.checked) {
        temp = Number(textbox.value);
        temp = (temp-32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }

    else if(kelvin.checked) {
        temp = Number(textbox.value);
        temp = temp + 273.5;
        result.textContent = temp.toFixed(1) + "°K"
    }
        else if(kelvin2.checked) {
        temp = Number(textbox.value);
        temp = temp - 273.5;
        result.textContent = temp.toFixed(1) + "°C"
    }
    else {
        result.textContent = "Select a unit.";

    }
}
