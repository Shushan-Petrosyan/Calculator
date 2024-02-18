const OPERATORS = ["+", "*", "/", "-"]

function checkIfOperator(char) {
  return OPERATORS.includes(char);
}

function clear1() {
  display.value = "";
}

function calc() {
  if (!display.value) return
  const lastChar = display.value[display.value.length - 1];
  if (checkIfOperator(lastChar)) return  
  display.value = eval(display.value);
}

function press(x) {
  const lastChar = display.value[display.value.length - 1];
  if (checkIfOperator(lastChar) && OPERATORS.includes(x)) return
  display.value += x
}

let display = document.getElementById("display");
