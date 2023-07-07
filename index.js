var num1Input = document.getElementById("num1-input");
var num2Input = document.getElementById("num2-input");

let sumEl = document.getElementById("sum-el")

function add() {
    var num1 = num1Input.value;
    var num2 = num2Input.value;
    let result = parseFloat(num1) + parseFloat(num2);
    sumEl.textContent = "Result: " + result
}


function subtract() {
    var num1 = num1Input.value;
    var num2 = num2Input.value;
    let result = parseFloat(num1) - parseFloat(num2);
    sumEl.textContent = "Result: " + result
}


function divide() {
    var num1 = num1Input.value;
    var num2 = num2Input.value;
    let result = parseFloat(num1) / parseFloat(num2);
    sumEl.textContent = "Result: " + result
}


function multiply() {
    var num1 = num1Input.value;
    var num2 = num2Input.value;
    let result = parseFloat(num1) * parseFloat(num2);
    sumEl.textContent = "Result: " + result
}
