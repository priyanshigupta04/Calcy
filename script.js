
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) {
            return 'Infinity...';
        }
        return a / b;
    }

    
    const inputField = document.getElementById('search');
    const buttons = document.querySelectorAll('button');

    let firstOperand = '';
    let operator = '';
    let secondOperand = '';

    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;

            if (buttonText === 'C') {
                
                inputField.value = '';
                currentOperation = '';
                firstOperand = '';
                operator = '';
                secondOperand = '';
            } else if (buttonText === '=') {
                
                if (firstOperand !== '' && operator !== '' && secondOperand !== '') {
                    let result;
                    switch (operator) {
                        case '+':
                            result = add(parseFloat(firstOperand), parseFloat(secondOperand));
                            break;
                        case '-':
                            result = subtract(parseFloat(firstOperand), parseFloat(secondOperand));
                            break;
                        case '*':
                            result = multiply(parseFloat(firstOperand), parseFloat(secondOperand));
                            break;
                        case '/':
                            result = divide(parseFloat(firstOperand), parseFloat(secondOperand));
                            break;
                        default:
                            result = 'Error';
                            break;
                    }
                    inputField.value = result.toString();
                    
                    firstOperand = result.toString();
                    operator = '';
                    secondOperand = '';
                }
            } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
                
                operator = buttonText;
                
                firstOperand = inputField.value.trim();
                currentOperation = `${firstOperand} ${operator}`;
                inputField.value = '';
            } else {
                
                inputField.value += buttonText;
                if (operator !== '') {
                    secondOperand = inputField.value.trim();
                    currentOperation = `${firstOperand} ${operator} ${secondOperand}`;
                    inputField.value = '';
                    
                 }
            }
            inputField.placeholder = currentOperation || inputField.value;
        });
    });

