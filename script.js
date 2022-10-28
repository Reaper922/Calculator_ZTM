const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clear = document.getElementById('clear-btn');

function sendNumberValue(number) {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

inputBtns.forEach((button => {
    if (button.classList.length === 0) {
        button.addEventListener('click', () => sendNumberValue(button.value));
    } else if (button.classList.contains('operator')) {
        button.addEventListener('click', () => sendNumberValue(button.value));
    } else if (button.classList.contains('decimal')) {
        button.addEventListener('click', () => sendNumberValue(button.value));
    }
}))