document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentValue = '';
    let previousValue = '';
    let operation = null;

    const updateDisplay = () => {
        display.value = currentValue; //value of attribute
    };

    // The purpose of the updateDisplay function is to update the user interface dynamically. By changing the value of the display element, 
    // the content that the user sees or interacts with is updated. This is a common pattern in JavaScript for dynamically updating parts of a web page 
    // in response to certain events or conditions without needing to refresh the entire page.

    document.querySelectorAll('#number-buttons button').forEach(button => {
        button.addEventListener('click', () => {
            const { num } = button.dataset; //<button data-num="1">1</button> can be accessed using element.dataset.num. const obj = { num: 5 }; const { num } = obj; console.log(num); // 5           
            if (num === '.' && currentValue.includes('.')) return;
            currentValue += num;
            updateDisplay();
        });
    });

    document.querySelectorAll('#operation-buttons button').forEach(button => {
        button.addEventListener('click', () => {
            if (!currentValue) return;
            const { op } = button.dataset``;
            
            if (op) {
                if (previousValue) {
                    calculate();
                } else {
                    previousValue = currentValue;
                    currentValue = '';
                }
                operation = op;
            } else if (button.id === 'equals') {
                calculate();
                updateDisplay();
                operation = null;
            } else if (button.id === 'clear') {
                currentValue = '';
                previousValue = '';
                operation = null;
                updateDisplay();
            }
        });
    });

    function calculate() {
        let calcResult;
        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case 'add':
                calcResult = prev + current;
                break;
            case 'subtract':
                calcResult = prev - current;
                break;
            case 'multiply':
                calcResult = prev * current;
                break;
            case 'divide':
                calcResult = prev / current;
                break;
            case 'pow':
                calcResult = Math.pow(prev, current);
                break;
            case 'log':
                calcResult = Math.log(current) / Math.log(prev);
                break;
            default:
                return;
        }
        currentValue = calcResult;
        previousValue = '';
    }
});
