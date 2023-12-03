const firstNumber = document.getElementById("first");
const secondNumber = document.getElementById("second");
const sign = document.getElementById("sign");
const result = document.getElementById("res");
const button = document.getElementById("equal");

// printAllValues();
equal.addEventListener("click", printAllValues);

function printAllValues() {
  let firstNumberValue = parseInt(firstNumber.value);
  let secondNumberValue = parseInt(secondNumber.value);
  let signValue = sign.value;
  //   console.log(firstNumberValue);
  //   console.log(secondNumberValue);
  //   console.log(signValue);
  actionSignDependent(firstNumberValue, secondNumberValue, signValue);
  //   actionSignDependent(3, 2, "+");
} // printAllValues

function actionSignDependent(first, second, sign) {
// function actionSignDependent(first = 3, second = 2, sign = "+") {
  switch (sign) {
    case "+":
      result.value = first + second;
      break;
    case "-":
      result.value = first - second;
      break;
    case "*":
      result.value = first * second;
      break;
    case "/":
      result.value = first / second;
      break;
    default:
      alert("unknown sign");
  }
} // actionSignDepend
