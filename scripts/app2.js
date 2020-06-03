const buttons = document.querySelectorAll('.calc-button');
const calcDisplayText = document.querySelector('.calc-display-text'); 
let currentNum = 0;
let operator = '';


buttons.forEach(button => {
    button.addEventListener('click', processClick);
});

function processClick(e) {
    let userInput = e.target.innerText;
    
    if (userInput === '=') {
        inputArr.reduce((total, current) => {
            
        }, 0);
    }
    
    inputArr.push(userInput);
    

    updateCalcDisplay(userInput);   
}

function updateCalcDisplay(userInput) {
    calcDisplayText.innerText = userInput;
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

