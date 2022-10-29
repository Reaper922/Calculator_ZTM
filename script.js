const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;


function sendNumberValue(number) {
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

function addDecimal() {
    if (awaitingNextValue) return;

    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);

    if (operatorValue && awaitingNextValue) return;

    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log('currentValue', currentValue);
    }

    awaitingNextValue = true;
    operatorValue = operator;
    console.log('firstValue', firstValue);
    console.log('operator', operatorValue);
}

inputBtns.forEach((button => {
    if (button.classList.length === 0) {
        button.addEventListener('click', () => sendNumberValue(button.value));
    } else if (button.classList.contains('operator')) {
        button.addEventListener('click', () => useOperator(button.value));
    } else if (button.classList.contains('decimal')) {
        button.addEventListener('click', addDecimal);
    }
}))


function resetAll() {
    calculatorDisplay.textContent = '0';
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
}

clearBtn.addEventListener('click', resetAll);