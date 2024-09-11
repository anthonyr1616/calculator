let operand1;
let operand2;
let operator;

function add(addend1, addend2) {
  return Number(addend1) + Number(addend2);
}

function subtract(minuend, subtrahend) {
  return Number(minuend) - Number(subtrahend);
}

function multiply(multiplicand, multiplier) {
  return Number(multiplicand) * Number(multiplier);
}

function divide(dividend, divisor) {
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
