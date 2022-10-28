const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

function addDecimal() {
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

inputBtns.forEach((button => {
    if (button.classList.length === 0) {
        button.addEventListener('click', () => sendNumberValue(button.value));
    } else if (button.classList.contains('operator')) {
        button.addEventListener('click', () => sendNumberValue(button.value));
    } else if (button.classList.contains('decimal')) {
        button.addEventListener('click', addDecimal);
    }
}))


function resetAll() {
    calculatorDisplay.textContent = '0';
}

clearBtn.addEventListener('click', resetAll);