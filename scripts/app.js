let calcDisplayText = document.querySelector('.calc-display-text'); 
const calcButtons = document.querySelector('.calc-buttons');
let operandA = '';
let operandB = '';
let operator = '';

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
        case '+':  
            return add(a,b);
        case '-':  
            return subtract(a,b);
        case '*':
            return multiply(a,b);           
        case '/':
            return divide(a,b);
    }
}

function isOperator(value) {
  return value === '+' || value === '-' || value === '*' || value === '/'; 
}

function isNumber(value) {
  return Number(value);
}

// function updateCalcDisplay(calcButtonValue) {
//   if (calcDisplayText.textContent === '0') {
//     calcDisplayText.textContent = '';
//   }
//   calcDisplayText.textContent += calcButtonValue;
// }

function handleClick(e) {
  const calcButtonValue = e.target.textContent;
  if (!calcButtonValue) { return; }


  // define second operand after first operand and operator are determined
  if (isNumber(calcButtonValue) && operandA && operator) {
    operandB += calcButtonValue;
  }
  
  // save operator if operator button is clicked
  if (isOperator(calcButtonValue)) {
    operator = calcButtonValue;
  }

  if (isNumber(calcButtonValue) && operandB === '') {
    operandA += calcButtonValue;
  }

  console.log(operandA, operator, operandB);

  
  // updateCalcDisplay(calcButtonValue);
}

calcButtons.addEventListener('click', handleClick);










// function updateCalcDisplay(calcButtonValue) {
//   if (calcDisplayText.textContent === '0') {
//     calcDisplayText.textContent = '';
//   }
//   calcDisplayText.textContent += calcButtonValue;
// }

// function handleClick(e) {
//   const calcButtonValue = e.target.textContent;
//   if (!calcButtonValue) { return; }

//   if (isOperator(calcButtonValue)) {
//     operandA = calcDisplayText.textContent; 
//     operator = calcButtonValue;
  
//   } else if (operandA && operator) {
//     calcDisplayText = '';
//     calcDisplayText.textContent += calcButtonValue;
//   } else {
//     updateCalcDisplay(calcButtonValue);
//   }

  
// }





