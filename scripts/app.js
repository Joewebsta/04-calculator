const buttons = document.querySelectorAll('.calc-button');
const calcDisplayText = document.querySelector('.calc-display-text'); 

buttons.forEach(button => {
    button.addEventListener('click', updateCalcDisplay);
});

function updateCalcDisplay(e) {
    calcDisplayText.innerText = e.target.innerText;
}


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

