let operand1 = null;
let operand2 = null;
let operator = null;
let numberValue = "0";
let showingResult = false;

const numbers = document.querySelectorAll("button.number");
const operators = document.querySelectorAll("button.operator");
const equalsButton = document.querySelector("#equalsButton");
const allClearButton = document.querySelector("#allClear");
const clearButton = document.querySelector("#clear");
const toggleNegativeButton = document.querySelector("#toggleNegative");
const decimalButton = document.querySelector("#decimal");
const numberDisplay = document.querySelector("#numberDisplay");
const operatorDisplay = document.querySelector("#operatorDisplay");

for (let num of numbers) num.addEventListener("click", enterOperand);
for (let op of operators) op.addEventListener("click", enterOperator);
equalsButton.addEventListener("click", enterEquals);
allClearButton.addEventListener("click", clearAll);
clearButton.addEventListener("click", clear);
toggleNegativeButton.addEventListener("click", toggleNegative);
decimalButton.addEventListener("click", enterDecimal);

updateNumberDisplay();

function updateNumberDisplay() {
  numberDisplay.value = numberValue;
  showingResult = false;
}

function updateOperatorDisplay() {
  operatorDisplay.value = operator;
}

function enterOperand(event) {
  if (showingResult == true) numberValue = null;

  let operand = event.target.value;
  if (numberValue !== "0." && (numberValue == null || numberValue == 0)) {
    numberValue = operand;
  } else {
    numberValue += operand;
  }

  numberValue = numberValue.substring(0, 15);

  updateNumberDisplay();
}

function enterOperator(event) {
  showingResult = false;

  if (operator != null && operand1 != null && numberValue != null) {
    operand2 = numberValue;
    let result = operate(operand1, operand2, operator);
    numberValue = result;
  }

  operand1 = numberValue;
  numberValue = null;
  operator = event.target.value;
  updateOperatorDisplay();
}

function enterEquals(event) {
  if (operand1 && operator) {
    operand2 = numberValue;

    let result = String(operate(operand1, operand2, operator));
    numberValue = result;
    operand1 = result;
    operator = null;
    updateOperatorDisplay();
    updateNumberDisplay();
    showingResult = true;
  }
}

function enterDecimal() {
  if (showingResult == true) numberValue = null;

  if (numberValue == null || numberValue == 0) numberValue = "0.";
  if (!numberValue.includes(".")) numberValue += ".";
  updateNumberDisplay();
}

function clearAll(event) {
  operatorDisplay.value = "";
  operand1 = null;
  operand2 = null;
  operator = null;
  numberValue = 0;
  updateNumberDisplay();
}

function clear(event) {
  numberValue = 0;
  updateNumberDisplay();
}

function toggleNegative(event) {
  numberValue *= -1;
  updateNumberDisplay();
}

function add(addend1, addend2) {
  return parseFloat((Number(addend1) + Number(addend2)).toFixed(10));
}

function subtract(minuend, subtrahend) {
  return parseFloat((Number(minuend) - Number(subtrahend)).toFixed(10));
}

function multiply(multiplicand, multiplier) {
  return Number(multiplicand) * Number(multiplier);
}

function divide(dividend, divisor) {
    if (divisor == 0) 
        return "NOPE!"
    
  return Number(dividend) / Number(divisor);
}

function operate(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return subtract(operand1, operand2);
    case "*":
      return multiply(operand1, operand2);
    case "/":
      return divide(operand1, operand2);
    default:
      throw new Error("Not a valid operator!");
  }
}
